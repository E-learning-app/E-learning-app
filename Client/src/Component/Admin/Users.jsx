import React from 'react'

function Users() {
  return (
    <div>
    <div className="p-4 flex">
        <h1 className="text-3xl">
            Users manegment
        </h1>
    </div>
    <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                <tr className="border-b">
                    <th className="text-left p-3 px-5">Email</th>
                    <th className="text-left p-3 px-5">Class</th>
                    <th className="text-left p-3 px-5">Role</th>
                    <th></th>
                </tr>
                <tr className="border-b hover:bg-orange-100 bg-gray-100">
                    <td className="p-3 px-5"><input type="text" value="user.email" className="bg-transparent" /></td>
                    <td className="p-3 px-5"><input type="text" placeholder="class.name" className="bg-transparent" /></td>
                    <td className="p-3 px-5">
                        <select value="user.role" className="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td>
                    <td className="p-3 px-5 flex justify-end"><button type="button" className="mr-3 text-sm bg-orange-500 hover:bg-orange-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Add to class</button><button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete from class</button></td>
                </tr>
                <tr className="border-b hover:bg-orange-100 bg-gray-100">
                    <td className="p-3 px-5"><input type="text" value="user.email" className="bg-transparent" /></td>
                    <td className="p-3 px-5"><input type="text" placeholder="class.name" className="bg-transparent" /></td>
                    <td className="p-3 px-5">
                        <select value="user.role" className="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td>
                    <td className="p-3 px-5 flex justify-end"><button type="button" className="mr-3 text-sm bg-orange-500 hover:bg-orange-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Add to class</button><button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete from class</button></td>
                </tr>
                <tr className="border-b hover:bg-orange-100 bg-gray-100">
                    <td className="p-3 px-5"><input type="text" value="user.email" className="bg-transparent" /></td>
                    <td className="p-3 px-5"><input type="text" placeholder="class.name" className="bg-transparent" /></td>
                    <td className="p-3 px-5">
                        <select value="user.role" className="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td>
                    <td className="p-3 px-5 flex justify-end"><button type="button" className="mr-3 text-sm bg-orange-500 hover:bg-orange-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Add to class</button><button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete from class</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Users