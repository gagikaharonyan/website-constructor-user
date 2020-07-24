import React, {useEffect, useState} from 'react';
import {useStyle} from './ContactForm.style';
import { Button } from '@material-ui/core';

export function ContactForm(props) {
    const classes = useStyle();
    const [formData, setFormData] = useState({
        name: '', 
        lastName: '',
        phoneNumber: '',
        email: '',
        message: '' });
    
    const oninput = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    return (
        <div className={classes.root} autocomplete="off">
            <form className={classes.form}>
                <div className={classes.row}>
                    <input name="name" type="text" className={classes.input} placeholder="Name"
                        value={formData.name} onChange={oninput} maxLength="20" required></input>
                    <input name="lastName" type="text" className={classes.input} placeholder="Last name"
                        value={formData.lastName} onChange={oninput} maxLength="20" required></input>
                </div>
                <div className={classes.row}>
                    <input name="phoneNumber" type="number" className={classes.input} placeholder="Phone number"
                        value={formData.phoneNumber} onChange={oninput} maxLength="20" required></input>
                    <input name="email" type="email" className={classes.input} placeholder="E-Mail"
                        value={formData.email} onChange={oninput} maxLength="20" required></input>
                </div>
                <div className={classes.row}>
                    <textarea className={classes.textarea} maxLength="1000" name="message" value={formData.message} onChange={oninput}>

                    </textarea>
                </div>
                <button type="submit" className={classes.submitButton}>Submit</button>
            </form>
            
        </div>);
}

export default ContactForm;