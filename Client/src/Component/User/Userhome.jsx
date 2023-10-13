import React, { useState , useEffect} from "react";
import axios from 'axios';


function Userhome() {
  const [classData, setClassData] = useState([])

 
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


  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>  
    {classData.map((classes) => {
return (
  <div key={classes.id} style={{ flex: '1', minWidth: '300px', margin: '100px 0',padding: '10px'}}>
      <a
  href="#"
  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark-bg-gray-800 dark-hover-bg-gray-700"
>
  <img
    className="object-cover w-full rounded-t-lg h-96 md:h-48 md:w-48  "
    src={classes.image}
    alt=""
  />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark-text-white">
    {classes.name}
    </h5>
    <a href="#" class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Join Class</a>
  </div>
</a>
</div>
)
    })}
  
    
    


      
    </div>
  )
}

export default Userhome
