import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';

const UserHome = () => {
  const { user } = useContext(userContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/classess/userAcceptedClass/${user.id}`)
      .then((response) => {
        setCourses(response.data);
      
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
console.log("this is the courses ", courses)
  return (
    <div>
      <style>
        {`
          .user-home {
            padding: 20px;
          }

          .user-home-title {
            font-size: 24px;
            margin-bottom: 16px;
          }

          .course-list {
            display: flex;
            flex-direction: column;
          }

          .course-item {
            padding: 10px;
            background-color: #f4f4f4;
            margin-bottom: 10px;
          }

          .no-courses-message {
            font-style: italic;
          }
        `}
      </style>

      <div className="user-home">
        <h2 className="user-home-title">Your Courses</h2>
        <div className="course-list">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course.id} className="course-item">
                {course.name}
              </div>
            ))
          ) : (
            <p className="no-courses-message">You are not enrolled in any courses yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
