import React from 'react' 

const Input = ( {title, newValue, handler} ) => {
  return (
    <div>
      {title}: 
      <input 
        value={newValue}
        onChange={handler} />
    </div>
  )
}

export default Input