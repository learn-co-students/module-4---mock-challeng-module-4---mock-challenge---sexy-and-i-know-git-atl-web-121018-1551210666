import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props) {
    super(props)

    this.front = props.poke.sprites.front
    this.back = props.poke.sprites.back
    this.hp = props.poke.stats.find(stat => stat.name === "hp").value

    this.state = {
      image: this.front
    }
  }

  flip = () => {
    let side

    if (this.state.image === this.front) {
      side = this.back
    } else {
      side = this.front
    }

    this.setState({
      image: side
    })
  }

  render() {
    return (
      <Card onClick={this.flip}>
        <div>
          <div className="image">
            <img src={this.state.image} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
