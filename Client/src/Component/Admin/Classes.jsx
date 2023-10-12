import React, { useState , useEffect} from "react";
import axios from "axios";

function Classes() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [classList, setClassList] = useState([]);
  console.log(image);

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
  useEffect(() => {
   
    axios.get("http://localhost:3000/classess")
      .then((response) => {
        setClassList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/classess/", {
        name,
        image,
      });
      setClassList([...classList, { name, image }]);
      setName(""); // Clear the input fields
      setImage("");
      closeModal();
    } catch (error) {
      console.error("Error creating class:", error);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const modalStyles = {
    display: isModalOpen ? "block" : "none",
  };

  return (
    <div>
<button
  onClick={openModal}
  className="block text-white bg-orange-700 hover-bg-orange-800 focus-ring-4 focus-outline-none focus-ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-orange-600 dark-hover-bg-orange-700 dark-focus-ring-orange-800"
  type="button"
  style={{
    height:"150px",
    position: "absolute",
    top: "210px", 
    right: "1200px", 
  }}
>
  Add classes
</button>

      <div id="authentication-modal" style={modalStyles} className="fixed flex">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow dark-bg-gray-700">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover-bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            <h3 className="mb-4 text-xl font-medium text-gray-900 dark-text-white"></h3>
            <form className="space-y-6" action="#">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0"></div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmit}>
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Add class name
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                              placeholder=" Class name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="image"
                          className="block text-sm font-medium text-gray-700"
                          style={{ position: "absolute" }}
                        >
                          Add class image
                        </label>
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                            value={image}
                            onChange={handleImageUpload}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="class-list"   style={{
    height:"150px",
    position: "absolute",
    top: "210px", 
    right: "1095px", 
  }}>
        {classList.map((classInfo, index) => (
          <div key={index} className="class-info">
            <img
              src={classInfo.image}
              alt={classInfo.name}
              className="class-image"
            />
            <p className="class-name">{classInfo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes;
