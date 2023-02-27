
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';
import "./Style.css"
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {app } from "../firebase"
import {getAuth, GoogleAuthProvider , signInWithPopup , signInWithEmailAndPassword ,onAuthStateChanged ,signOut ,FacebookAuthProvider } from "firebase/auth";




const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();



export default function Login() {
    const [Email, setEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [user, SetUser] = useState(null);
    
    const navigate = useNavigate();
    useEffect(()=>{
      onAuthStateChanged(auth , user=>{
      
        if(user){
          SetUser(user);
          console.log(user);
        }
        else{
          SetUser(null);
        }
      },)
      
      
        },[])

        if(user==null){
        
    
    const SignUpCaller=(e)=>{
navigate("/Signup");
    }
  
    
const SignupWithGoogle=async()=>{
  await signInWithPopup(auth , googleProvider)
}

const SignupWithFacebook=async()=>{
  await signInWithPopup(auth , facebookProvider)
}

const SignupWithEmail=async()=>{
  await  signInWithEmailAndPassword(auth , Email , Password).then((value)=>
    alert("Success"))
}

          return (
            <div className='App'>
            <div className='Login'>
        
        
                <div className='shadows'>
                <h1>Authentication Login</h1>
          <Box className='textfield'
              component="form"
              sx={{
                '& > :not(style)': { m: 2, width: '38ch'},
              }}
              noValidate
              autoComplete="off"
            >
              <TextField  id="outlined-basic"  color="success" label="Email" variant="outlined"  value={Email} onChange={(e)=>setEmail(e.target.value)}/>
             
            </Box>
        
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 2, width: '38ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Password" color="success" variant="outlined"  value={Password} onChange={(e)=>SetPassword(e.target.value)}/>
             
            </Box>
            <Button variant="contained" color="success" onClick={SignupWithEmail} style={{marginBottom : "1.5rem",width: "85%"}}>Login</Button>
            <br/>
            <Button variant="outlined" color="success" onClick={SignupWithGoogle} style={{marginRight: "1rem",width: "40%" }}>
            <i class='fab fa-google fa-lg' style={{marginRight:"1rem" , color:"#357369"}} ></i>   
 
               Google</Button>

            <Button variant="outlined" color="success" onClick={SignupWithFacebook} style={{width: "40%" }}>
            <i class= 'fab fa-facebook fa-lg' style={{marginRight:"0.6rem", color:"#357369"}} >  </i  >   
               Facebook</Button>
            
            <p>Create New Account <b onClick={SignUpCaller}>Signup</b></p>
            </div>
           
            
              
        
            </div>
        
            </div>
          )
        }
        //("/DeliveryItems?total=" + total + "&title="+title
        else{
         
                
          return(
            <div style={{textAlign: "center"}}>
            <h3>Welcome,  <br /> {user.email}</h3>
            <Button variant="contained" style={{width: "10%" }}  onClick={()=> signOut(auth)}>
  Logout
            </Button>

            </div>
          )
        }
 
}
