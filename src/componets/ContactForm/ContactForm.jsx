import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function ContactForm() {
  return (
    <section className={styles.container}>
    
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      <Button isOutLine ={false} text="Via Support chat" icon={<MdMessage />}  />
      <Button isOutLine={false} text="Via call" icon={<IoMdCall />}  />
      </div>
      <Button isOutLine = {true} text="Via Email Form"  icon={<MdEmail /> }/>
      <form action="">
      <div className={styles.form_control}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" />
      </div>
      <div className={styles.form_control}>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" />
      </div>
      <div className={styles.form_control}>
      <label htmlFor="text">Text</label>
      <textarea name="text" />
      </div>
      <div className='submit'>
      <Button isOutLine = {false} text="Submit"  icon={null }/>
      </div>      
    </form>
    </div>
    <div className={styles.contact_image}>
      <img src="/img/Service 24_7-pana 1.svg" alt="image" />
       
    </div>
    

    </section>
    
  )
}

export default ContactForm