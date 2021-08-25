import React from "react";

class SearchBtn extends React.Component{

render(){
    return(
            <div className="open-search">
                <button onClick={ () => this.props.Src_Page(true) } > Add a book </button>
            </div>
          );
}}
export default SearchBtn; 
