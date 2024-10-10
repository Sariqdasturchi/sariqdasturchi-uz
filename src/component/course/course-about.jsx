import React from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderComponent from '../header/header';
import html from './imgs/html.png'
import css from './imgs/css.png'
import js from './imgs/js.png'
import react from './imgs/reactjs.png'

import './course-about.css'

const courses = [
    { id: 1, name: 'HTML', description: 'HTML kursi haqida...', price: 100000, img: html },
    { id: 2, name: 'CSS', description: 'CSS kursi haqida...', price: 100000, img: css },
    { id: 3, name: 'JavaScript', description: 'JavaScript kursi haqida...', price: 100000, img: js },
    { id: 4, name: 'React JS', description: 'React JS kursi haqida...', price: 100000, img: react },
    // Boshqa kurslar...
];

console.log(courses.img);

const CourseAbout = () => {
    const { id } = useParams();
    console.log(id);

    const course = courses.find(c => c.id === parseInt(id));

    if (!course) {
        return <h2>Kurs topilmadi</h2>;
    }
    return (
        <div className='course-about'>
            <div className='course-about-block'>
                <div className='img-cont'>
                    <img src={course.img} alt={`course-${course.name.toLowerCase()}`} />
                </div>
                <div className="btn-course">
                    <Link to={`/course-video/${course.id}`} key={course.id}>
                        <button>Kursni boshlash</button>
                    </Link>
                </div>
                <div className='course-about-title'>
                    <h1>{course.name}</h1>
                    <p>{course.description}</p>
                    <p>Narxi: {course.price}</p>
                </div>
            </div>
            <HeaderComponent />
        </div>
    );
}

export default CourseAbout;
