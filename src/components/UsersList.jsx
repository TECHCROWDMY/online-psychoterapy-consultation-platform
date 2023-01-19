import React,{useState, useEffect} from 'react';
import { supabase } from '../supabaseClient';
import { EditUser } from '../modals';

const UsersList = () => {
    const [users,setUsers] = useState([])
    const [isEditClicked, setIsEditClicked] =useState(false)
    const [userId, setUserId] =useState(false)
    const [user,setUser] = useState([])
    const [userType,setUserType] = useState(null)
    const [isSaveClicked, setSaveClicked] =useState(false)


    isSaveClicked?handleSaveChanges():""




    useEffect(() => {
        async function fetchData() {

           const { data, error } = await  supabase
            .from('profiles')
            .select()
            setUsers(data)
        }
        fetchData();
      }, []);

      function handleEditUser(id){
            setIsEditClicked(!isEditClicked)
            setUserId(id)
            let user=users.filter(x=>x.id==id)
            setUser(user[0])

      }

      async function handleSaveChanges(){

        const { data, error } = await  supabase
        .from('profiles')
        .update({ user_type: userType })
        .eq("id", userId)

        setIsEditClicked(false)
        setSaveClicked(false)
        window.location.reload(true)
 
    }





  return (
    <div className='w-full bg-[#f9f9f9] py-[50px] min-h-[600px]'>
        <div className='max-w-[1240px] mx-auto'>
        
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
 

    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label  className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="py-3 px-6">
                    Name
                </th>
                <th scope="col" className="py-3 px-6">
                    User Type
                </th>
                <th scope="col" className="py-3 px-6">
                    Status
                </th>
                <th scope="col" className="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        
        <tbody>
            {users.map(user=>
                <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4 w-4">
                        <div className="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label  className="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                        <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                        <div className="pl-3">
                            <div className="text-base font-semibold">{user.full_name}</div>
                            <div className="font-normal text-gray-500">{user.email}</div>
                        </div>  
                    </th>
                    <td className="py-4 px-6">
                        {user.user_type}
                    </td>
                    <td className="py-4 px-6">
                        <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                        </div>
                    </td>
                    <td className="py-4 px-6">
                        {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a> */}
                        <button  onClick={()=>handleEditUser(user.id)}>Edit user</button>
                    </td>
                </tr>
            
            )}
           
        </tbody>
    </table>
</div>


        </div>

        {isEditClicked?
            <EditUser 
                setIsEditClicked={setIsEditClicked}
                user={user}
                setUserType={setUserType}
                setSaveClicked={setSaveClicked}
                userType={userType}
 

            />
            :""
        }
    </div>

  )
}

export default UsersList