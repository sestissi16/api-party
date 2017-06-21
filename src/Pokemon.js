import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class Pokemon extends Component{
    state ={
        pokename: '',
    }

    handleChange = (ev) =>{
        const pokename = ev.currentTarget.value
        this.setState({ pokename })
    }

    render(){
        return(
            <div className="Pokemon">
                <form>
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
            </div>
        )
    }
}

export default Pokemon