import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {useStyle} from './Footer.style';

function Footer(props) {
  const {isLoaded, links} = props;
  const classes = useStyle();

  const renderSocialLinks = () => {
    return Object.keys(links).map((key, index) => {
      switch (key) {
        case 'facebook':
          return <a key={uuid()} href={links[key]}>
              <i className="fab fa-facebook-f"></i>
          </a>
        case 'instagram':
          return <a key={uuid()} href={links[key]}>
              <i className="fab fa-instagram"></i>
          </a>
        case 'pinterest':
          return <a key={uuid()} href={links[key]}>
              <i className="fab fa-pinterest-p"></i>
          </a>
        case 'twitter':
          return <a key={uuid()} href={links[key]}>
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

Footer.propTypes = {
    links: PropTypes.object,
    isLoaded: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Footer);


