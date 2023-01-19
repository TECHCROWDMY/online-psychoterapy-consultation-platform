import React, {useState} from 'react';
import{menu, close, logo, avatar} from '../assets';
import 'tw-elements';
import { Link } from 'react-router-dom';

const Navbar = ({token}) => {
    const [toggle,setToggle]=useState(false);
    const handleClick = ()=>setToggle(!toggle)
    
    function handleLogout(){
        sessionStorage.removeItem('token')
        navigate('/')
    }


  return (
    <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative'>
        <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>

                <div className='flex items-center'>
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]' />
                    </Link>
                </div>
          
                <div className='hidden md:flex sm:mr-10 md:mr-10'>
                    

                    <button  className='border-none bg-transparent' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={avatar} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[35px]' />
                    </button>
                    
                    {/* THIS IS THE DROPDOWN MENU */}
                    <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding   border-t-1"
                        aria-labelledby="dropdownMenuButton1"
                    >
                        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white divide-gray-100">
                            <div>{token.user.user_metadata.full_name}</div>
                            <div className="font-medium truncate"><strong>{token.user.email}</strong></div>
                        </div>
                        <li>
                            <a href="#" className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                                View Profile
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                                Settings
                            </a>
                        </li>
                        <li>
                            <Link onClick={handleLogout} className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                                Log out
                            </Link>
                        </li>
       
                    </ul>
                    
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    <img src={!toggle?menu:close} alt="menu" className='w-[28px] h-[28px] object-contain mr-10' />
                </div>

                

        </div>
        <ul className={toggle?'absolute bg-white w-full px-8 md:hidden':'hidden'}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platform</li>
                        <li>Pricing</li>
                        <div className='flex flex-col my-4'>
                            <button className='bg-transparent text-black mb-4 py-3 px-8'>Login</button>
                            <button className='px-8 py-3'>Sign Up</button>
                        </div>
        </ul>

    

    </div>
  )
}

export default Navbar







 

 
 
