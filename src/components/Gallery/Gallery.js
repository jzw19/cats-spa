/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Button, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';

import { setBombays, setOcicats, setToybobs } from './GallerySlice';
import Bombay from '../../util/img/bubbles-curled-up.jpg';
import Ocicat from '../../util/img/ocicat.jpg'; 
import Toybob from '../../util/img/toybob.jpg';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
    header: {
        marginBlock: '5vh'
    },
    description: {
        marginBlock: '2vh'
    },
    image: {
        width: '240px',
        height: '240px'
    },
    galleryButtonContainer: {
        marginBottom: '2vh'
    },
    fileNamesContainer: {
        marginBottom: '3vh'
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
                return <h2 className={classes.header}>Bombay</h2>;
            case 'ocicat':
                return <h2 className={classes.header}>Ocicat</h2>;
            case 'toybob':
                return <h2 className={classes.header}>Toybob</h2>;
            default:
                return null;
        }
    }

    const generateGridWrappedPhotos = (photosToDisplay) => {
        let wrappedPhotos = [];
        const offset = photosToDisplay.length % 4;
        for(let i = 0; i < photosToDisplay.length - offset; i++) {
            wrappedPhotos.push(
                <Grid item xs={12} sm={6} lg={3}>
                    {photosToDisplay[i]}
                </Grid>
            );
        }
        for(let i = photosToDisplay.length - offset || 0; i < photosToDisplay.length; i++) {
            switch(offset) {
                case 1:
                    wrappedPhotos.push(
                        <Grid item xs={12}>
                            {photosToDisplay[i]}
                        </Grid>
                    );
                    break;
                case 2:
                    wrappedPhotos.push(
                        <Grid item xs={12} sm={6}>
                            {photosToDisplay[i]}
                        </Grid>
                    );
                    break;
                case 3:
                    wrappedPhotos.push(
                        <Grid item xs={12} sm={4}>
                            {photosToDisplay[i]}
                        </Grid>
                    );
                    break;
                default:
            }
        }
        return wrappedPhotos;
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

        return generateGridWrappedPhotos(photosToDisplay);
    }

    const clickSelectImageInput = () => document.getElementById('selectImageInput').click();

    const renderSelectedFileNames = () => {
        const nextFileNames = [];
        const selectImageInput = document.getElementById('selectImageInput');
        if(selectImageInput) {
            for(const file of selectImageInput.files) {
                nextFileNames.push(
                    <div className={classes.fileName}>
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
        const newImages = [];
        switch(breed) {
            case('bombay'):
                for(const file of selectedFiles) {
                    newImages.push(<img className={classes.image} src={URL.createObjectURL(file)} alt='bombay cat'/>);
                }
                dispatch(setBombays([...bombays, ...newImages]));
                break;
            case('ocicat'):
                for(const file of selectedFiles) {
                    newImages.push(<img className={classes.image} src={URL.createObjectURL(file)} alt='ocicat cat'/>);
                }
                dispatch(setToybobs([...toybobs, ...newImages]));
                break;
            case('toybob'):
                for(const file of selectedFiles) {
                    newImages.push(<img className={classes.image} src={URL.createObjectURL(file)} alt='toybob cat'/>);
                }
                dispatch(setOcicats([...ocicats, ...newImages]));
                break;
            default:
        }
    }

    return(
        <div>
            {getTitle()}
            <div className={classes.description}>
                Upload your own cat photos!
            </div>
            <div className={classes.galleryButtonContainer}>
                <input id='selectImageInput' data-testid='selectImageInput' type='file' onChange={renderSelectedFileNames} accept='.png, .jpg, .jpeg, .svg' multiple hidden/>
                <Stack spacing={2} direction='row' justifyContent='center' alignItems='center'>
                    <Button variant='outlined' size='small' onClick={clickSelectImageInput}>
                        Select Photos
                    </Button>
                    <Button variant='outlined' size='small' onClick={uploadSelectedFiles}>
                        Upload
                    </Button>
                </Stack>
            </div>
            <div className={classes.fileNamesContainer}>
                {fileNames}
            </div>
            <Grid container spacing={2} >
                {renderCatPhotosByBreed()}
            </Grid>
        </div>
    );
};

export default Gallery;