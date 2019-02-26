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

  handleForm = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    console.log("submit form has been fired");
    e.preventDefault();
    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        stats: [
          {
            value: "unknown",
            name: "attack"
          },
          {
            value: "unknown",
            name: "speed"
          },
          {
            value: "unknown",
            name: "special-defense"
          },
          {
            value: "unknown",
            name: "special-attack"
          },
          {
            value: "unknown",
            name: "defense"
          },
          {
            value: this.state.hp,
            name: "hp"
          }
        ],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }

    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name"
              onChange={(e) => this.handleForm(e)} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => this.handleForm(e)} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={(e) => this.handleForm(e)} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={(e) => this.handleForm(e)} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm


