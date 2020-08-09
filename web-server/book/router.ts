import { Router } from './../deps.ts';
import * as model from './controller.ts';


const router = new Router();
router
  .get("/", model.helloWorld )
  .get("/books", model.getBooks )
  .get("/books/:id", model.getBooksByID)

  export default router