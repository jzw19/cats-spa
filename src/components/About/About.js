import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    aboutContainer: {
        marginTop: '40vh'
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