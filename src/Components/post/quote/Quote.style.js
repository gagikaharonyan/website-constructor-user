import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    quote: {
        fontFamily: "'Special Elite', cursive",
        width:600,
        margin: '100px auto 80px',
        '@media only screen and (max-width:600px)': {
            width:350
        },
        '@media only screen and (max-width:480px)': {
            width:300
        },

        '& blockquote':  {
            fontWeight: 100,
            fontSize: '2rem',
            maxWidth: 600,
            lineHeight: 1.4,
            position: 'relative',
            margin: 0,
            padding: '.5rem',
            '@media only screen and (max-width:480px)': {
                width:300
            },
            
        },
        '& blockquote:before': {
            position: 'absolute',
            color: '#f1efe6',
            fontSize: '8rem',
            width: '4rem',
            height: '4rem',
            content: '"“"',
            left: '-5rem',
            top: '-2rem',
            '@media only screen and (max-width:600px)': {
                fontSize: '6rem',
                left: '-2rem',
                top: '-3rem',


            }
        },
        '& blockquote:after': {
            position: 'absolute',
            color: '#f1efe6',
            fontSize: '8rem',
            width: '4rem',
            height: '4rem',
            content: '"”"',
            right: '-5rem',
            bottom: '0rem',
            '@media only screen and (max-width:600px)': {
                right: '-2rem',
                fontSize: '6rem',
                bottom: '-2rem',

            }

        }
    },

})