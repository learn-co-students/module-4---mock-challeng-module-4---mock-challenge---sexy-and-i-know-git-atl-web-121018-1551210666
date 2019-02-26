import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon').then(res => res.json()).then(pokemon => {
      this.setState({
        pokemon: pokemon
      })
    })
  }

  search = (event) => {
    const filterText = event.target.value

    fetch('http://localhost:3000/pokemon').then(res => res.json()).then(pokemon => {
      const newPokemon = pokemon.filter(poke => poke.name.includes(filterText))

      this.setState({
        pokemon: newPokemon
      })
    })
  }



  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.search} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
