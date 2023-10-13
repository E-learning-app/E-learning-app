import { useState, useEffect } from "react";

const AddCourse = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [allImage, setAllImage] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);

    const handleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("file", file);
        console.log(title, file);

    }

    // const submitImage = async (e) => {
    //     e.preventDefault();


    //     const result = await axios.post(
    //         "http://localhost:5000/upload-files",
    //         formData,
    //         {
    //             headers: { "Content-Type": "multipart/form-data" },
    //         }
    //     );
    //     console.log(result);
    //     if (result.data.status == "ok") {
    //         alert("Uploaded Successfully!!!");
    //         getPdf();
    //     }
    // };
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
            {/* <div className="uploaded">
                <h4>Uploaded PDF:</h4>
                <div className="output-div">
                    {allImage == null
                        ? ""
                        : allImage.map((data) => {
                            return (
                                <div className="inner-div">
                                    <h6>Title: {data.title}</h6>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => showPdf(data.pdf)}
                                    >
                                        Show Pdf
                                    </button>
                                </div>
                            );
                        })}
                </div>
            </div>
            <PdfComp pdfFile={pdfFile} /> */}
        </div>
    )
}

export default AddCourse;