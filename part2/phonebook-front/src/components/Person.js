import React from 'react' 

const Person = ({person, listener}) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td><button onClick={listener}>poista</button></td>
    </tr>
  )   
}

export default Person