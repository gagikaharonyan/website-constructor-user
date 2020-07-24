import React from 'react' 
import {useStyle} from './Header.style'
import NavBar from './NavBar'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

function Header(props) {
    const {site} = props;
    const classes = useStyle();

    return(
        <div className={classes.root}>
            <Link className={classes.appLogo} to='/'>
                <span>Website</span> 
                <span>Constructor</span>
            </Link>        
            { site.isLoaded
            ?<NavBar className={classes.navLinks} links={site.data.headerPages}></NavBar>
            : '' }
            <TextField
                style={{margin: '0 50px 0 20px'}}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                ),
                }}
      />
        </div>
    );
    
}

const mapStateToProps = (state) => ({
    site: state.site
});

export default connect(mapStateToProps)(withRouter(Header))
