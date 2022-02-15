import React from 'react'
import GoogleLogin from 'react-google-login'
import {useNavigate} from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc';
import video from '../assets/vid2.mp4';
import logo from '../assets/logowhite.png';
import { json } from 'express/lib/response';

import{client} from '../client'

const Login =() =>{
    const navigate = useNavigate();
    /*const responseGoogle=(response) =>{
        //create a new user to be stored in the db
        localStorage.setItem('user' ,json.stringify(response.profileobj));
        const{name,googleId,imageUrl}=response.profileobj;
        const doc = {
            _id:googleId,
            _type:'user',
            userName: name,
            image:imageUrl,
        }
        client.createIfNotExists(doc)
        .then(()=>{
navigate('/',{replace:true})
        })
    }
    */

    return(
<div className="flex justify-start items-center flex-col h-screen">
    <div className="relative w-full h-full">
         <video 
              src={video}
              type="video/mp4"
              loop
              control={false}
              muted
              autoPlay
              className ="w-full h-full object-cover"
         />
         <div className='absolute flex flex-col justify-center 
         items-center top-9 right-0 left-0 bottom-0 bg-blackOverlay'>
         <div className="p-5">
           <img src={logo} width="130px" alt="logo" />
         </div>
         <div className='shadow-2xl'>

<GoogleLogin
clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}//renders the google aouth screen
render={(renderProps)=>(
    <button
    type="button"
    className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
  onClick={renderProps.onClick} 
  disabled={renderProps.disabled} >
    <FcGoogle className="mr-4"/>Sign in with google
    </button>
)}
/*onSuccess={responseGoogle}
onFailure={responseGoogle}
cookiePolicy="single_host_origin"*/
/>

         </div>
         </div>
    </div>
</div>
    )
}

export default Login