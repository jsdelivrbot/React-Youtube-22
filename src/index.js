import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCeazBo3HnieAROb3kB-Yw6vR6X8QyoFGw';


const App = () => {
  return (
           <div>
             <SearchBar />
           </div>
         )
};

ReactDom.render(<App />, document.querySelector('.container'))
