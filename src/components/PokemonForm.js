import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
    constructor() {
        super()

        this.state = {
            name: '',
            hp: '',
            frontUrl: '',
            backUrl: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        // debugger
        const name = event.target.name.value
        const hp = event.target.hp.value
        const frontUrl = event.target.frontUrl.value
        const backUrl = event.target.backUrl.value

        event.target.reset();

        this.props.postPokemon(name, hp, frontUrl, backUrl)
    }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
