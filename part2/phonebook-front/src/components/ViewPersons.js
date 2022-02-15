import React from 'react' 
import Person from './Person'

const ViewPersons = ( {list} ) => {
    
    return (
        <table>
          <tbody>
            {list.map(person => <Person key={person.name} person={person} />)}
          </tbody>
        </table>
    )
}

export default ViewPersons