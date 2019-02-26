import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
    constructor() {
        super()

        this.state = {
            clicked: false
        }
    }

    handleClick = event => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        const stats = this.props.pokemon.stats

        return (
            <Card>
                <div>
                    <div className="image">
                        { !this.state.clicked ?

                        <img alt={this.props.pokemon.name}
                             onClick={this.handleClick}
                             src={this.props.pokemon.sprites.front}/> :

                        <img alt={this.props.pokemon.name}
                             onClick={this.handleClick}
                             src={this.props.pokemon.sprites.back}/> }
                    </div>

                    <div className="content">
                        <div className="header">{this.props.pokemon.name}</div>
                    </div>

                    <div className="extra content">
                        <span>
                            <i className="icon heartbeat red" />
                            {stats.find(stat => stat.name === 'hp').value}
                        </span>
                    </div>
                </div>
            </Card>
        )
    }
}

export default PokemonCard
