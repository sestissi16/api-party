import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Pokemon.css'

import PokemonName from './PokemonName'

class Pokemon extends Component{
    state ={
        pokename: '',
    }

    handleChange = (ev) => {
        const pokename = ev.currentTarget.value
        this.setState({ pokename })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/pokeapi/${this.state.pokename}`)
    }

    render(){
        return(
            <div className="pokemon">
                <img 
                    className="pokemon-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" 
                    alt="pokemon logo" 
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={this.state.pokename}
                            onChange={this.handleChange}
                            autoFocus
                        />
                    </div>
                    <div>
                        <button type="submit">Look up Pokemon!</button>
                    </div>
                </form>

                <Route exact path='/pokeapi' render={() => <h3>Please enter the name of a Pokemon you want to search</h3>} />
                <Route path='/pokeapi/:pokename' component={PokemonName} />
            </div>
        )
    }
}

export default Pokemon