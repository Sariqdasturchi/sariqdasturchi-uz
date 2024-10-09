import React from 'react';

const LoginItem = () => {
    const login = async (email, password) => {
        const response = await fetch('http://localhost:5500/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        localStorage.setItem('token', data.token);
    };

    const token = localStorage.getItem('token');
    const user = jwt.decode(token);

    if (user.role === 'admin') {
        // Admin uchun maxsus interfeysni ko'rsatish
        showAdminPanel();
    } else {
        // Oddiy foydalanuvchi uchun interfeys
        showUserDashboard();
    }

    function showAdminPanel() {
        // Kurs qo'shish, tahrirlash va o'chirish imkoniyatlarini ko'rsatish uchun UI elementlari
        const adminPanel = document.getElementById('adminPanel');
        adminPanel.innerHTML = `
          <h2>Admin Panel</h2>
          <button id="addCourseBtn">Yangi Kurs Qo'shish</button>
          <button id="editCourseBtn">Kursni Tahrirlash</button>
          <button id="deleteCourseBtn">Kursni O'chirish</button>
          <button id="addVideoBtn">Video Qo'shish</button>
          <button id="editVideoBtn">Videoni Tahrirlash</button>
          <button id="deleteVideoBtn">Videoni O'chirish</button>
        `;

        // Tugmalar uchun event listenerlarni qo'shish
        document.getElementById('addCourseBtn').addEventListener('click', addCourse);
        document.getElementById('editCourseBtn').addEventListener('click', editCourse);
        document.getElementById('deleteCourseBtn').addEventListener('click', deleteCourse);
        document.getElementById('addVideoBtn').addEventListener('click', addVideo);
        document.getElementById('editVideoBtn').addEventListener('click', editVideo);
        document.getElementById('deleteVideoBtn').addEventListener('click', deleteVideo);
    }

    function showUserDashboard() {
        // Foydalanuvchilar uchun kurslarni ko'rsatish uchun UI elementlari
        const userDashboard = document.getElementById('userDashboard');
        userDashboard.innerHTML = `
          <h2>Foydalanuvchi Sahifasi</h2>
          <p>Kurslarni tomosha qiling va videolarni ko'ring.</p>
          <div id="coursesList">
            <!-- Bu yerda foydalanuvchi uchun kurslar ro'yxati ko'rsatiladi -->
          </div>
        `;
      
        // Kurslarni API orqali yuklash va ko'rsatish
        loadCourses();
      }
      
      function loadCourses() {
        fetch('/api/courses')
          .then(response => response.json())
          .then(courses => {
            const coursesList = document.getElementById('coursesList');
            courses.forEach(course => {
              const courseItem = document.createElement('div');
              courseItem.classList.add('course-item');
              courseItem.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
              coursesList.appendChild(courseItem);
            });
          })
          .catch(err => console.error('Kurslarni yuklashda xatolik:', err));
      }
      
    return (
        <div>

        </div>
    );
}

export default LoginItem;
