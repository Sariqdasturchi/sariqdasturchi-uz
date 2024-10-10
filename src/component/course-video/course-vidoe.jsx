import React from 'react';
import { useParams } from 'react-router-dom';

import './course-video.css'
import HeaderComponent from '../header/header';
import CourseVideoItem from './course-video-item';

const courseVideoDB = [
    { id: 1, name: "HTML", videoName: "#1-Dars Tanishuv" },
    { id: 2, name: "HTML", videoName: "#2-Dars Kod muhiti haqida" },
    { id: 3, name: "HTML", videoName: "#3-Dars Asosiy teglar" },
]


const CourseVidoe = () => {

    const { id } = useParams();

    const VideoDB = courseVideoDB.find(c => c.id === parseInt(id));

    console.log(VideoDB);

    if (!VideoDB) {
        return <h2>Kurs topilmadi</h2>;
    }
    return (
        <>
            <CourseVideoItem />
            <HeaderComponent />
        </>

    );
}

export default CourseVidoe;
