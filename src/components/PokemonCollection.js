import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    console.log(this.props.pokemons)
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.props.pokemons.map(poke => <PokemonCard poke={poke} key={poke.id} />)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
