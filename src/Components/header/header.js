import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from "react-router";

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import NavBar from './NavBar'
import {setSearchedText} from '../../store/actions/site';

import {useStyle} from './Header.style'


function Header(props) {
  const {site} = props;
  const classes = useStyle();
  const navLinks = site.data.pages;
  const {backgroundColor, color} = {backgroundColor: 'white', color: 'black'};
  
  const handleOnSearch = (event) => {
    props.setSearchedText(event.target.value);
  };

  return(
    <div className={classes.root} style={{backgroundColor, color}}>
      <Link className={classes.appLogo} to='/'>
        <span>Website</span> 
        <span>Constructor</span>
      </Link>        
      { site.isLoaded
      ?<NavBar className={classes.navLinks}
        links={navLinks} 
        pathname={props.location.pathname}
        onDisplayNavMenu={(isOpen) => props.setSearchedText('')}></NavBar>
      : '' }
      <TextField
        onChange={handleOnSearch}
        value={site.searchedText}
        style={{margin: '0 50px 0 20px'}}
        placeholder='search post'
        InputProps={{
        startAdornment: (
          <InputAdornment position="start">
              <SearchIcon/>
          </InputAdornment>
        ),
      }}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  site: state.site
});

const mapDispatchToProps = (dispatch) => ({
  setSearchedText: (text) => dispatch(setSearchedText(text))
});

Header.propTypes = {
  site: PropTypes.object.isRequired,
  setSearchedText: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
