import React from "react";
import {ContactForm, ContactInfos} from '../../Components/contactUs';
import { useStyle } from "./ContactUs.style";
import useMediaQuery from '@material-ui/core/useMediaQuery';

function ContactUs(props) {
    const classes = useStyle();
    const matches = useMediaQuery('(max-width:768px)');
    const infos = [{type: 'EMAIL', text: 'gassg@gmail.com'},
                    {type: 'PHONE_NUMBER', text: '+374 080 80 80'},
                    {type: 'LOCATION', text: 'Yerevan, Armenia'}]
    
    const handleSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={'page ' + classes.root}>
            <div className={classes.container}>
                {matches
                ?<>
                    <ContactInfos infos={infos}/>
                    <ContactForm onSubmit={handleSubmit}/>
                 </>
                :<>
                    <ContactForm onSubmit={handleSubmit}/>
                    <div className={classes.border}></div>
                    <ContactInfos infos={infos}/>
                </>}
                
            </div>
            
        </div>
    );
}

export default ContactUs