import React from 'react';

const Course = (props) => {
    console.log(props);
    const { img, name, deadline, duration, instructor, price } = props.course;
    const addCourse = props.addCourse;
    return (
        <div className="container">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="info">
                <h1>{name}</h1>
                <p><small>{deadline}</small></p>
                <p><small>{duration}</small></p>
                <p><small>{instructor}</small></p>
                <p>{price}</p>
                <button onClick={() => addCourse(props.course)}>Enroll Now</button>
            </div>

        </div>
    );
};

export default Course;