import React, { Component } from 'react';
import PokemonFilter from '../components/PokemonFilter/PokemonFilter';
import PokemonList from '../components/PokemonList.js/PokemonList';
import PokemonSearch from '../components/PokemonSearch/PokemonSearch';
import './PokemonPage.css';
class PokemonPage extends Component {
    state = {
        originalPokemons : [],
        filteredPokemons : [],
        types: [],
        weaknesses: []
    }

    componentDidMount(){
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
            .then(response => response.json())
            .then(data => {
                const types = data.pokemon.map(pokemon => pokemon.type);
                const uniqueTypes = [...new Set(types.flat(1))];
                console.log(uniqueTypes);
                
                const weaknesses = data.pokemon.map(pokemon => pokemon.weaknesses);
                const uniqueWeaknesses = [...new Set(weaknesses.flat(1))];
                console.log(uniqueWeaknesses);
                this.setState({
                    originalPokemons: data.pokemon,
                    filteredPokemons: data.pokemon,
                    types: uniqueTypes,
                    weaknesses: uniqueWeaknesses
                })
            })

        
    }

    filterValues = {
        searchText: "",
        type: [],
        weakness: []
    }

    filterHandler = (value, type) => {   
        if(type === "type"){
            this.filterValues.type = value;
        }else if(type === "weakness"){
            this.filterValues.weakness = value;
        }else if(type === "search"){
            this.filterValues.searchText = value;            
        }

        let filteredPokemons =  [...this.state.originalPokemons]        

        const filterValues = this.filterValues;
        filteredPokemons= filteredPokemons.filter(function(pokemon) {
            if(!pokemon.name.toLowerCase().includes(filterValues.searchText)){
                return false;
            }
            for (var key in filterValues.type) {
                if (!pokemon.type.includes(filterValues.type[key]))
                return false;
            }       
            for (var key in filterValues.weakness) {
                if (!pokemon.weaknesses.includes(filterValues.weakness[key]))
                return false;
            }         
            return true;
            });                
        this.setState({filteredPokemons: filteredPokemons});
    }

    searchHandler = (searchText) => {
        searchText = searchText.toLowerCase();
        let filteredPokemons = [...this.state.filteredPokemons];
        filteredPokemons = filteredPokemons.filter(pokemon => pokemon.name.toString().toLowerCase().includes(searchText));
        this.setState({filteredPokemons : filteredPokemons});
    }    

    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <div className="box">
                        <PokemonSearch 
                        handleSearch={this.filterHandler}
                        />
                    </div>
                    <div className="box">
                        <PokemonFilter 
                            filterOn={this.state.types} 
                            type="type" 
                            applyFilter={this.filterHandler}/>
                    </div>
                    <div className="box">
                        <PokemonFilter 
                            filterOn={this.state.weaknesses} 
                            type="weakness" 
                            applyFilter={this.filterHandler} />               
                    </div>
                </div>
                <div className="center">

                <PokemonList 
                    pokemons={this.state.filteredPokemons} />
                </div>
            </React.Fragment>
        )
    }
}

export default PokemonPage;