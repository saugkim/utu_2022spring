import React from 'react'

import Header from './components/Header';
// import Input from './components/Input';
// import Button from './components/Button';
//import Person from './components/Person';
import services from './services/personService';
import Form from './components/Form'
import ViewPersons from './components/ViewPersons';

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
        console.log('promise fulfilled')
        this.setState({persons: response})
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
          this.setState( {
            persons: this.state.persons.concat(response),
            newName: '',
            newNumber: ''
          })
        })
    }
  }

  deletePerson = (person) => {
    if (window.confirm(`poistetaanko ${person.name} ?`)) {
      services
        .remove(person.id)
        .then(() => {
          this.setState({
            persons: this.state.persons.filter(item => item.id !== person.id) })
        })
      return true
    }
  }

  // removePerson = (id) => {
  //   services.remove(id)
  //     .then(() => {
  //       this.setState({
  //         persons: this.state.persons.filter(item => item.id !== id) })
  //     })
  //   return true
  // }

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
        <Form
          addFunction={this.addPersonDB}
          value1={this.state.newName}
          handler1={this.handlePersonChange}
          value2={this.state.newNumber}
          handler2={this.handleNumberChange}
        />
      
        <Header title='Numerot'></Header> 
        <ViewPersons list={this.state.persons} listener ={this.deletePerson} /> 
        {/* <table><tbody>
          {this.state.persons.map(person => 
            <Person key={person.id} 
                    person={person} 
                    listener={() => { window.confirm('poistetaanko '+ person.name) && this.removePerson(person.id) }} />
          )}
        </tbody></table> */} 
      </div>    
    )
  }
}

export default App