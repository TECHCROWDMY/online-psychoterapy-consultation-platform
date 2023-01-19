import React,{useEffect,useState} from 'react'
import 'tw-elements';
import { supabase } from '../supabaseClient';

const CreateAppointment = ({token}) => {
  const [day,setDay]=useState('');
  const [slot,setSlot]=useState('');
  const [appointments,setAppointments] = useState([])


  useEffect(() => {
    async function fetchData() {

       const { data, error } = await  supabase
        .from('appointments')
        .select()
        setAppointments(data.filter(x=>x.doctorId==token.user.id))
    }
    fetchData();
  }, []);


  async function createAppointment(){
    const {data} =  await supabase
    .from('appointments')
    .insert({ day: day, slot:slot, doctorId:token.user.id})

    fetchData()  


  }
  function handleSubmit(e){
    e.preventDefault();
    createAppointment()

  }



  return (
    <div className=' bg-[#f5f5f5]'>
        <div className='w-full h-full min-h-[800px] md:max-w-[900px] m-auto py-[50px] '>
            <h3 className='py-8'>Create Appointments</h3>
             <h1>{day}</h1>
             <h1>{slot}</h1>
             <div className='grid grid-cols-3 gap-8'>
              <input 
                className='p-4 drop-shadow-xl'
                type="date"
                onChange={e=>setDay(e.target.value)}
              />

              <select className='p-4 drop-shadow-xl' value={day} onChange={e=>setSlot(e.target.value)} >
                  <option>Choose a slot</option>
                  <option>8am-10am</option>
                  <option>10am-12pm</option>
                  <option>2pm-4pm</option>
                  <option>4pm-6pm</option>
              </select>
              <button onClick={handleSubmit}>Create</button>
                

             </div>
             



            <div className="w-full grid grid-cols-1 gap-4 lg:gap-4 py-16 ">
            <h3>Your created appointments</h3>
            {appointments?appointments.map((appointment,i)=>
                    <div key={appointment.id} className=" items-center py-4 bg-[#fff] rounded-md  shadow-md hover:shadow-lg ">
                    
                        <div className='flex justify-between px-5 items-center '>
                            <div>{appointment.day}</div>
                            <div>{appointment.slot}</div>
                            <div className='w-[150px] text-right' >{appointment.booked?appointment.bookedBy:appointment.status}</div>

                             {/* <button  onClick={()=>handleBookingClick(appointment.id)} className=" items-center px-10 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:cursor-pointer hover:text-white">Book</button> */}

                        </div>

                    </div>

                ):<h3>No available appointments</h3> } 


            </div>
        </div>
    </div>
  )
}

export default CreateAppointment