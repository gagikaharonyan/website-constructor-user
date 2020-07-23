import { makeStyles } from '@material-ui/core';

const styles = {
    '@font-face': {
      fontFamily: 'MyWebFont',
      src: 'url(https://fonts.googleapis.com/css?family=Special+Elite)'
    }
  }

export const useStyles = makeStyles({
    quote: {
        fontFamily: "'Special Elite', cursive",
        width:500,
        margin: '100px auto 80px',

        '& blockquote':  {
            fontWeight: 100,
            fontSize: '2rem',
            maxWidth: 600,
            lineHeight: 1.4,
            position: 'relative',
            margin: 0,
            padding: '.5rem',
            
        },
        '& blockquote:before': {
            position: 'absolute',
            color: '#f1efe6',
            fontSize: '8rem',
            width: '4rem',
            height: '4rem',
            content: '"“"',
            left: '-5rem',
            top: '-2rem'
        },
        '& blockquote:after': {
            position: 'absolute',
            color: '#f1efe6',
            fontSize: '8rem',
            width: '4rem',
            height: '4rem',
            content: '"”"',
            right: '-5rem',
            bottom: '1rem',
        }
    }
})