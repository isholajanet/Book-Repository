
import {Request, Response} from 'express'

import Book from './../models/books'

// GET - /books -- to return all books
export let allBooks = (req: Request, res: Response) => {
    let books = Book.find((err: any, books : any) => {
        if(err){
            res.send(err)
        }else{
            res.send(books);
        }
    })
}


// GET - /books/id -- return a book by id
export let getBook = (req: Request, res: Response) => {
    Book.findById(req.params.id, (err: any, book: any) => {
        if(err){
            res.send(err)
        }else{
            res.send(book)
        }
    })
}

//PUT - /book -- add a new book
export let addBook = (req: Request, res: Response) => {
    let book = new Book(req.body);

    book.save((err:any) =>{
        if(err){
            res.send(err)
        }else{
            res.send(book)
        }
    })
}

//DELETE - /books/id  - delete a book by id
export let deleteBook = (req: Request, res: Response) => {
    Book.deleteOne({_id : req.params.id}, (err: any) => {
        if(err){
            res.send(err)
        }else{
            res.send("Successfully deleted the book.")
        }
    })
}
//POST - /book/id - update a book by id
export let updateBook = (req: Request, res: Response) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err: any, book: any) => {
        if(err){
            res.send(err)
        }else{
            res.send("Successfully updated book")
        }
    })
}
