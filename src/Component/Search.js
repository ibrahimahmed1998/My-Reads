import React from "react";
import * as api from '../BooksAPI';
import Book from "./Book";
import ShelfChanger from "./ShelfChanger";

class Search extends React.Component {

    state = { get_all: [], load: false }

    render() {
        const books = this.state.get_all;
        const chng = this.props.chng_shelf;
        //console.log(chng);

        return (

            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => { this.props.Src_Page(false) }} > Close </button>

                    <div className="search-books-input-wrapper">

                        <input type="text" placeholder="Search by title or author"
                            onChange={
                                async e => {

                                    api.search(e.target.value).then(

                                        res => {

                                            if (typeof (res) !== 'object') { this.setState({ load: false }); }
                                            else {
                                                this.setState({ get_all: res })
                                                { this.setState({ load: true }); }
                                            }
                                        }
                                    );
                                }} />
                    </div>
                </div>

                <div className="search-books-results" >
                    <ol className="books-grid">
                        {  this.state.load ? books.map( book =>
                                ( <Book key={Math.random()} book={book} chng_shelf={chng} >
                                        <ShelfChanger book={book} chng_shelf={this.props.chng_shelf} /> 
                                  </Book>))  : <h1> try again... </h1> 

                        }

                    </ol>
                </div>
            </div>
);}}
export default Search;
