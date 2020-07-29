import React, {useState, useEffect } from 'react';
import {Container, Row} from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer'
import {connect} from 'react-redux';
import {fetchSite} from '../../store/actions/site';
import {SearchModal} from '../SearchModal';

import { useStyles } from './UserLayout.style';

const UserLayout = (props) => {
    const [searchedText, setSearchedText] = useState('');
    const classes = useStyles();

    const loadSite = () => {
        props.site.isLoaded || props.fetchSite();
    }

    const handleSearch = (text) => {
        setSearchedText(text)
    }

    useEffect(() => {
        loadSite();
    }, [])

    return (<div className={classes.App}>
                <Header onSearch={handleSearch}/>
                {searchedText.length !== 0 ? <SearchModal searchedText={searchedText}/> : ''}
                {props.children}
                <Footer/>
            </div>)
}

const mapStateToProps = (state) => ({
    site: state.site
});

const mapDispatchToProps = (dispatch) => ({
    fetchSite: () => dispatch(fetchSite()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout);
