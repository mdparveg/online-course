import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData'
import './Data.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Data = () => {
    const data = fakeData;
    const [course, setCourse] = useState(data)
    const [cart, setCart] = useState([])

    const addCourse = (course) => {
        const newCart = [...cart, course]
        setCart(newCart)
    }
    return (
        <div className="data container">

            <div className="course">
                <h1>Total Course: {course.length}</h1>
                <br />
                {
                    course.map(course => <Course
                        addCourse={addCourse}
                        key={course.id}
                        course={course}></Course>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Data;