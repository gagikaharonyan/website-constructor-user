import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import {connect} from 'react-redux';


const Header = (props) => {
    const links = (links) => {
        return links.map((el) => <Link key={el.id} style={{marginTop: '6px', marginLeft: "8px"}}
                                       to={el.url}>{el.name}</Link>)
    }

    const {site} = props;

    return (
        <Navbar bg="light" expand='md'>
            <Navbar.Brand href="#home"><Link to={"/"}><span style={{color: "#3fe4fd"}}>Website</span> <span
                style={{color: "#a166e4"}}>Constructor</span></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                {site.isLoaded
                ?<Nav className="mr-auto">
                    {links(site.data.headerPages)}
                </Nav>
                : ''}
                
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = (state) => ({
    site: state.site
});

export default connect(mapStateToProps)(withRouter(Header))