
import React  from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import LeftLogIn from './extraComponents/LeftLogIn';
// import styles from "./LogIn.module.css";
 
const LogOut = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    
    localStorage.removeItem("Flipkartuser");
    
  })
  navigate('/');
}


export default LogOut;
