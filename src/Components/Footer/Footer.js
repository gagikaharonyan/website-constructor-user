import React from 'react';
import {useStyle} from './Footer.style';
import {connect} from 'react-redux';

function Footer(props) {
    const {site} = props;
    const classes = useStyle();
    console.log(site)
    const renderSocialLinks = (links) => {
       console.log(links)
    }

    return(
        <div className={classes.root}>
            <div className={classes.socialLinks}>
                {site.isLoaded
                ? renderSocialLinks(site.data.networks)
                :<h3>Loading..</h3>} 
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

const mapStateToProps = (state) => ({
    site: state.site
});

export default connect(mapStateToProps)(Footer);


