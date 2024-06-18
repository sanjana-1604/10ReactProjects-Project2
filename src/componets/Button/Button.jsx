import React from 'react'
import styles from "./Button.module.css";


// function Button(props) {//without destructuring 
function Button({isOutLine, icon, text, ...rest})//with destructuring
{
  return (
    <button {...rest} className={isOutLine ? styles.outline_btn : styles.primary_btn}>
       {icon}
        {text}       
    </button>
  )
}

export default Button