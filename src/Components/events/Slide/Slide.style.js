import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    sliderContainer: {
        width: 800,
        marginBottom: 40,
        '& .awssld__bullets': {
            '& .awssld__bullets--active': {
                transform: 'scale(0.6)',
            },
            '& button': {
                transform: 'scale(0.4)',
                margin:0
            },
            
        },
        '& .awssld__controls__arrow-right': {
            height: 17,
            opacity: '1',
            '&:before':{
                backgroundColor: 'black'
            },
            '&:after':{
                backgroundColor: 'black'
            }
        },
        '& .awssld__controls__arrow-left': {
            height: 17,
            opacity: '1',
            '&:before':{
                backgroundColor: 'black'
            },
            '&:after':{
                backgroundColor: 'black'
            }
        },
        '& .awssld__next': {
            '&:focus': {
                outline:'none'
            }
        },
        '& .awssld__prev': {
            '&:focus': {
                outline:'none'
            }
        },
        '& .awssld__timer':{
            backgroundColor: 'transparent!important',
            height:0
        },
        '& .awssld__timer--run':{
            backgroundColor: 'transparent!important',
        },
        '& .awssld__timer--animated':{
            backgroundColor: 'transparent!important',

        },
        '& .awssld__timer--fast':{
            backgroundColor: 'transparent!important',

        }

    },
})