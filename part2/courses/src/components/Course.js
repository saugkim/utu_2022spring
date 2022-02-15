import React from 'react' 
import Header from './Header'
import Contents from './Contents'

const Course = ( {course} ) => {
    return(
        <div>
            <Header name={course.name}></Header>
            <Contents parts={course.parts}></Contents>
        </div>
    )
}

export default Course