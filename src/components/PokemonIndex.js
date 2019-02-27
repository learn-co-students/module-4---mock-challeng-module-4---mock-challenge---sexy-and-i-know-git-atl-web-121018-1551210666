import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const API = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component { 
  constructor() {
    super() 

    this.state = {
      pokemon: [],
      searchEntry: '',
      filteredPokemon: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(pokemon => {
      console.log(pokemon)
      this.setState({
        pokemon: pokemon,
        filteredPokemon: pokemon
      })
    })
  } 

  handleSearch = (event, {value}) => {
    const filteredPokemon = this.state.pokemon.filter(poke =>
      poke.name.includes(value))

    this.setState({
      searchEntry: value,
      filteredPokemon: filteredPokemon
    })
  }

  addPokemon = (poke) => {
    this.setState({
      pokemon: [...this.state.pokemon, poke]
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} api={API}/>
      </div>
    )
  }
}

export default PokemonPage
