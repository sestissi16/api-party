import React, { Component } from 'react'
import { Route } from 'react-router-dom'

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
            <div className="Pokemon">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={this.state.pokename}
                            onChange={this.handleChange}
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