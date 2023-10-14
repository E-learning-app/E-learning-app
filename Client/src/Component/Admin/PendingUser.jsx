import React, { useEffect, useState } from "react";
import axios from "axios";

function PendingUser({ user, onAccept, onReject }) {
  // State to store user information and class
  const [info, setInfo] = useState({});
  const [userClass, setUserClass] = useState({});

  // Fetch user information and class details on component mount
  useEffect(() => {
    axios.get(`http://localhost:3000/User/getOneUser/${user.id}`)
      .then((response) => {
        setInfo(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`http://localhost:3000/classess/${user.classId}`)
      .then((response) => {
        setUserClass(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.id, user.classId]);

  return (
    <tr className="border-b hover:bg-orange-100 bg-gray-100 ">
      <td className="p-3 px-5 text-center">{info.email}</td> {/* Center the email cell */}
      <td className="p-3 px-5 text-center">{userClass.name}</td> {/* Center the class cell */}
      <td className="p-3 px-5 flex justify-center"> {/* Center buttons with justify-center */}
        <button type="button" className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => onAccept(user.id)}>
          Accept
        </button>
        <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => onReject(user.id)}>
          Reject
        </button>
      </td>
    </tr>
  );
}

export default PendingUser;
