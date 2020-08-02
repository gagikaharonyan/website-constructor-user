import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    homeContainer: {
        marginTop: 0
    },
    posts: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '0 40px',
        width: '100%',
        // margin: '0 10px',
        
        '& .MuiPaper-root': {
            // width: '100%',
        },
        '@media only screen and (max-width:768px)':{
            justifyContent: 'center'
        },
        '& a': {
            maxWidth: 370,
            minWidth: 300,
            width: '32%',
            height: 'fit-content',
            '@media only screen and (max-width:992px)':{
                width: '48%' ,
            },
            '@media only screen and (max-width:768px)':{
                width : '100%',
                margin: 'auto'
            },
            '@media only screen and (max-width:320px)':{
                width: 300
            }
        },
    },
    seeMore: {
        margin: '40px auto 40px',
        width:200,
        textAlign: 'center',
        fontSize:22,
        borderBottom: '1px solid grey', 
        cursor: 'pointer',
        '& a': {
            color: '#a166e4'
        }
    },
    latestPosts: {
        borderBottom: '1px solid grey',
        width: 'fit-content',
        margin: '0 40px 20px 40px',
        '@media only screen and (max-width:1280px)':{
            marginLeft: 30,
        },
        '@media only screen and (max-width:992px)':{
            marginLeft: 40,
        },
    },
    slideContainer: {
        height: 'fit-content',
        width: '100%',
        marginTop: 60
    },
    eventsContainer: {
        margin: '0 20px 20px 20px',
        width: '100%',
    },
    newEvents:{
        width: 'fit-content',
        borderBottom: '1px solid grey'
    },
    eventTitle: {
        transform : 'translate(0, -70px)',
        fontSize:16,
        background: '#0000007d',
        width: '100%',   
        color: 'white',
        padding: '10px 0 10px 10px',

    },
    eventImage: {
        width:'100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat:'no-repeat'

    },
    events: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        '@media only screen and (max-width:900px)':{
            justifyContent: 'space-around',

        },
    },
    eventContent: {
        width: '24%',
        height: 220,
        marginBottom:20,
        marginRight: 10,
        '@media only screen and (max-width:900px)':{
            width: '46%',
        },
    }

})