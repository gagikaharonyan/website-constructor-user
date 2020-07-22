import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Urls} from "../../constants"
import {withRouter} from "react-router";


const Header = () => {
    const links = (links) => {
        return links.map((el) => <Link key={el.id} style={{marginTop: '6px', marginLeft: "8px"}}
                                       to={el.url}>{el.name}</Link>)
    }

    return (
        <Navbar bg="light" expand='md'>
            <Navbar.Brand href="#home"><Link to={"/"}><span style={{color: "#3fe4fd"}}>Website</span> <span
                style={{color: "#a166e4"}}>Constructor</span></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {links(Urls)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header)