import React from 'react'
import Book from './Book';

class Shelf extends React.Component {

render(){
    const book_shelf = this.props.books;
    const shelf_title = this.props.shelf_title;

    console.log(book_shelf);
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf_title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { 
                          book_shelf.map( book=>( <Book key={Math.random()} book={book} chng_shelf={this.props.chng_shelf} /> ) )
                        }
                    </ol>
                </div>
            </div>
        </div>
    );}}
export default Shelf;