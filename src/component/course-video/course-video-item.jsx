import React, { useState } from 'react';
import './course-video.css'

const CourseVideoItem = () => {
    const videos = [
        {
            title: "#1-Dars Tanishuv",
            url: `https://www.youtube.com/embed/ZhDBn48LyCE?si=SlL0OXGoZhgWPcDH`
        },
        {
            title: "#2-Dars Kod muhiti haqida",
            url: `https://www.youtube.com/embed/UlUcc521UY8?si=KDcU6YkLiO78MERI`,
        },
        {
            title: "#3-Dars Asosiy teglar",
            url: "https://www.youtube.com/embed/3-dars-video-url",
        },
    ];
    // Joriy video URL-ni saqlash uchun state
    const [currentVideo, setCurrentVideo] = useState(videos[0].url);

    // Joriy videoni almashtiruvchi funksiya
    const handleVideoChange = (url) => {
        setCurrentVideo(url);
    };
    

    return (
        <div className='course-vidoe-container'>
            <div className="video-block">
                <iframe
                    width="960"
                    height="575"
                    src={currentVideo}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                >
                </iframe>
                <div className="video-cont-list">
                    <ul>
                        {videos.map((video, index) => (
                            <li key={index}>
                                <button onClick={() => handleVideoChange(video.url)}>
                                    {video.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CourseVideoItem;
