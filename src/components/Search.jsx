import React, { useState } from "react";
import "./Search.css";
import collage from "../assets/collage.jpeg";
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from "../StateProvider";
import useOmdbSearch from "../useOmdbSearch";
import Response from "../Response";
import { actionTypes } from "../reducer";

function Search() {

    const [{ term }, dispatch] = useStateValue();
    const [input, setInput] = useState('');

    const search = e => {
        e.preventDefault();

        console.log('search')

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
    }

    // LIVE API CALL
    const { data } = useOmdbSearch(term);

    // MOCK API CALL 
    // const data = Response

    console.log(data);

  return (
    <form>
    <div className="search__container">
      <div className="search__header">
      <h1>Browse movies</h1>  

        <div className="input__container">
        <input 
        className="input__text"
        type='text'
        value={input}
              onChange={e => setInput(e.target.value)}
              />

<button className="search__button" onClick={search} type='submit'>
            <SearchIcon className="search__inputIcon"/>
            </button>
            
            </div>
      </div>
        <img src={collage} className="img__moviePosters" />

       
    </div>
    {term && (
    <div className="results">
        {data?.Search.map(item => (
            <div className="result">
                <img src={item.Poster} alt="" />
                <h2> Title: {item.Title} </h2>
                <h2> Type: {item.Type} </h2>
                <h2> Year: {item.Year} </h2>
                <h2> imdbID: {item.imdbID} </h2>
            </div>
        ))}
    </div>
    )}
    </form>
  );
}

export default Search;
