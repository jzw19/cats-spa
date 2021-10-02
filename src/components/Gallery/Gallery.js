import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';

import { setBombays, setOcicats, setToybobs } from './GallerySlice';
import Bombay from '../../util/img/bubbles-curled-up.jpg';
import Ocicat from '../../util/img/ocicat.jpg'; 
import Toybob from '../../util/img/toybob.jpg';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
    image: {
        width: '20%',
        margin: '10px'
    }
});

export const Gallery = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const bombays = useSelector((state) => state.galleryReducer.bombays);
    const ocicats = useSelector((state) => state.galleryReducer.ocicats);
    const toybobs = useSelector((state) => state.galleryReducer.toybobs);
    const [fileNames, setFileNames] = useState([]);
    
    const error = <div className='errorMessage'>Error: Invalid URL. Please select a valid cat breed.</div>;
    const breed = window.location.pathname.split('/')[2];

    useEffect(() => {
        if(!bombays.length && !ocicats.length && !toybobs.length) {
            dispatch(setBombays([<img className={classes.image} src={Bombay} alt='Bombay cat curled on its back with paws up' />]));
            dispatch(setOcicats([<img className={classes.image} src={Ocicat} alt='Ocicat' />]));
            dispatch(setToybobs([<img className={classes.image} src={Toybob} alt='Toybob' />]));
        }
    }, []);

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
        let photosToDisplay;
        switch(breed) {
            case 'bombay':
                photosToDisplay = bombays;
                break;
            case 'ocicat':
                photosToDisplay = ocicats;
                break;
            case 'toybob':
                photosToDisplay = toybobs;
                break;
            default:
                photosToDisplay = [error];
        }
        return photosToDisplay;
    }

    const clickSelectImageInput = () => document.getElementById('selectImageInput').click();

    const renderSelectedFileNames = () => {
        const nextFileNames = [];
        const selectImageInput = document.getElementById('selectImageInput');
        if(selectImageInput) {
            for(const file of selectImageInput.files) {
                nextFileNames.push(
                    <div className='imageContainer'>
                        {file.name}
                        <br/>
                    </div>
                );
            }
        }
        setFileNames(nextFileNames);
    }

    const uploadSelectedFiles = () => {
        const selectedFiles = document.getElementById('selectImageInput').files;
        for(const file of selectedFiles) {
            switch(breed) {
                case('bombay'):
                    dispatch(setBombays([...bombays, <img className={classes.image} src={URL.createObjectURL(file)} alt='bombay cat'/>]));
                    break;
                case('ocicat'):
                    dispatch(setToybobs([...toybobs, <img className={classes.image} src={URL.createObjectURL(file)} alt='toybob cat'/>]));
                    break;
                case('toybob'):
                    dispatch(setOcicats([...ocicats, <img className={classes.image} src={URL.createObjectURL(file)} alt='ocicat cat'/>]));
                    break;
                default:
            }
        }
    }

    return(
        <div className='galleryContainer'>
            {getTitle()}
            <div>
                Upload your own cat photos!
            </div>
            <div className='fileUploadContainer'>
                <input id='selectImageInput' data-testid='selectImageInput' type='file' onChange={renderSelectedFileNames} accept='.png, .jpg, .jpeg, .svg' multiple hidden/>
                <Button variant='outlined' size='small' className={classes.button} onClick={clickSelectImageInput}>
                    Select Photos
                </Button>
                <Button variant='outlined' size='small' className={classes.button} onClick={uploadSelectedFiles}>
                    Upload
                </Button>
            </div>
            <div className='selectedFileNamesContainer'>
                {fileNames}
            </div>
            {renderCatPhotosByBreed()}
        </div>
    );
};

export default Gallery;