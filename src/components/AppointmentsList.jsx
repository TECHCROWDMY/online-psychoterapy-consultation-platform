import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
 
function AppointmentsList() {
    const [appointments,setAppointments] = useState([])

    useEffect(() => {
        async function fetchData() {

           const { data, error } = await  supabase
            .from('appointments')
            .select()
            setAppointments(data)
        }
        fetchData();
      }, []);

    
   
    



  return (
    
    <div className=' bg-[#f5f5f5]'>
        <div className='flex  w-full h-full min-h-[800px] md:max-w-[900px] m-auto py-[50px] '>
            
            <div className="w-full grid grid-cols-1 gap-4 lg:gap-8">

                {appointments?appointments.map((appoinment,i)=>
                    <div key={appoinment.id} className="py-4 bg-[#fff] rounded-md items-center  shadow-md hover:shadow-lg max-h-[75px]">
                    
                        <div className='flex justify-between px-5  items-center '>
                            <div>{appoinment.name}</div>
                            <button  className="px-10 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:cursor-pointer hover:text-white">Book</button>
                        </div>

                    </div>

                ):"" }
                
                


            
            </div>
        </div>
    </div>
  )
}

export default AppointmentsList