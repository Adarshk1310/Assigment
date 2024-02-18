import Button from '../Components/Button/Button'
import styles from './MainPage.module.css'
import map from '../assets/map.jpeg'
import logo from '../assets/logo.png'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { actions, authSelector } from '../redux/authReducer'
import { toast } from 'react-toastify'
import SettingsPage from '../SettingsPage/SettingsPage'



const MainPage = () => {


    const [steps,setSteps] =useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {currentPage} =useSelector(authSelector);
    


    useEffect(()=>{
        const checkLoggedIn = ()=>{
            const loggedIn = localStorage.getItem('authToken');
            
            
            if(loggedIn){
                dispatch(actions.setIsLoggedIn(true));
                
            }
            else{
                navigate('/');
            }
            
        }
        checkLoggedIn();
    },[dispatch,navigate])

    const handleLogout=()=>{

        
        localStorage.clear();
        navigate('/');
        dispatch(actions.setIsLoggedIn(false));
        dispatch(actions.setCurrentPage('market'));
        toast.success('Logout successfull !');
        
    }
  
    const handleSettingsClick =()=>{
        dispatch(actions.setCurrentPage('settings'));
    }
    const handlemarketClick =()=>{
        dispatch(actions.setCurrentPage('market'));
    }

    

  return (
    <div className={styles.main}>
       

            <div className={styles.sideBar}>
            <div className={styles.logoDiv}><img src={logo} alt='logo'/></div>
            <div>Cart</div>
            <div onClick={handlemarketClick} style={{fontWeight:currentPage==='market' && 'bold',transition:'all linear'}}>Market</div>
            <div onClick={handleSettingsClick} style={{fontWeight:currentPage==='settings' && 'bold',transition:'all linear'}}>Settings</div>
            <div onClick={handleLogout}>logout</div>
            <div></div>
            </div>

            {currentPage==='market'&& <div className={styles.rightBox}>
                <div className={styles.topBar}>
                     <div className={styles.completeButton}>Complete Profile</div>
                     <img className={styles.bellImage} src='https://cdn-icons-png.flaticon.com/128/1827/1827347.png' alt='bellicon' />
                    </div>
                <div className={styles.middleBar} >
                    <p className={styles.middleBarTitle}>Choose your new site</p>
                    <div className={styles.middleBarSteps}>
                        <div>
                            <img src='https://cdn-icons-png.flaticon.com/128/711/711239.png' alt='tick' />
                            <p>1</p>
                        </div>
                        <hr/>
                        <div>
                             <img src='https://cdn-icons-png.flaticon.com/128/711/711239.png' alt='tick' />
                            <p>2</p>
                        </div>
                        <hr/>
                        <div>
                             <img src='https://cdn-icons-png.flaticon.com/128/711/711239.png' alt='tick' />
                            <p>3</p>
                        </div>
                    </div>
                </div>
                <div className={styles.mainBoard} >
                    <div className={styles.routesInfo}> 
                        <p>jMarket</p>
                        <img src='https://cdn-icons-png.flaticon.com/128/2989/2989988.png' alt='rightarrow'/>
                        <p>Category1</p>
                        <img src='https://cdn-icons-png.flaticon.com/128/2989/2989988.png' alt='rightarrow'/>
                        <p>Theme park site</p>
                        <img src='https://cdn-icons-png.flaticon.com/128/2989/2989988.png' alt='rightarrow'/>
                    </div>
                    <div className={styles.siteImageDiv}>
                    </div>

                    <div className={styles.siteInfoDiv}>
                            <div className={styles.siteInfoInnerDiv1}>
                                <p style={{fontWeight:700,fontSize:'32px',marginTop:'0px'}}>Theme Park Site</p>
                                <div className={styles.addressDiv}>
                                    <img src='https://cdn-icons-png.flaticon.com/128/9282/9282867.png' alt='location'/>
                                    <p>Address of this site</p>
                                </div>
                                <div className={styles.facilitiesDiv}>
                                    <div><img src='https://cdn-icons-png.flaticon.com/128/5171/5171004.png' alt='adult ride'/><p>Adult rides</p></div>
                                    <div><img src='https://cdn-icons-png.flaticon.com/128/2529/2529991.png' alt='adult ride'/><p>Family rides</p></div>
                                    <div><img src='https://cdn-icons-png.flaticon.com/128/175/175724.png' alt='adult ride'/><p>Restaurants</p></div>
                                    <div><img src='https://cdn-icons-png.flaticon.com/128/11811/11811186.png' alt='adult ride'/><p>Premium</p></div>  
                                </div>
                                <div className={styles.ViewLink}>
                                    <img src='https://cdn-icons-png.flaticon.com/128/226/226159.png' alt='arrow' />
                                    <p style={{color:'#4375FB',fontSize:'14px',margin:'0px',padding:'0px',borderBottom:'1px solid #4375FB'}} >View opportunity on polygon</p>
                                </div>
                                <div className={styles.bottomInfoDiv}>
                                    <div><p style={{fontSize:'20px',fontWeight:'400'}}>200 Acres</p><p style={{fontSize:'11px',color: '#00000033'}}>Area</p></div>
                                    <div><p style={{fontSize:'20px',fontWeight:'400'}}>5 Lacks</p><p style={{fontSize:'11px',color: '#00000033'}}>Starting price</p></div>
                                    <div><p style={{fontSize:'20px',fontWeight:'400'}}>10 Days</p><p style={{fontSize:'11px',color: '#00000033'}}>Remaining Days</p></div>
                                    <div><p style={{fontSize:'20px',fontWeight:'400'}}>2.5 years</p><p style={{fontSize:'11px',color: '#00000033'}}>Next check</p></div>
                                </div>
                            </div>
                            <div className={styles.siteInfoInnerDiv2} >
                                <div className={styles.completeButton}>Complete</div>
                                <div className={styles.sitevisitButton}><p style={{color:'#4375FB'}}>Site visit</p><img src='https://cdn-icons-png.flaticon.com/128/758/758911.png'alt='right arrow'/></div>
                            </div>

                        </div>
                        
                    <div className={styles.BottomDiv}>

                        <div className={styles.informationDiv}>
                            <div className={styles.infoCard}><p style={{fontSize:'32px'}}>Overview</p><p style={{marginTop:'15px',fontSize:'16px',fontWeight:'400'}}>Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.</p></div>
                            <div  className={styles.infoCard}><p style={{fontSize:'32px'}}>Why ?</p><p style={{marginTop:'15px',fontSize:'16px',fontWeight:'400'}}>Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.</p></div>
                            <div className={styles.infoCard}><p style={{fontSize:'32px'}}>What ?</p><p style={{marginTop:'15px',fontSize:'16px',fontWeight:'400'}}>Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.</p></div>
                            <div className={styles.infoCard} style={{height:'270px'}}>
                                <p style={{fontSize:'32px'}}>Landmarks</p>
                                <div className={styles.landmarksInnerDiv}>
                                    <div className={styles.landmarkListItems}>
                                        <div className={styles.airportDiv}><img src='https://img.icons8.com/?size=80&id=M70JbY1oKQ1v&format=png' alt='airplane' /><p>Airport</p></div>
                                        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}><p style={{fontSize:'20px',fontWeight:'400'}}>100 Km</p><p style={{fontSize:'11px',fontWeight:'400',color:'#00000033'}}>Airport 1</p></div>
                                    </div>
                                    <div className={styles.landmarkListItems}>
                                        <div className={styles.airportDiv}><img src='https://img.icons8.com/?size=80&id=M70JbY1oKQ1v&format=png' alt='airplane' /><p >Airport</p></div>
                                        <div  style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}><p style={{fontSize:'20px',fontWeight:'400'}}>25 Km</p><p style={{fontSize:'11px',fontWeight:'400',color:'#00000033'}}>Green Which Terminla</p></div>
                                    </div>
                                    <div className={styles.landmarkListItems}>
                                        <div className={styles.airportDiv}><img src='https://cdn-icons-png.flaticon.com/128/8159/8159989.png' alt='airplane' /><p>Highway</p></div>
                                        <div  style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}><p style={{fontSize:'20px',fontWeight:'400'}}>100 Km</p><p style={{fontSize:'11px',fontWeight:'400',color:'#00000033'}}>Highway number 5</p></div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className={styles.infoCard} style={{height:'480px'}}>
                                <p style={{fontSize:'32px'}}>Map</p>
                                <div className={styles.mapImage}> <img  src={map} alt='map'/></div>
                                <div className={styles.callButtonDivContainer}><div className={styles.callButton}><p style={{color:'#4375FB'}}>Schedule a call </p><img src='https://cdn-icons-png.flaticon.com/128/758/758911.png'alt='right arrow'/></div></div>
                                </div>
                            
                        </div>


                        <div className={styles.taskDiv}>
                        <div className={styles.taskDivCard}>
                            <div style={{display:'flex',flexDirection:'row',gap:'20px'}}>
                                <div style={{marginTop:'5px'}}>{steps>0?<img style={{width:'25px',height:'25px'}} src='https://cdn-icons-png.flaticon.com/128/390/390923.png' alt='done'/>:<div style={{border:'1px solid black',width:'20px',height:'20px'}}></div>}</div>
                                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'5px',marginTop:'3px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400',margin:'0px'}}>Complete Profile</p>
                                <p style={{fontSize:'15px',fontWeigh:'400',color:'#4375FB80',margin:'0px'}} >Good job!</p>
                                <p style={{color:'#4375FB',fontSize:'32px',fontWeight:'700',margin:'0px'}} >Complete</p>
                                </div>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'25px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400'}}>17.02.2024</p>
                               {steps>0?<div className={styles.sitevisitButton}><p style={{color:'#4375FB'}}>Download</p><img style={{width:'20px',height:'20px'}} src='https://cdn-icons-png.flaticon.com/128/4208/4208397.png'alt='Download'/></div>
                                            :
                               <Button steps={steps} setSteps={setSteps} name='Complete'/>}
                            </div>
                            
                        </div>


