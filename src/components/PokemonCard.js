import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: false
  }

  flip = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  getHp = () => {
    return this.props.stats.find(function(stat) {
      if (stat.name === "hp") {
        return stat.value
      }
    }).value
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.flipped ? this.props.img.back : this.props.img.front} onClick={this.flip}/>
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHp()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
