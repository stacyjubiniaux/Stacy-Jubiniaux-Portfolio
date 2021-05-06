import React from 'react';
import emailjs from 'emailjs-com';

// == Import : local
import './style.scss';
import Networks from './SocialNetworks';

const Contacts = () => { 
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'web-site-template', e.target, 'user_qZllDUnjp0kHGyRsOk7Xm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="contacts" id="contacts">
      <h1 className="contacts-title">Contacts</h1>
        <div className="contacts-contact">
          <form className="contacts-form" onSubmit={sendEmail}>
            <p className="contacts-content">Envoyer un message</p>
            <div>
              <input type="text" className="contacts-firstname" placeholder="Prénom" name="firstname" />
            </div>
            <div>
              <input type="text" className="contacts-lastname" placeholder="Nom" name="lastname" />
            </div>
            <div>
              <input type="email" className="contacts-email" placeholder="Email" name="email" />
            </div>
            <div>
              <input type="text" className="contacts-subject" placeholder="Sujet" name="subject" />
            </div>
            <div>
              <textarea className="contacts-message" placeholder="Message" name="message"></textarea>
            </div>
            <div>
              <input type="submit" className="contacts-button" value="Envoyer" />
            </div>
          </form>
          <Networks />
        </div>
    </div>
  )};

export default Contacts;