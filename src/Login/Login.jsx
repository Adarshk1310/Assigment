import { useState } from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { actions } from "../redux/authReducer";






 const Login =()=>{

    const [email,setEmail] =useState('');
    const [pass,setPass] =useState('');
    const[emailError,setEmailError]=useState(false);
    const[passError,setPassError]=useState(false);
    const navigate = useNavigate();
    const dispatch =useDispatch();


    const handleLogin=async()=>{

        if(!email && !pass){
            setEmailError(true);
            setPassError(true);
            return;
        }
        else if(!email){
            setEmailError(true);
            return;

        }
        else if(!pass){
            setPassError(true);
            return;
        }
        if(email){
            const check = email.indexOf('@');
             const valid = email.search('.com');
            if(check === -1){
                toast.error('Please Enter Valid Email');
                setEmailError(true);
                return;
            }
            else if(valid===-1){
                toast.error('Please Enter Valid Email');
                setEmailError(true);
                return;
            }
            
        }
        
         axios.post('http://localhost:8000/login',{email,password:pass}).then((response)=>{
            if(response.status===200){
                setEmail('');
                setPass('');
                dispatch(actions.setLoggedIn(response.data.token));
                dispatch(actions.setUser(response.data.user));
                dispatch(actions.setIsLoggedIn(true));
                dispatch(actions.setCurrentPage('market'));
                toast.success("Login successfull !");
                navigate('/mainpage');
            }
         }).catch((error)=>{
            if(error.response.status===404){
                toast.error("Please enter correct Email/Password");
                setEmailError(true);
                setPassError(true);
            }
            else if(error.response.status===401){
                toast.error("Please enter correct password");
                setPassError(true);
            }
         });
        
        
       
    }

    return <>
    

            <div  className={styles.loginPage}>
            
            <div className={styles.loginMain}>
                <div className={styles.loginHeadings}><h1>Login Page</h1></div>
                <div className={styles.inputDetails}>
                
                    <small >Email</small>
                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value);setEmailError(false)}} placeholder="Enter the email"></input>
                    {emailError && <small style={{margin:'0px',paddingLeft:'12px',color:'red',fontSize:'11px'}} >Please check email field</small>}
                    <small>Password</small>
                    <input type="password" onChange={(e)=>{setPass(e.target.value);setPassError(false)}} value={pass} placeholder="Enter the password"></input>
                    {passError && <small style={{margin:'0px',paddingLeft:'12px',color:'red',fontSize:'11px'}} >Please check pass field</small>}

                
                </div>
                <div className={styles.buttonInfo}>
                    <div className={styles.buttons}><Link ><button onClick={handleLogin}>Login</button></Link><Link to={'/signup'}><button>Sign Up</button></Link></div>
                    
                </div>

            </div>
    </div>
    
    </>
}




export default Login;