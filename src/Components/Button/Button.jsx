import React from 'react'
import styles from './Button.module.css'

const Button = ({name,setSteps,color}) => {

  const handleClick =()=>{

    setSteps((prev)=>prev+1);


  }


  return (
    <div onClick={handleClick} className={styles.button} style={{backgroundColor:color}}>{name}</div>
  )
}

export default Button