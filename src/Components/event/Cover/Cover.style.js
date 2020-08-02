import { makeStyles } from '@material-ui/core';

export const useStyles =  makeStyles({
    layer: {
        backgroundColor: 'rgb(105 108 121 / 70%)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    coverPhoto:{
        position: 'relative',
        width: '100%',
        minHeight:'500px',
        // backgroundImage: "url('https://wallpaperhd.wiki/wp-content/uploads/football-wallpaper-football-wallpaper-for-ipad-1920x1080-4.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat'

    },
    eventHeading: {
        fontSize: '4em'
    }
})