import React from "react";



const Course = ({ course }) => {
    console.log(course)
    return (

        <div  style={{ position: "absolute", left: "750px", top: "600px" }}>

            <h3>Couse name :{course.name}</h3>
            <h3 className="flex"></h3>
           
        </div>
    )
}
export default Course;