import React, { useEffect, useState } from 'react'
import styles from './SettingsPage.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/authReducer';
import { toast } from 'react-toastify';




const SettingsPage = () => {

        const [user,setUser]=useState({});
        const [editing,setEditing]= useState(false);
        const[name,setName] =useState('');
        const[country,setCountry] =useState('');
        const[age,setAge] =useState('');
        const[token,setToken] =useState('');
        const[password,setPassword] =useState('');
        const navigate =useNavigate();
        const dispatch = useDispatch();

        



        useEffect(()=>{
            const getUser = JSON.parse(localStorage.getItem('user'));
            setToken(JSON.parse(localStorage.getItem('authToken')));
            setUser(getUser);
            setName(getUser.name);
            setAge(getUser.age);
            setCountry(getUser.country);
        },[]);

        const handleSubmit = ()=>{
            if(password.length!==8){
                toast.error("Password should be of min 8 characters");
                return;
            }
                    axios.put(`http://localhost:8000/user/${user._id}`,{email:user.email,name,country,age,password},{
                        headers: {
                          'Content-Type': 'application/json',
                          'Authorization': token
                        }
                      }).then((response)=>{
                       
                    setUser(response.data.user);
                    localStorage.setItem('user',JSON.stringify(response.data.user));
                    toast.success("Details updated successfully!")
                    setEditing(false);
                    }).catch((err)=>{
                        if(err.response.status===401){
                         
                            toast.error('Please Login Again to Edit');
                        }
                        console.log(err);
                    })
                }

        const handleDeleteAccount =()=>{

            if (confirm("Are you sure ?")) {

                axios.delete(`http://localhost:8000/user/${user._id}`,{
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': token
                }
              }).then((response)=>{
                    localStorage.clear();
                    dispatch(actions.setIsLoggedIn(false));
                    navigate('/');
                    toast.success("Account deleted successfully!")

                    }).catch((err)=>{
                        console.log(err);
                    })
              } 

            
        }



  return (
    <div className={styles.settingsPage}>
        
           {!editing && <><div className={styles.settingsPageDiv}><div style={{padding:'5px',display:'flex',flexDirection:'row',gap:'15px',fontSize:'20px',justifyContent:'space-between',flex:1}}>  <p>Name : </p><p>{user.name}</p></div></div>
           <div className={styles.settingsPageDiv}><div style={{padding:'5px',display:'flex',flexDirection:'row',gap:'15px',fontSize:'20px',justifyContent:'space-between',flex:1}}>  <p>Email : </p><p>{user.email}</p></div></div>
           <div className={styles.settingsPageDiv}><div style={{padding:'5px',display:'flex',flexDirection:'row',gap:'15px',fontSize:'20px',justifyContent:'space-between',flex:1}}>  <p>Country : </p><p>{user.country}</p></div></div>
           <div className={styles.settingsPageDiv}><div style={{padding:'5px',display:'flex',flexDirection:'row',gap:'15px',fontSize:'20px',justifyContent:'space-between',flex:1}}>  <p>age : </p><p>{user.age}</p></div></div>
           <div style={{marginTop:'10px'}}><div onClick={()=>setEditing(true)} className={styles.button}>Edit</div></div>
           <div><div  className={styles.button} onClick={handleDeleteAccount}>Delete Account</div></div>
           </>}

           {editing && <><div className={styles.settingsPageDiv2}><p>Name : </p><input type='text' value={name} onChange={(e)=>setName(e.target.value)} ></input></div>
            <div className={styles.settingsPageDiv2}><p>Email : </p><p>{user.email}</p></div>
            <div className={styles.settingsPageDiv2}><p>Country : </p><input type='text' value={country} onChange={(e)=>setCountry(e.target.value)}></input></div>
            <div className={styles.settingsPageDiv2}><p>Age : </p><input type='text' value={age} onChange={(e)=>setAge(e.target.value)}></input></div>
            <div className={styles.settingsPageDiv2}><p>Password : </p><input type='password' placeholder='min 8 characters' required minLength={8} onChange={(e)=>setPassword(e.target.value)}></input></div>
            <div><div  className={styles.button} onClick={handleSubmit}>Submit</div></div>
            <div><div onClick={()=>setEditing(false)} className={styles.button}>Back</div></div>
            </>}
            

    
    
    </div>
  )

}

export default SettingsPage