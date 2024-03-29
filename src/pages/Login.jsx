import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient'
import { useNavigate } from "react-router-dom";

const Login = ({setToken}) => {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [formData,setFormData]=useState({email:'',password:''});
         
    function handleChange(event){
        setFormData(prevFormData=>{
          return{
            ...prevFormData,
           [event.target.name]:event.target.value
    
          }
        })
    
    
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
          setLoading(true)
          const { data, error } = await supabase.auth.signInWithPassword({email: formData.email,password: formData.password})
          console.log(data)
          if (error) throw error
           setToken(data)
          navigate("/");

        } catch (error) {
          alert(error.error_description || error.message)
        } finally {
          setLoading(false)
        }
      }
      
 
      
  return (





<section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex items-center justify-center md:h-screen lg:py-0">
 
      <div className="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700  shadow-lg">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold  text-gray-900 md:text-2xl dark:text-white">
                  Sign in 
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="name@company.com" 
                            required="" 
                            onChange={handleChange}
                        />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required="" 
                        onChange={handleChange}
                      />
                  </div>
                  {/* <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Retype Password</label>
                      <input type="password" name="password2" id="password2" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div> */}
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  
                  <button type="submit"  className=" mt-5 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign In</button>
                  
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to={"/signup"}>Sign Up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Login