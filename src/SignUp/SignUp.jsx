// import { useEffect } from "react";
import { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';




 const SignUp =()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [age,setAge]=useState('');
    const [country,setCountry]=useState('');
    const navigate =useNavigate();
    
    const[emailError,setEmailError]=useState(false);
    const[nameError,setNameError]=useState(false);
    const[passError,setPassError]=useState(false);
    const[ageError,setAgeError]=useState(false);
    const[countryError,setCountryError]= useState(false);

  
    useEffect(()=>{
        const userToken = JSON.parse(localStorage.getItem('authToken')) ;
        if(userToken){
            navigate('/mainpage')
        }
    },[navigate])



    const handleRegister= async()=>{

    if(!name && !email && !pass && !age && !country){
        setEmailError(true);
        setNameError(true);
        setPassError(true);
        setAgeError(true);
        setCountryError(true);
        return;

    }
    else if(!name){
        setNameError(true);
        return;

    }
    else if(!email){
        setEmailError(true);
        return;

    }else if(!pass){
        setPassError(true);
        return;

    }else if(!age){
        setAgeError(true);
        return;

    }
    else if(!country){
        setAgeError(true);
        return;

    }

    if(email){
        const check = email.indexOf('@');
        const valid = email.search('.com');
        if(check === -1){
            toast.error('Please Enter Valid Email');
            setEmailError(true);
            return
        }
        else if(valid===-1){
            toast.error('Please Enter Valid Email');
            setEmailError(true);
            return;
        }

    }
     if(pass.length<8){
        setPassError(true);
        toast.error('Password must be at least 8 characters long');
        return;
     }
    
     const user = await axios.post('http://localhost:8000/signup',{name,email,country,age,password:pass});
     
        console.log(user.data);
        toast.success("Sign up successfull !");
        navigate('/');

    }

    return <>

            <div className={styles.signUp}>

            <div className={styles.signupMain}>
                <div className={styles.loginHeadings}><h1>Sign Up</h1></div>
                <div className={styles.inputDetails}>
                    <small>Name</small>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value);setNameError(false)}} placeholder="Enter the name"></input>
                    {nameError && <small style={{margin:'0px',paddingLeft:'12px',color:'red',fontSize:'11px'}} >Please check name field</small>}
                    <small>Email</small>
                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value);setEmailError(false)}}  placeholder="Enter the email"></input>
                    {emailError && <small style={{margin:'0px',paddingLeft:'12px',color:'red',fontSize:'11px'}} >Please check email field </small>}

                    <small>Country</small>
                    <input type="text" value={country} onChange={(e)=>{setCountry(e.target.value);setCountryError(false)}}  placeholder="Enter the country"></input>
                    {countryError && <small style={{margin:'0px',paddingLeft:'12px',color:'red',fontSize:'11px'}} >Please check country field</small>}

                    <small>Age</small>
                    <input type="text" value={age} onChange={(e)=>{setAge(e.target.value);setAgeError(false)}}  placeholder="Enter the age"></input>
                    {ageError && <small style={{margin:'0px',paddingLeft:'12px',color:'red',fontSize:'11px'}} >Please check age field</small>}

                    <small> Password</small>
                    <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value);setPassError(false)}}  placeholder="Enter the password"></input>
                    {passError && <small style={{margin:'0px',paddingLeft:'12px',color:'red',fontSize:'11px'}} >Please check password field (min 8 characters)"</small>}


                </div>
                <div className={styles.buttonInfo}>
                    <div className={styles.buttons}><Link><button onClick={handleRegister}>Submit</button></Link><Link to={'/'}><button >Back</button></Link></div>
                    
                </div>

            </div>
    </div>
    </>
}




export default SignUp;