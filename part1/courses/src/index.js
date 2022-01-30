import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}
const Contents = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const ContentsX3 = (props) => {
  return (
    <div>
      <Part name={props.part1.name} exercises={props.part1.exercises}/>
      <Part name={props.part2.name} exercises={props.part2.exercises}/>
      <Part name={props.part3.name} exercises={props.part3.exercises}/>
    </div>
  )
}
const ContentsX1 = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}
const ContentsX2 = (props) => {
  return (
    <div>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Total {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} exercises</p>
  )
}

const App = () => {

  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8 
      },
      { 
        name: 'Using props',
        exercises: 10 
      },
      {
        name: 'Component states',
        exercises: 12
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}></Header>
      <Contents parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);