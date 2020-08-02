import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component {
    state = {
        isMenuOpen: false
    }

    handleToggleClick() {
        this.displayNavMenu(!this.state.isMenuOpen);
    }

    displayNavMenu(open) {
        this.props.onDisplayNavMenu(open);
        document.body.classList = open ? 'fixed-position' : '';
        this.setState({isMenuOpen: open});
    }

    render() {
        const {isMenuOpen} = this.state;
        
        return (
            <div className="Nav-bar col-container">
                <ul className={isMenuOpen ? 'nav-menu toggle-clicked' : 'nav-menu'} style={{margin: 0}} onClick={() => {this.displayNavMenu(false)}}>
                    {this.props.links.map((link, index) => 
                        <li key={index} onClick={() => {this.displayNavMenu(false)}} className={this.props.pathname == `/${link.url}` ? 'active-page' : ''}>
                            <Link to={`/${link.url}`}>{link.navName}</Link>
                        </li>
                    )}
                </ul>
                <span className="nav-toggle" onClick={() => {this.handleToggleClick()}}>
                    <i className={isMenuOpen ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}></i>
                </span>
            </div>);
    }

}