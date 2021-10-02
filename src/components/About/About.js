import { makeStyles } from '@mui/styles';
import React from 'react';

// TODO: need to figure out the proper way to center content vertically and horizontally on the page
const useStyles = makeStyles({
    aboutContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
});

export const About = () => {
    const classes = useStyles();
    return(
        <div className={classes.aboutContainer}>
            <p>This is a single page application for uploading and viewing pictures of cats.</p>
            <p>You can upload your own pictures and add them to the gallery.</p>
        </div>
    );
}

export default About;