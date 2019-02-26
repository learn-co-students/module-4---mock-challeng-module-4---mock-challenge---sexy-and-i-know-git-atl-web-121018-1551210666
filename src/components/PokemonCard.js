import React from 'react'
import { Card } from 'semantic-ui-react'



class PokemonCard extends React.Component {
  state = {
    toggle: true
  }
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    const { name, sprites, stats } = this.props.poke

    return (
      <Card>
        <div>
          <div className="image">
            <img
              src={this.state.toggle ? sprites.front : sprites.back}
              alt="alt"
              onClick={this.toggle} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
