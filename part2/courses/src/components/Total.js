import React from 'react' 

const Total = ( {parts} ) => {
  const result = parts.reduce( (a, v) => a = a + v.exercises, 0 )
    
  return (
    <div> 
      <p>Total {result}</p>
    </div>  
  )
}
  
export default Total
