import React from 'react'
import './css/Contact.css';


const Contact = () => {
    return (
        <div className="contact">
        <form className="contact-form">
        <h3>Contactez-nous</h3>

          <div className="form-group">
            <label htmlFor="username">NAME</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="AHMED STANBOULI"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ahmed@gmail.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Envoyer</button>
        </form>
      </div>
    )
}

export default Contact