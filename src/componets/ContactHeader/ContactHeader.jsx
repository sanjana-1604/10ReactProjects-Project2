import React from 'react'
import styles from "./ContactHeader.module.css"
import ContactForm from '../ContactForm/ContactForm'

function ContactHeader() {
  return (
    <section className={`${styles.contact} container`}>
        <h1>CONTACT US</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non delectus maiores possimus, distinctio eum nobis, exercitationem laudantium facere omnis amet iste doloremque enim consectetur excepturi rerum ad iure. Assumenda, officia.</p>
        <ContactForm />
    </section>
  )
}

export default ContactHeader