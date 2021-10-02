import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from '../components/Gallery/GallerySlice';

export const store = configureStore({
  reducer: {
    galleryReducer
  },
});
