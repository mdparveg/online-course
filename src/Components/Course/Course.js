import React from 'react';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookMedical } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const { img, name, deadline, duration, instructor, price } = props.course;
    const addCourse = props.addCourse;
    return (
        <div className="items" >
            <img src={img} alt="" />
            <div className="info m-4">
                <h5> Course Name: <spane className="title"> {name} </spane></h5>
                <p> <small> Deadline:- {deadline} </small></p>
                <p> <small> Duration:- {duration} </small></p>
                <p> <small> Instructor:- {instructor} </small></p>
                <p> Price: ${price} </p>
                <button className="btn btn-warning" onClick={() => addCourse(props.course)}>< FontAwesomeIcon icon={faBookMedical}
                /> Enroll Now</button >
            </div>

        </div>
    );
};

export default Course;