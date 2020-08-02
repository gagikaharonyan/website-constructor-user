import React from 'react';
import {useStyle} from './Footer.style';
import {connect} from 'react-redux';

function Footer(props) {
    const {isLoaded, links} = props;
    const classes = useStyle();

    const renderSocialLinks = () => {
        return Object.keys(links).map((key, index) => {
            switch (key) {
                case 'facebook':
                    return <a hre={links[key]}>
                        <i className="fab fa-facebook-f"></i>
                    </a>
                case 'instagram':
                    return <a hre={links[key]}>
                        <i className="fab fa-instagram"></i>
                    </a>
                case 'pinterest':
                    return <a hre={links[key]}>
                        <i className="fab fa-pinterest-p"></i>
                    </a>
                case 'twitter':
                    return <a hre={links[key]}>
                        <i className="fab fa-twitter"></i>
                    </a>
                default:
                    break;
            }
       });
    }
    
    return(
        <div className={classes.root}>
            <div className={classes.socialLinks}>
                {isLoaded
                ? renderSocialLinks()
                :''} 
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
    links: state.site.data.networks,
    isLoaded: state.site.isLoaded
});

export default connect(mapStateToProps)(Footer);


