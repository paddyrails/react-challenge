import React, { useRef } from 'react';
import './PokemonSearch.css';

const PokemonSearch = props => {
    const inputEl = useRef(null);
    const inputType = "search";
    return(
        <React.Fragment>
        <input type="text" ref={inputEl} name="search" id="search"></input><br/>
        <button onClick={() => props.handleSearch(inputEl.current.value, inputType)}>Search</button>
        <button onClick={() => props.handleSearch("", inputType)}>Clear</button>
       </React.Fragment>
    )
}

export default PokemonSearch;