import React from 'react' 
import {useStyle} from './Footer.style'

export default function Footer(props) {
    const {site} = props;
    const classes = useStyle();

    return(
        <div className={classes.root}>
            <div className={classes.socialLinks}>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest-p"></i>
                <i className="fab fa-twitter"></i>
            </div>
            <span>© 2020 Website Constructor</span>
            <span>PicsArt Academy</span>
            <div className={classes.aboutDevs}>
                <span><i className="fas fa-laptop-code"></i> Developed by Team Premium Content</span>
                <span><i className="fas fa-envelope"></i> teampremiumcontent@gmail.com</span>
            </div>
            
        </div>
    );
    
}
