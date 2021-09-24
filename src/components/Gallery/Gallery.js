import { fabClasses, getAlertTitleUtilityClass } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Bombay from '../../util/img/bubbles-curled-up.jpg';
import Ocicat from '../../util/img/ocicat.jpg';
import Toybob from '../../util/img/toybob.jpg';

const useStyles = makeStyles({
    catPicture: {
        width: '30%'
    }
});

export const Gallery = () => {
    const classes = useStyles();
    const error = <span>Error!</span>;
    const breed = window.location.pathname.split('/')[2];

    const getTitle = () => {
        switch(breed) {
            case 'bombay':
                return <h3>Bombay</h3>;
            case 'ocicat':
                return <h3>Ocicat</h3>;
            case 'toybob':
                return <h3>Toybob</h3>;
            default:
                return null;
        }
    }

    const renderCatPhotosByBreed = () => {
        switch(breed) {
            case 'bombay':
                return <img className={classes.catPicture} src={Bombay} alt='Bombay cat curled on its back with paws up' />;
            case 'ocicat':
                return <img className={classes.catPicture} src={Ocicat} alt='Ocicat' />;
            case 'toybob':
                return <img className={classes.catPicture} src={Toybob} alt='Toybob' />;
            default:
                return error;
        }
    }

    return(
        <div className='galleryContainer'>
            {getTitle()}
            <br/>
            {renderCatPhotosByBreed()}
        </div>
    );
}

export default Gallery;