{/* when step is greater than 1  */}


                       { steps > 1?<div className={styles.taskDivCard}>
                            <div style={{display:'flex',flexDirection:'row',gap:'20px'}}>
                                <div style={{marginTop:'5px'}}><img style={{width:'25px',height:'25px'}} src='https://cdn-icons-png.flaticon.com/128/390/390923.png' alt='done'/></div>
                                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'5px',marginTop:'3px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400',margin:'0px'}}>Step 1</p>
                                <p style={{fontSize:'15px',fontWeigh:'400',color:'#4375FB80',margin:'0px'}} >5% of total amount</p>
                                <p style={{color:'#4375FB',fontSize:'32px',fontWeight:'700',margin:'0px'}} >Rs 1,00,000</p>
                                </div>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'25px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400'}}>17.02.2024</p>
                                {steps>1?<div className={styles.sitevisitButton}><p style={{color:'#4375FB'}}>Receipt</p><img style={{width:'20px',height:'20px'}} src='https://cdn-icons-png.flaticon.com/128/4208/4208397.png'alt='Download'/></div>
                                            :
                               <Button steps={steps} setSteps={setSteps} name='Pay'/>}
                            </div>
                            
                        </div>   :      <div className={styles.taskDivCard}>
                                       <div style={{display:'flex',flexDirection:'row',height:'100%',gap:'20px'}}>
                                     <div style={{marginTop:'5px'}}><div style={{border:'1px solid black',width:'20px',height:'20px'}}></div></div>
                                      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',flex:1,gap:'5px',marginTop:'3px'}}>
                                      <p style={{fontSize:'20px',fontWeight:'400',margin:'0px'}}>Step 1</p>
                                </div>
                            </div>
                            <div style={{display:'flex',height:'100%',flexDirection:'column',alignItems:'flex-end',gap:'25px'}}>
                                <Button name='Pay' steps={steps} setSteps={setSteps} color={steps===1?'':'#4374fb63'}/>
                            </div>
                            
                        </div>
                        }

