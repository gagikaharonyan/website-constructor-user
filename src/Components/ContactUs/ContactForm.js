import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {useStyle} from './ContactForm.style';

export function ContactForm(props) {
  const classes = useStyle();
  const [formData, setFormData] = useState({
    name: '', 
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '' 
  });
  
  const handleInput = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
  }

  return (
    <div className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <span className={classes.caption}>Contact us</span>
      <form className={classes.form} autoComplete="off">
        <div className={classes.row}>
          <input name="name" type="text" className={classes.input} placeholder="Name"
              value={formData.name} onChange={handleInput} maxLength="20" required></input>
          <input name="lastName" type="text" className={classes.input} placeholder="Last name"
              value={formData.lastName} onChange={handleInput} maxLength="20" required></input>
        </div>
        <div className={classes.row}>
          <input name="phoneNumber" type="number" className={classes.input} placeholder="Phone number"
              value={formData.phoneNumber} onChange={handleInput} maxLength="20" required></input>
          <input name="email" type="email" className={classes.input} placeholder="E-Mail"
              value={formData.email} onChange={handleInput} maxLength="20" required></input>
        </div>
        <div className={classes.row}>
          <textarea className={classes.textarea} maxLength="1000" name="message" value={formData.message} onChange={handleInput}></textarea>
        </div>
        <button type="submit" className={classes.submitButton}>Submit</button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;