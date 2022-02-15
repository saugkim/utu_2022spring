import React from 'react';
import Header from './components/Header';
import ViewPersons from './components/ViewPersons';
//import Form from './components/Form';

import Input from './components/Input';
import Button from './components/Button';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { 
          name: 'Arto Hellas', 
          number: '040-123456' 
        },
      ],
      newName: '',
      newNumber: '',
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    
    const lista = this.state.persons.map(person => person.name)
    console.log(lista)

    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber,
    }
  
    if (lista.includes(this.state.newName)) {
      alert("person name already in the list")
    } else {
      console.log("do something")
      const persons = this.state.persons.concat(personObject)
      this.setState({
        persons: persons,
        newName: '',
        newNumber: '',
      })
    }
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
        <form onSubmit = {this.addPerson}>
          <Input title='nimi' newValue={this.state.newName} handler={this.handlePersonChange}></Input>
          <Input title='numero' newValue={this.state.newNumber} handler={this.handleNumberChange}></Input>
          <Button text='lisää'></Button>
        </form> 
        <Header title='Numerot'></Header> 
        <ViewPersons list={this.state.persons}></ViewPersons>
      </div>    
    )
  }
}

export default App