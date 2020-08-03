import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Chip} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        minHeight:48,
        '& > *': {
            fontFamily: "'Karla', sans-serif",
            fontWeight: 700,
            margin: theme.spacing(1),
        },
        '@media only screen and (max-width:768px)': {
            flexWrap: 'nowrap',
            flexDirection: 'row',
            overflow: 'auto',
        },
        '& ․MuiChip-clickable': {
            '&:focus': {
                backgroundColor: 'white'
            }
          },
          '& .MuiChip-outlined': {
            '&:focus': {
                backgroundColor: 'white'
            }
          },
    },
    chip: {
        fontSize: 15,
        padding: '3px 10px',
    },
}));

export default function Chips(props) {
    const classes = useStyles();
    const [chips, setChips] = useState(props.src);
    const [activeChips, setActiveChips] = useState([]);
    const isActiveChip = (name) => activeChips.includes(name);

    const handleClick = name => {
        if(isActiveChip(name)) {
            setActiveChips(activeChips.filter(chip => chip !== name));
        } else {
            setActiveChips([...activeChips, name]);  
        }
    }

    useEffect(() => {
        props.onSetActiveChips(activeChips);
     }, [activeChips]);

    return (
        <div className={classes.root}>
            {chips.map((chip, index) => (
                <Chip key={index} label={chip.category} className={classes.chip} component="a" variant={isActiveChip(chip.category) ? 'default' : 'outlined'}
                  onClick={() => handleClick(chip.category)}/>
            ))}
        </div>);
}