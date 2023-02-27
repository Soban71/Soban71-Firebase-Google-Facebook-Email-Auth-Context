
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Style.css"
import { useState } from 'react';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {app } from "../firebase"
import {getAuth, GoogleAuthProvider , signInWithPopup,createUserWithEmailAndPassword} from "firebase/auth";



const auth = getAuth(app);

export default function Signup() {
  const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const navigate = useNavigate();
    const SignUpCaller=(e)=>{
navigate("/");
    }

    const CreateUser=()=>{
createUserWithEmailAndPassword(auth,  Email , Password).then(value=>(
 alert('created'),
  navigate("/")
));
    }
    
  return (
    <div className='App'>
    <div className='Login'>


        <div className='shadows'>
        <h1>Create Account</h1>

  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '38ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" color='success' label="Email" variant="outlined"  value={Email} onChange={(e)=>setEmail(e.target.value)}/>
     
    </Box>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '38ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" color='success' label="Password" variant="outlined"  value={Password} onChange={(e)=>SetPassword(e.target.value)}/>
     
    </Box>
    <Button variant="contained" color='success'  onClick={CreateUser} style={{width: "85%"}}>Signup</Button>
    <p>Already Have Account?<b onClick={SignUpCaller}>Login</b></p>
    </div>
   
    
      

    </div>

    </div>
  )
}
