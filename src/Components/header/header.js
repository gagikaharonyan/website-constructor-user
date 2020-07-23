import React from 'react' 
import {useStyle} from './Header.style'
import NavBar from './NavBar'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from "react-router";

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
        </div>
    );
    
}

const mapStateToProps = (state) => ({
    site: state.site
});

export default connect(mapStateToProps)(withRouter(Header))
