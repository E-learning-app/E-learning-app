import React, { useState } from "react";
import axios from "axios";

const ClassForm = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    console.log(image)

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "unsigned_upload");

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dmualnorm/image/upload`,
                formData
            );
            setImage(response.data.secure_url);
        } catch (error) {
            console.error("Error uploading image to Cloudinary:", error);
        }
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/classess/", { name, image });
            console.log("Class created:", response.data);
        } catch (error) {
            console.error("Error creating class:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Class Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input type="file" onChange={handleImageUpload} />
            <button type="submit">Create Class</button>
        </form>
    );
};

export default ClassForm;