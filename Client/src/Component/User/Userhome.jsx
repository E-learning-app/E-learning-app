import React, { useState , useEffect} from "react";
import axios from 'axios';


function Userhome() {
  const [classData, setClassData] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

 
  useEffect(() => {
    const token = localStorage.getItem('token')
    const config = {
      headers:{
        'x-access-token': token
      }
    }
   
    axios.get('http://localhost:3000/User/classes', config)
      .then((response) => {
        setClassData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, [])

  const filteredClasses = classData.filter((cls) => {
    return cls.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
    <div>
      <div>
        <form className="flex items-center">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative w-full xl:w-96">
            <input
              type="text"
              id="search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full px-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="Search for a class..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
          </div>
        </form>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {filteredClasses.map((cls) => (
          <div key={cls.id} style={{ flex: '1', minWidth: '300px', margin: '10px 0', padding: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg hover:bg-gray-100 dark:border-gray-700 dark-bg-gray-800 dark-hover-bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-48 md:w-48"
                src={cls.image}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark-text-white">
                  {cls.name}
                </h5>
                <a href="#" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-orange-600 dark-hover-bg-orange-700 dark-focus:ring-orange-800">
                  Join Class
                </a>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Userhome
