import React from 'react'

function Classinfo() {
  return (
    <div>        <form >
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
            
            />
          </label>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          edit
        </button>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          remove
        </button>
      </div>
    </div>
  </form></div>
  )
}

export default Classinfo