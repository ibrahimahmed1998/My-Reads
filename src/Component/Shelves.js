import React from 'react'
import Shelf from './Shelf'

class Shelves extends React.Component {

    render(){
        const allbooks = this.props.allbooks;
        const reading = allbooks.filter(book => book.shelf ==="currentlyReading");
        const want2read = allbooks.filter(book=>book.shelf ==="wantToRead");
        const read = allbooks.filter(book=>book.shelf ==="read");

        return(
            <div className="list-books-content">
               <Shelf books={reading} shelf_title={"reading"}  chng_shelf={this.props.chng_shelf} />
               <Shelf books={want2read} shelf_title={"want2read"} chng_shelf={this.props.chng_shelf}  />
               <Shelf books={read} shelf_title={"read"} chng_shelf={this.props.chng_shelf}  />
            </div>
        );
    }
}

export default Shelves;