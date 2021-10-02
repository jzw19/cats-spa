import { createSlice } from "@reduxjs/toolkit";

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        bombays: [],
        ocicats: [],
        toybobs: []
    },
    reducers: {
        setBombays: (state, action) => {
            console.log(action.payload);
            state.bombays = action.payload;
        },
        setOcicats: (state, action) => {
            state.ocicats = action.payload;
        },
        setToybobs: (state, action) => {
            state.toybobs = action.payload;
        }
    }
});

export const { setBombays, setOcicats, setToybobs } = gallerySlice.actions;
export default gallerySlice.reducer;