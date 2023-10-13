import { useState, useEffect } from "react";
import axios from "axios";

const AddCourse = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    // const [allImage, setAllImage] = useState(null);
    // const [pdfFile, setPdfFile] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("file", file);

        try {
            const response = await axios.post("http://localhost:3000/upload-files", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            const courseData = {
                name: title,
                file: response.data.filePath, // Assuming your API returns a file path after upload
            };

            // Sending course data to your API endpoint to store in the database
            await axios.post("http://localhost:3000/courses/1", courseData); // Replace :classId with the actual classId

            console.log("Course added successfully!");
        } catch (error) {
            console.error("Error adding course:", error);
        }
    };
    return (
        <div className="pdfForm">
            <form className="formStyle" onSubmit={handleSubmit}>
                <h4>Upload Pdf in React</h4>
                <br />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <input
                    type="file"
                    className="form-control"
                    accept="application/pdf"
                    required
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddCourse;