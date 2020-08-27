import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
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
                <h1 className="bg-dark text-white"> Total Course: {course.length} </h1> 
                <div className="row">
                    <div className="course d-flex flex-wrap col-md-10 mt-5">
                    {
                        course.map(course => < Course addCourse = {addCourse}
                        key={course.id}
                        course={course} > </Course>)
                    } 
                    </div> 
                    <div className="col-md-2 mt-5">
                        <Cart cart = {cart}></Cart> 
                    </div> 
                </div>


            </div>
            );
        };


export default Data;