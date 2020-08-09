// deno 1.2.x required oak version up to v6.0.1
import { Application, Router, RouterContext } from "./deps.ts";
import { applyGraphQL, GQLError } from "./deps.ts";
import { types } from './user/schema.ts';
import { resolvers } from './user/resolvers.ts';

const app = new Application();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: types,
  resolvers: resolvers,
  context: (ctx: RouterContext) => ({ user: "Baron" })
})



app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

console.log("Server start at http://localhost:8080");
await app.listen({ port: 8080 });