import React from 'react' 
import Input from './Input'
import Button from './Button'

const Form = ( {addFunction, value1, value2, handler1, handler2}) =>{
    return (
        <form onSubmit = {addFunction}>
          <Input title='nimi' newValue={value1} handler={handler1}></Input>
          <Input title='numero' newValue={value2} handler={handler2}></Input>
          <Button text="lisää"></Button>
        </form>        
    )
}

export default Form