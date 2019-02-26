import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
// import _ from 'lodash'


const API = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

    constructor() {
        super()

        this.state = {
            pokemon: []
        }
    }

    componentDidMount() {
        this.getPokemon()
    }

    fetchPokemon() {
        return fetch(API)
        .then(res => res.json())
    }

    getPokemon() {
        this.fetchPokemon().then(data => {
            this.setState({
                pokemon: data
            })
        })
    }

    postPokemon = (name, hp, frontUrl, backUrl) => {
        // console.log(name)
        fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                name: name,
                stats: [
                    {
                        name: 'hp',
                        value: hp
                    }
                ],
                sprites: {
                    front: frontUrl,
                    back: backUrl
                }
            })
        }).then(() => this.getPokemon())
    }

    handleChange = event => {
        this.fetchPokemon()
        .then(data => data.filter(pokemon => {
            // debugger
            // pokemon.name.includes(event.target.value)
        }))
    }


    render() {
    // console.log(this.state)
        return (
            <div>
                <h1>Pokemon Searcher</h1>
                <br />
                <Search
                    onSearchChange={this.handleChange}
                    showNoResults={false} />
                <br />
                <PokemonCollection
                    pokemon={this.state.pokemon}/>
                <br />
                <PokemonForm
                    postPokemon={this.postPokemon}/>
            </div>
        )
    }
}

export default PokemonPage
