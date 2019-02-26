import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: []
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
        <br />
        <PokemonForm />
      </div>
    )
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon').then(res => res.json()).then(pokemon => {
      console.log(pokemon)
      this.setState({
        pokemon: pokemon
      })
    })
  }
}

export default PokemonPage
