import React, { Component } from 'react';
import './PokemonList.css';
import ShowList from '../ShowList/ShowList';
const pokemonList = props => {
   
    return(
       
        <ul className="pokemons_list">        
        {props.pokemons.map(pokemon => 
        <React.Fragment key={pokemon.id}>
            
                <li  className="pokemons_item">
                    <div className="pokemons_item-data">
                        <h1>{pokemon.name}</h1>
                        <h2>{pokemon.num}</h2>
                    </div>
                    <div className="pokemons_list-details">
                        <div className="list_box">
                            <header className="list_header">
                            <b>Type</b>
                            </header>
                                
                            <ShowList propertyArray={pokemon.type} />
                        </div>
                        <div  className="list_box">
                            <header className="list_header">
                            <b>Weakness</b>
                            </header>
                             <ShowList propertyArray={pokemon.weaknesses} /> 
                        </div>                    
                    </div>
                </li>
            
            
        </React.Fragment>
        )}        
    </ul>


    )
}

export default pokemonList