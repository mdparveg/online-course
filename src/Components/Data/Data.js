import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData'

const Data = () => {
    const data = fakeData;
    const [course, setCourse] = useState(data)
    return (
        <div className="data container">
            
            <div>
            <h1>Total Course: {course.length}</h1>
            <br/>
            {
                course.map(course => <li>{course.name}</li>)
            }
            </div>
            <div></div>

        </div>
    );
};

export default Data;