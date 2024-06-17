import React from 'react'
import styles from "./Button.module.css";


// function Button(props) {//without destructuring 
function Button({isOutLine, icon, text})//with destructuring
{
  return (
    <button className={isOutLine ? styles.outline_btn : styles.primary_btn}>
       {icon}
        {text}       
    </button>
  )
}

export default Button