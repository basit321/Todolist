import { createSlice } from "@reduxjs/toolkit";

const LinkSlice = createSlice({
    name: "deepLink",
    initialState: {
        link: null,
    },
    reducers: {
        setLink: (state, action) => {
            state.link = action.payload;
        },
    },
});

export const {
    setLink,
} = LinkSlice.actions;
export default LinkSlice.reducer;