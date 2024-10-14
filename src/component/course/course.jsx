import React from 'react';
import HeaderComponent from '../header/header';
import './course.css'
import { Link } from 'react-router-dom';

import courseImg from './imgs/course.png'

const Course = () => {
    const data = [
        { id: 1, title: "HTML", price: "100 000", image: courseImg },
        { id: 2, title: "CSS", price: "100 000", image: courseImg },
        { id: 3, title: "JavaScript", price: "100 000", image: courseImg },
        { id: 4, title: "React js", price: "100 000", image: courseImg },
    ]

    return (
        <div className='course-container'>
            <div className="course-block">
                <div className="course-cards-title">
                    <h1>Barcha kurslar</h1>
                </div>
                <div className="course-cards-block">
                    {
                        data.map((item) => (
                            <Link style={{ textDecoration: 'none' }} to={`/course/${item.id}`} key={item.id}>
                                <div className="course-cards">
                                    <div className="course-card-img">
                                        <img src={item.image} alt="card-image" />
                                    </div>
                                    <div className="card-title">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="card-price">
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <HeaderComponent />
        </div>
    );
}

export default Course;
