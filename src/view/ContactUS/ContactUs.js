import React from "react";
import {ContactForm, ContactInfos} from '../../Components/ContactUs';
import { useStyle } from "./ContactUs.style";


function ContactUs(props) {
    const classes = useStyle();
    const infos = [{type: 'EMAIL', text: 'gassg@gmail.com'},
                    {type: 'PHONE_NUMBER', text: '+374 080 80 80'},
                    {type: 'LOCATION', text: 'Yerevan, Armenia'}]
    return (
        <div className={classes.root}>
            <span className={classes.caption}>Contact Us</span>
            <div className={classes.container}>
                <ContactInfos infos={infos}/>
                <ContactForm/>
            </div>
            
        </div>
    );
}

export default ContactUs