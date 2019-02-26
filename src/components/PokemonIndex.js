import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ''
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/pokemon").then(res => res.json())
      .then(data => this.setState({
        pokemons: data
      }))
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    let filtered = this.state.pokemons.filter(poke => poke.name.includes(this.state.searchTerm))
    console.log(filtered)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(e) => this.handleSearch(e)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={filtered} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
