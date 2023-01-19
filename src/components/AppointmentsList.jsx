import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { BookingConfirmation } from '../modals';
 
function AppointmentsList({token}) {
    const [allAppointments,setAllAppointments] = useState([])
    const [isBookingClicked, setBookingClicked] =useState(false)
    const [isConfirmClicked, setConfirmClicked] =useState(false)
    const [appoinmentId, setAppointmentId]=useState(null)



    useEffect(() => {
        async function fetchData() {

           const { data, error } = await  supabase
            .from('appointments')
            .select()
            setAllAppointments(data)
        }
        fetchData();
      }, []);
      
      let appointments= allAppointments.filter(x=>!x.bookedBy)

  
        isConfirmClicked?handleConfirmation():""

        function handleBookingClick(id){
            setBookingClicked(!isBookingClicked)
            setAppointmentId(id)
        } 
     
        async function handleConfirmation(){

            const { data, error } = await  supabase
            .from('appointments')
            .update({ bookedBy: token.user.id, status:`Booked` })
            .eq("id", appoinmentId)
        }
    
   
    



  return (
    
    <div className=' bg-[#f5f5f5]'>
        <div className='w-full h-full min-h-[800px] md:max-w-[900px] m-auto py-[50px] '>
            <h3 className='py-8'>Available appointments</h3>
            <div className="w-full grid grid-cols-1 gap-4 lg:gap-8">

                {appointments?appointments.map((appoinment,i)=>
                    <div key={appoinment.id} className="py-4 bg-[#fff] rounded-md items-center  shadow-md hover:shadow-lg max-h-[75px]">
                    
                        <div className='flex justify-between px-5  items-center '>
                            <div>{appoinment.day}</div>
                            <div>{appoinment.slot}</div>

                            {/* <button onClick={handleBookingClick(appoinment.id)}  className="px-10 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:cursor-pointer hover:text-white">Book</button> */}
                            <button  onClick={()=>handleBookingClick(appoinment.id)} className="px-10 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:cursor-pointer hover:text-white">Book</button>

                        </div>

                    </div>

                ):<h3>No available appointments</h3> }
                
                


            
            </div>
        </div>
        {isBookingClicked?
            <BookingConfirmation 
                setBookingClicked={setBookingClicked}
                appoinmentId={appoinmentId}  
                setConfirmClicked={setConfirmClicked}
 

            />
            :""
        }
    </div>
  )
}

export default AppointmentsList