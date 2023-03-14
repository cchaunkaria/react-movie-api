import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import "./Landing.css";
import cinema from '../assets/cinema.png'
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import SearchIcon from '@mui/icons-material/Search';

// API KEY AIzaSyBPf4Pf_AwMsYHGbMTo34duEQQqvNVvjbY
function Landing() {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const search = e => {
        e.preventDefault();

        console.log('search')

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        navigate('/search')
    }

  return (
    <form id="landing">
      <header className="header__container">
        <div className="header__description">
          <h1 className="description green">
            Canada's most awarded <br />
            movie subscription platform
          </h1>
          <h2 className="description">
            Find your motion picture with <span className="green">Flicker</span>
          </h2>
         {/*} <div className="input__container">
            <input
              id="userInput"
              type="text"
              className="input__field"
              placeholder="Search by title, genre, or keyword"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button className="btn__search" onClick={search} type='submit'>
              <Search fontSize="large"/>
            </button>
          </div>
  */}
          <div className="input__container_2">
        <input 
        className="input__text"
        type='text'
        placeholder="Search by title, genre, or keyword"
        value={input}
              onChange={e => setInput(e.target.value)}
              />

<button className="search__button" onClick={search} type='submit'>
            <SearchIcon className="search__inputIcon"/>
            </button>
            
            </div>
        </div>
      </header>
      <img src={cinema} className="img__cinema"/>
    </form>
  );
}

export default Landing;
