import React from 'react' 
import Header from './Header'
import Contents from './Contents'
import Total from './Total'

const Course = ( {course} ) => {
    return(
        <div>
            <Header name={course.name}></Header>
            <Contents parts={course.parts}></Contents>
            <Total parts={course.parts}></Total>
        </div>
    )
}

export default Course