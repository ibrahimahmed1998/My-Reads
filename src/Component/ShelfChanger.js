import React from 'react'
 
class ShelfChanger extends React.Component {

    render() {

        const book = this.props.book;


        return (

            <div className="book-shelf-changer">
                <select value={book.shelf} onChange={ e => { this.props.chng_shelf(book, e.target.value)     } }>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>


        );
    }
}

export default ShelfChanger;