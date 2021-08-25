import React from "react";
import ShelfChanger from "./ShelfChanger";
 class Book extends React.Component{

    
    render(){   const book = this.props.book ; 
             
        return(  
        
        <li key={Math.random()} >

            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193,
                                                backgroundImage:`url(${ book.imageLinks.thumbnail })` }} >
                    </div>

                        <ShelfChanger book={book} chng_shelf={this.props.chng_shelf} /> 
                </div>
                
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>

    </li>
     ); }
}
export default Book;
