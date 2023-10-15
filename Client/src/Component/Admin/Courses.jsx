import React, { useEffect, useState } from "react";
import Course from "./Course.jsx"

const Courses = () => {
    const [courses, setCourses] = useState([])
    const fetchCourses = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/courses/1`);
            setCourses(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);
    <div>
        <ul className="course-list">
            {courses.map(course => (
                <li className="course-list-item" key={course.id}><Course course={course} /></li>))}

        </ul>
    </div>
};

export default Courses;