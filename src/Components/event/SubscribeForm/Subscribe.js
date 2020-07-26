import React, {useState, useEffect} from 'react';
import {useStyle} from './Subscribe.style';

export function Subscribe(props) {
    const classes = useStyle();
    const [formData, setFormData] = useState({email: ''});
    const [subscribeBtnState, setSubsribeBtnState] = useState('')

    const handleInput = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
        setSubsribeBtnState('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
       // props.onSubmit(formData);
        setSubsribeBtnState('inactive');
        setTimeout(() => {
            setSubsribeBtnState('success');
        }, 500)
    }

    useEffect(() => {
        setSubsribeBtnState(formData.email.length === 0 ? 'inactive' : '');
    }, [formData]);

    return(
        <div className={classes.root}>
            <span className={classes.formTitle}>Subscribe</span>
            <span className={classes.text}>{props.invitationText}</span>
            <form autoComplete="off" onSubmit={handleSubmit} className={classes.form}>
                <input type="email" name="email" className={classes.emailField} maxLength="20"
                    value={formData.email} onChange={handleInput} required></input>
                <button type="submit"
                 className={classes.subscribeBtn + ' ' + subscribeBtnState}>
                    {subscribeBtnState === 'success' ? 'Subscribed' : 'Subscribe'}</button>
            </form>
        </div>);
}