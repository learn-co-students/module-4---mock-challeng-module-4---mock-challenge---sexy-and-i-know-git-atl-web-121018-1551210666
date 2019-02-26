import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    filteredpokemon: []
  }


  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => this.setState({ pokemon: data }))
  }

  onSearchChange = (event) => {
    event.persist()

    filteredPoke = () => {
      return this.state.pokemon.filter(poke => {
      return this.state.pokemon.name.includes(event.target.value)
      })
    }

  }



  render() {

    console.log(this.state.pokemon)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(event) => this.onSearchChange(event)} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
