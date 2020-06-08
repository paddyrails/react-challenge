import React, { Component } from 'react';
import PokemonFilter from '../components/PokemonFilter/PokemonFilter';
import PokemonList from '../components/PokemonList.js/PokemonList';

class PokemonPage extends Component {
    state = {
        pokemons : [],
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
                    pokemons: data.pokemon,
                    types: uniqueTypes,
                    weaknesses: uniqueWeaknesses
                })
            })

        
    }

    filterhandler = (value) => {   
        console.log(value);
    }

    render(){
        return (
            <React.Fragment>
                <PokemonFilter filterOn={this.state.types} applyFilter={this.filterhandler}/>
                <PokemonFilter filterOn={this.state.weaknesses} applyFilter={this.filterhandler} />
                <PokemonList pokemons={this.state.pokemons} />
                
            </React.Fragment>
        )
    }
}

export default PokemonPage;