import { useState,useEffect } from 'react';
import './App.css';
import { VideoRoom } from './components/VideoRoom';
import {Routes, Route} from 'react-router-dom';
import {Login,SignUp, Homepage, Appointments, MyAppointments, VideocallPage, Admin, Notifications, SetAppointments, FaceDetection} from './pages/index';
import 'tw-elements';
import { supabase } from './supabaseClient';
 
function App() {
  const [token,setToken] = useState(false)
  const [user,setUser] = useState([])
  
  if(token){
    sessionStorage.setItem('token', JSON.stringify(token));
    fetchUser(token.user.id)
    }

  useEffect(() => {
    
    if(sessionStorage.getItem('token')){
          let data = JSON.parse(sessionStorage.getItem('token'))
          setToken(data)

    }
  }, [])

     
  async function fetchUser(id){
    const {data} = await supabase
      .from('profiles')
      .select('*')
      .eq('id',id)


      
      setUser(data[0])
  }
 
  
   
  if(token){
      if(user.user_type=='patient'){
        return (
          <Routes>
            <Route path='/' element={<Homepage token={token} user={user} />} />
            <Route path='/appointments' element={<Appointments token={token} />} />
            <Route path='/my-appointments' element={<MyAppointments token={token} />} />
            <Route path='/video-call' element={<VideocallPage token={token} />} />
            <Route path='/face-detection' element={<FaceDetection  />} />
    
          </Routes>
        );
      }else if(user.user_type=='doctor'){
        return (
          <Routes>
            <Route path='/' element={<Homepage token={token} user={user} />} />
            <Route path='/set-appointments' element={<SetAppointments token={token} />} />
            <Route path='/upcoming-appointments' element={<MyAppointments token={token} />} />
            <Route path='/notifications' element={<Notifications token={token}  />} />
            <Route path='/video-call' element={<VideocallPage token={token} />} />
          </Routes>
        );
        
      }else if((user.user_type=='admin')){
        return (
          <Routes>
            <Route path='/' element={<Admin token={token}  />} />
          </Routes>
        );

      }
     
  }else{
    return (
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Login setToken={setToken} />} />
      </Routes>
    );
  }

  

 
}

export default App;
