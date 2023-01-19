import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({token,user}) => {


    if(user.user_type=='patient'){
        return (
            <div className='w-full bg-[#f9f9f9] py-[50px]'>
                <div className='max-w-[1240px] mx-auto'>
                    
                    <div className='pb-[50px]'>
                        <h3 className='font-bold text-2xl my-1'>Welcome back,{user.user_type} {token.user.user_metadata.full_name}👋</h3>
                    </div>
                    
                    
                    
                     
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8   text-black'>
                            
                            <Link  to={`/appointments`}>
                                <div  className='bg-white rounded-xl overflow-hidden border-2 hover:drop-shadow-md'>
                                    <img className='h-56 w-full object-cover' src={`https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=0.670xw:1.00xh;0.0553xw,0&resize=640:*`} />
                                    <div className='p-8'>
                                        <h3 className='font-bold text-2xl my-1'>Book Appointment</h3>
                                        <p className='text-gray-600 text-xl'></p>
                                    </div>
                                </div>
                            </Link>
        
                            <Link  to={`/my-appointments`}>
                                <div  className='bg-white rounded-xl overflow-hidden border-2 hover:drop-shadow-md'>
                                    <img className='h-56 w-full object-cover' src={`https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=0.670xw:1.00xh;0.0553xw,0&resize=640:*`} />
                                    <div className='p-8'>
                                        <h3 className='font-bold text-2xl my-1'>My Appointments</h3>
                                        <p className='text-gray-600 text-xl'></p>
                                    </div>
                                </div>
                            </Link>
        
                        </div>
        
                </div>
            </div>
          )


    }else if(user.user_type=='doctor'){
        return (
            <div className='w-full bg-[#f9f9f9] py-[50px]'>
                <div className='max-w-[1240px] mx-auto'>
                    
                    <div className='pb-[50px]'>
                        <h3 className='font-bold text-2xl my-1'>Welcome back,{user.user_type} {token.user.user_metadata.full_name}👋</h3>
                    </div>
                      
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8   text-black'>
                            
                        <Link  to={`/set-appointments`}>
                            <div  className='bg-white rounded-xl overflow-hidden border-2 hover:drop-shadow-md'>
                                <img className='h-56 w-full object-cover' src={`https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=0.670xw:1.00xh;0.0553xw,0&resize=640:*`} />
                                <div className='p-8'>
                                    <h3 className='font-bold text-2xl my-1'>Set Appointment Schedule</h3>
                                    <p className='text-gray-600 text-xl'></p>
                                </div>
                            </div>
                        </Link>
        
                        <Link  to={`/my-appointments`}>
                            <div  className='bg-white rounded-xl overflow-hidden border-2 hover:drop-shadow-md'>
                                <img className='h-56 w-full object-cover' src={`https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=0.670xw:1.00xh;0.0553xw,0&resize=640:*`} />
                                <div className='p-8'>
                                    <h3 className='font-bold text-2xl my-1'>Upcoming Appointments</h3>
                                    <p className='text-gray-600 text-xl'></p>
                                </div>
                            </div>
                        </Link>
        
                        <Link  to={`/notifications`}>
                            <div  className='bg-white rounded-xl overflow-hidden border-2 hover:drop-shadow-md'>
                                <img className='h-56 w-full object-cover' src={`https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=0.670xw:1.00xh;0.0553xw,0&resize=640:*`} />
                                <div className='p-8'>
                                    <h3 className='font-bold text-2xl my-1'>Notifications</h3>
                                    <p className='text-gray-600 text-xl'></p>
                                </div>
                            </div>
                        </Link>
        
                        </div>
        
                    
        
                    
                    
                </div>
            </div>
          )
    }
  
}

export default HeroSection