{/* when step is greater than 2  */}

                        {steps>2?<div className={styles.taskDivCard}>
                            <div style={{display:'flex',flexDirection:'row',gap:'20px'}}>
                                <div style={{marginTop:'5px'}}><img style={{width:'25px',height:'25px'}} src='https://cdn-icons-png.flaticon.com/128/390/390923.png' alt='done'/></div>
                                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'5px',marginTop:'3px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400',margin:'0px'}}>Step 2</p>
                                <p style={{fontSize:'15px',fontWeigh:'400',color:'#4375FB80',margin:'0px'}} >Good job!</p>
                                <p style={{color:'#4375FB',fontSize:'32px',fontWeight:'700',margin:'0px'}} >Complete</p>
                                </div>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'25px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400'}}>17.02.2024</p>
                                {steps>2?<div className={styles.sitevisitButton}><p style={{color:'#4375FB'}}>Receipt</p><img style={{width:'20px',height:'20px'}} src='https://cdn-icons-png.flaticon.com/128/4208/4208397.png'alt='Download'/></div>
                                            :
                               <Button steps={steps} setSteps={setSteps} name='Pay'/>}
                            </div>
                            
                        </div>    :   <div className={styles.taskDivCard}>
                                     <div style={{display:'flex',flexDirection:'row',height:'100%',gap:'20px'}}>
                                <div style={{marginTop:'5px'}}><div style={{border:'1px solid black',width:'20px',height:'20px'}}></div></div>
                                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',flex:1,gap:'5px',marginTop:'3px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400',margin:'0px'}}>Step 2</p>
                                </div>
                            </div>
                            <div style={{display:'flex',height:'100%',flexDirection:'column',alignItems:'flex-end',gap:'25px'}}>
                                <Button steps={steps} setSteps={setSteps} name='Pay' color={steps===2?'':'#4374fb63'}/>
                            </div>
                            
                        </div>
                        }


                        {steps>3?<div className={styles.taskDivCard}>
                            <div style={{display:'flex',flexDirection:'row',gap:'20px'}}>
                                <div style={{marginTop:'5px'}}><img style={{width:'25px',height:'25px'}} src='https://cdn-icons-png.flaticon.com/128/390/390923.png' alt='done'/></div>
                                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'5px',marginTop:'3px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400',margin:'0px'}}>Step 3</p>
                                <p style={{fontSize:'15px',fontWeigh:'400',color:'#4375FB80',margin:'0px'}} >We will get back to you in 3 months</p>
                                <p style={{color:'#4375FB',fontSize:'32px',fontWeight:'700',margin:'0px'}} >Complete</p>
                                </div>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'25px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400'}}>17.02.2024</p>
                                {steps>3?<div className={styles.sitevisitButton}><p style={{color:'#4375FB'}}>Download</p><img style={{width:'20px',height:'20px'}} src='https://cdn-icons-png.flaticon.com/128/4208/4208397.png'alt='Download'/></div>
                                            :
                               <Button steps={steps} setSteps={setSteps} name='Complete'/>}
                            </div>
                            
                        </div>    :   <div className={styles.taskDivCard}>
                                     <div style={{display:'flex',flexDirection:'row',height:'100%',gap:'20px'}}>
                                <div style={{marginTop:'5px'}}><div style={{border:'1px solid black',width:'20px',height:'20px'}}></div></div>
                                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',flex:1,gap:'5px',marginTop:'3px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400',margin:'0px'}}>Step 3</p>
                                </div>
                            </div>
                            <div style={{display:'flex',height:'100%',flexDirection:'column',alignItems:'flex-end',gap:'25px'}}>
                                <Button steps={steps} setSteps={setSteps} name='Pay' color={steps===3?'':'#4374fb63'}/>
                            </div>
                            
                        </div>
                        }


                       {steps>4? <div className={styles.taskDivCard}>
                            <div style={{display:'flex',flexDirection:'row',gap:'20px'}}>
                                <div style={{marginTop:'5px'}}><img style={{width:'25px',height:'25px'}} src='https://cdn-icons-png.flaticon.com/128/390/390923.png' alt='done'/></div>
                                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'5px',marginTop:'3px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400',margin:'0px'}}>Step 4</p>
                                <p style={{fontSize:'15px',fontWeigh:'400',color:'#4375FB80',margin:'0px'}} >Good job!</p>
                                <p style={{color:'#4375FB',fontSize:'32px',fontWeight:'700',margin:'0px'}} >Complete</p>
                                </div>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'25px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400'}}>17.02.2024</p>
                                {steps>4?<div className={styles.sitevisitButton}><p style={{color:'#4375FB'}}>Download</p><img style={{width:'20px',height:'20px'}} src='https://cdn-icons-png.flaticon.com/128/4208/4208397.png'alt='Download'/></div>
                                            :
                               <Button steps={steps} setSteps={setSteps} name='Complete'/>}
                            </div>
                            
                        </div>    :    <div className={styles.taskDivCard}>
                                     <div style={{display:'flex',flexDirection:'row',height:'100%',gap:'20px'}}>
                                <div style={{marginTop:'5px'}}><div style={{border:'1px solid black',width:'20px',height:'20px'}}></div></div>
                                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',flex:1,gap:'5px',marginTop:'3px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400',margin:'0px'}}>Step 4</p>
                                </div>
                            </div>
                            <div style={{display:'flex',height:'100%',flexDirection:'column',alignItems:'flex-end',gap:'25px'}}>
                                <Button steps={steps} setSteps={setSteps} name='Pay' color={steps===4?'':'#4374fb63'}/>
                            </div>
                            
                        </div>
                        
                    }
                       {steps>5? <div className={styles.taskDivCard}>
                            <div style={{display:'flex',flexDirection:'row',gap:'20px'}}>
                                <div style={{marginTop:'5px'}}><img style={{width:'25px',height:'25px'}} src='https://cdn-icons-png.flaticon.com/128/390/390923.png' alt='done'/></div>
                                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'5px',marginTop:'3px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400',margin:'0px'}}>Step 5</p>
                                <p style={{fontSize:'15px',fontWeigh:'400',color:'#4375FB80',margin:'0px'}} >Good job!</p>
                                <p style={{color:'#4375FB',fontSize:'32px',fontWeight:'700',margin:'0px'}} >Complete</p>
                                </div>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'25px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400'}}>17.02.2024</p>
                                {steps>5?<div className={styles.sitevisitButton}><p style={{color:'#4375FB'}}>Download</p><img style={{width:'20px',height:'20px'}} src='https://cdn-icons-png.flaticon.com/128/4208/4208397.png'alt='Download'/></div>
                                            :
                               <Button steps={steps} setSteps={setSteps} name='Complete'/>}
                            </div>
                            
                        </div>   :  <div className={styles.taskDivCard}>
                                     <div style={{display:'flex',flexDirection:'row',height:'100%',gap:'20px'}}>
                                <div style={{marginTop:'5px'}}><div style={{border:'1px solid black',width:'20px',height:'20px'}}></div></div>
                                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',flex:1,gap:'5px',marginTop:'3px'}}>
                                <p style={{fontSize:'20px',fontWeight:'400',margin:'0px'}}>Step 5</p>
                                </div>
                            </div>
                            <div style={{display:'flex',height:'100%',flexDirection:'column',alignItems:'flex-end',gap:'25px'}}>
                                <Button steps={steps} setSteps={setSteps} name='Pay' color={steps===5?'':'#4374fb63'}/>
                            </div>
                            
                        </div>
                        
                    
                    }
                        </div>
                    </div>
                </div>
            </div> }
            
            
            
            {currentPage==='settings' && <SettingsPage />
            }
            


    </div>
  )
}

export default MainPage
