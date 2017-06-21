import React, { Component } from 'react'
import './PokemonName.css'

class PokemonName extends Component{
    state={
        pokemon: {
            base_experience: '',
            height: '',
            name: '',
            weight:'',
        }
    }

    constructor(props){
        super(props)

        this.fetchPokemonData(this.props)
    }

    fetchPokemonData = (props) =>{
        fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.pokename}`)
            .then(response => response.json())
            .then(pokemon => this.setState({ pokemon }, () => console.log(pokemon)))
    }

    componentWillReceiveProps(nextProps){
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged){
            this.fetchPokemonData(nextProps)
        }
    }

    render(){
        const { pokemon } = this.state
        return(
            <div className="container">
                <div className="left-sidebar">
                    <img src="https://s-media-cache-ak0.pinimg.com/originals/5b/36/b5/5b36b5e0ad4ec32516ad9223b96a07d6.jpg" alt="picture of pokemon" />
                </div>
                <div className="pokemon-stats">
                    <h2>{pokemon.name}</h2>
                    <h3>Height of pokemon: {pokemon.height}</h3>
                    <h3>Weight of pokemon: {pokemon.weight}</h3>
                    <h3>Base experience gained after defeating {pokemon.name}: {pokemon.base_experience}</h3>    
                </div>
                <div className="right-sidebar">
                    <img src="https://s-media-cache-ak0.pinimg.com/originals/14/a5/d8/14a5d83b23808cbd56fa2583557d6a40.jpg" alt="pokemon picture" />
                </div>
            </div>
        )
    }
}

export default PokemonName