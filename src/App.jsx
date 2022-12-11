import { useState,useEffect } from 'react';
import './App.css';
import { VideoRoom } from './components/VideoRoom';
import {Routes, Route} from 'react-router-dom';
import {Login,SignUp, Homepage, Appointments} from './pages/index'
 
function App() {
  const [token,setToken] = useState(false)
  
  if(token){
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  // if(sessionStorage.getItem('token')){
  //   setToken(sessionStorage.getItem('token'))
  // }

  useEffect(() => {
    
    if(sessionStorage.getItem('token')){
          let data = JSON.parse(sessionStorage.getItem('token'))
          setToken(data)

    }
  }, [])
  
   
  if(token){
    return (
      <Routes>
        <Route path='/' element={<Homepage token={token} />} />
        <Route path='/appointments' element={<Appointments token={token} />} />


      </Routes>
    );
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
