import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  render() {
    var cards = this.makeCards(this.props.pokemon)
    return (
      <div>
        <Card.Group itemsPerRow={6}>
          {cards}
        </Card.Group>
      </div>
    )
  }

  makeCards = (pokemon) => {
    return pokemon.map(p => {
      return <PokemonCard name={p.name} stats={p.stats} img={p.sprites}/>
    })
  }
}

export default PokemonCollection
