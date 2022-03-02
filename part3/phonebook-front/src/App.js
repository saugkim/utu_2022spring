import React from 'react'

import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import Person from './components/Person';
import services from './services/personService';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
    }
  }

  componentDidMount() {
    console.log('did mount')
    services
      .getAll()
      .then(response => {
        this.setState( {persons: response} )
      })
  }

  addPersonDB = (event) => {
    event.preventDefault()
    const lista = this.state.persons.map(person => person.name)
    
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber,
    }

    if (lista.includes(this.state.newName)) {
      alert("person name already in the list")
    } else {
      services
        .create(personObject)
        .then(response => {
          this.setState({
            persons: this.state.persons.concat(response),
            newName: '',
            newNumber: ''
          })
        })
    }
  }

  removePerson = (id) => {
    services.remove(id)
      .then(() => {
        this.setState({
          persons: this.state.persons.filter(item => item.id !== id) })
      })
    return true
  }

  handlePersonChange = (event) => {
    this.setState( {newName: event.target.value});
  }

  handleNumberChange = (event) => {
    this.setState( {newNumber: event.target.value})
  }

  render() {
    return (
      <div>
        <Header title='Puhelinluettelo'></Header>  
        <form onSubmit = {this.addPersonDB}>
          <Input title='nimi' newValue={this.state.newName} handler={this.handlePersonChange}></Input>
          <Input title='numero' newValue={this.state.newNumber} handler={this.handleNumberChange}></Input>
          <Button text='lisää'></Button>
        </form> 
        <Header title='Numerot'></Header> 
        <table><tbody>
          {this.state.persons.map(person => 
            <Person key={person.id} 
                    person={person} 
                    listener={() => { window.confirm('Poistetaanko '+ person.name) && this.removePerson(person.id) }} />
          )}
        </tbody></table>
      </div>    
    )
  }
}

export default App