import React from 'react'
import './App.css'
import * as api from './BooksAPI';
import Shelves from './Component/Shelves';
import Search from './Component/Search';
import SearchBtn from './Component/SearchBtn';
import Header from './Component/Header';

class BooksApp extends React.Component {

  state = { Src_Page:false ,  books:[]  }
 
  btn_state = state => { this.setState({ Src_Page:state }); };

  componentDidMount(){  api.getAll().then( res=> this.setState({books:res})   )  }
 
  chng_shelf = (book,shelf) =>{
  
    this.setState({

      books: this.state.books.map( b => { 
        // eslint-disable-next-line no-unused-expressions
        b.id === book.id ? ( b.shelf = shelf ) : b ;

        api.update(book,shelf);

        return b; 
      })
    });
  };

  render(){
    return(

      <div className="app">

          { this.state.Src_Page ? (<Search Src_Page={this.btn_state} chng_shelf={this.chng_shelf}   /> ):( 
          
          <div className="list-books">
            <Header />
            <Shelves allbooks={this.state.books} chng_shelf={this.chng_shelf}/> 
            <SearchBtn Src_Page={this.btn_state} /> 
          </div> )
          }
      </div>
    )}}
export default BooksApp;
