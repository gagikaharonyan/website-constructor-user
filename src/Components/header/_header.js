import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import {connect} from 'react-redux';
import NavBar from './NavBar'


const Header = (props) => {
    const {site} = props;

    return (
        <Navbar bg="light" expand='md'>
            <Navbar.Brand href="#home"><Link to={"/"}><span style={{color: "#3fe4fd"}}>Website</span> <span
                style={{color: "#a166e4"}}>Constructor</span></Link></Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                {site.isLoaded
                ?<NavBar links={site.data.headerPages}></NavBar>
                : ''}
                
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = (state) => ({
    site: state.site
});

export default connect(mapStateToProps)(withRouter(Header))