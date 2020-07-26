import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  
    posts: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        '& .MuiPaper-root': {
            width:370,
            height: 'fit-content',

        },
        '@media only screen and (max-width:1180px)':{
            '& .MuiPaper-root': {
                width: '47%',
            },
        },
        '@media only screen and (max-width:600px)':{
            '& .MuiPaper-root': {
                width: '100%',
            },
        }
    },
    seeMore: {
        margin: '0 auto 60px',
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
        width: 'fit-content'
    },
    slideContainer: {
        height: 'fit-content'
    },
    eventsContainer: {
        margin: '20px 0 20px 0'
    },
    newEvents:{
        width: 'fit-content',
        borderBottom: '1px solid grey'
    },
    eventTitle: {
        transform : 'translate(0, -80px)',
        fontSize:20,
        background: '#a166e49e',
        width: '100%',   
        color: 'white',
        padding: '10px 0'

    },
    eventImage: {
        width:'100%'
    },
    events: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    eventContent: {
        width: '24%',
        height: 220,
        '@media only screen and (max-width:900px)':{
            width: '48%',
        },
        '@media only screen and (max-width:600px)':{
            width: '100%',
        }
    }

})