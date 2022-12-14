import React, {useState} from 'react';
import { VideoRoom } from '../components/VideoRoom';
import '../App.css';

const Hero = () => {
    const [joined, setJoined] = useState(false);
 
  return (
    <div className='w-full h-screen relative'>
       
        <div className='absolute w-full h-full top-0 left-0 '></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center p-4'>
            <h1>You are now in the meeting lobby</h1>
            <h2 className='p-8'>Please enter whenever you're ready</h2>
            {!joined && (
                <button className='min-w-[250px] p-4 mx-auto' onClick={() => setJoined(true)}>
                  Enter Room
                </button>
              )}
        
              {joined && <VideoRoom />}
          
        </div>

    </div>
  )
}

export default Hero