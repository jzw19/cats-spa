import { makeStyles } from '@mui/styles';
import React from 'react';
import Bubbles from '../../util/img/bubbles-tunnel.jpg';

// TODO: need to figure out the proper way to center content vertically and horizontally on the page
const useStyles = makeStyles({
    homeContainer: {
        marginTop: '100px'
    },
    bubblesInATunnel: {
        maxWidth: '330px'
    }
});

export const Home = () => {
    const classes = useStyles();
    return(
        <div className={classes.homeContainer}>
            <div></div>
            <div>
                <img className={classes.bubblesInATunnel} src={Bubbles} alt='black cat sitting in a fabric tunnel' />
                <figcaption>Bubbles</figcaption>
                <p>The alpha cat</p>
            </div>
        </div>
    );
}

export default Home;