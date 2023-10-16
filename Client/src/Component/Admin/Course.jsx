import React from "react";
import axios from "axios";

const Course = ({ course, fetchCourses }) => {
    const handleOpenPDF = () => {
        window.open(`http://localhost:3000/${course.file}`, "_blank");
    };

    const handleDelete = async () => {
        const shouldDelete = window.confirm("Are you sure you want to delete this course?");
        if (shouldDelete) {
            try {
                await axios.delete(`http://localhost:3000/Courses/${course.id}`);
                fetchCourses();
            } catch (error) {
                console.log(error);
            }
        }
    };

    const iconStyle = {
        fontSize: "48px",
        color: "red",
        position: "relative",
        left: "50px",
        top: "145px"
    };

    return (
        <div>
            <div onClick={handleOpenPDF} style={{ cursor: "pointer" }}>
                <i className="fa fa-file-pdf-o" style={iconStyle}></i>
                <h3 style={{ position: "relative", left: "100px", top: "100px" }}>{course.name}</h3>
            </div>
            <div>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    style={{ position: "relative", left: "100px", top: "100px" }}
                >
                    Update
                </button>
                <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    style={{ position: "relative", left: "100px", top: "100px" }}
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Course;
