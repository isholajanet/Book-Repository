import express, {Request, Response} from 'express'
import bodyParser from 'body-parser';

import * as bookController from './controllers/bookController'

const app = express()
const port = 3000;

app.use(bodyParser.json());

app.get('/books', bookController.allBooks);
app.get('/book/:id', bookController.getBook);
app.put('/book', bookController.addBook)
app.delete('/book/:id', bookController.deleteBook)
app.post('/book/:id', bookController.updateBook)

app.listen(port, () => {
    console.log(`Application is running on http://localhost:${port}`);
})

