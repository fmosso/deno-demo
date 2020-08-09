import { RouterContext } from "./../deps.ts";
import books from './model.ts';

export async function helloWorld(context: RouterContext): Promise<void> {
    context.response.body = "Hello world!";
}


export async function getBooks(context: RouterContext){
    context.response.body = Array.from(books.values());
}

export async function getBooksByID(context: RouterContext) {
    if (context.params?.id !== undefined && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    } else {
        context.response.status = 500
        context.response.body = "Book not found" 
    }
};