import React from 'react' 
import {useStyle} from './Footer.style'

export default function Footer(props) {
    const {site} = props;
    const classes = useStyle();

    return(
        <div className={classes.root}>
            <div className={classes.socialLinks}>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-pinterest-p"></i>
                <i class="fab fa-twitter"></i>
            </div>
            <span>© 2020 Website Constructor</span>
            <span>PicsArt Academy</span>
            <div className={classes.aboutDevs}>
                <span><i class="fas fa-laptop-code"></i> Developed by Team Premium Content</span>
                <span><i class="fas fa-envelope"></i> teampremiumcontent@gmail.com</span>
            </div>
            
        </div>
    );
    
}
