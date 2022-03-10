import React from 'react' 
import Person from './Person'

const ViewPersons = ({list, listener}) => {   
  return (
    <table>
      <tbody>
        {list.map(person => <Person key={person.name} person={person} listener={()=>listener(person)}/>)}
      </tbody>
    </table>
  )
}

export default ViewPersons