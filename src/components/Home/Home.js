import { makeStyles } from '@mui/styles';
import React from 'react';
import Bubbles from '../../util/img/bubbles-tunnel.jpg';

const useStyles = makeStyles({
    bubblesInATunnel: {
        marginTop: '16px',
        maxWidth: '30%'
    }
});

export const Home = () => {
    const classes = useStyles();
    return(
        <div className='homeContainer'>
            <img className={classes.bubblesInATunnel} src={Bubbles} alt='black cat sitting in a fabric tunnel' />
            <figcaption>Bubbles</figcaption>
            <p>The one cat to rule them all</p>
        </div>
    );
}

export default Home;