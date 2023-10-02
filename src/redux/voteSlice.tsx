import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: []
}

export const voteSlice = createSlice({
    name: "vote",
    initialState,
    reducers: {
        addVote: (state, action) => {
            const { movie, vote } = action.payload;
            if (state.movies.length > 0 && state.movies.filter(item => item.id === movie.id).length > 0) {
                state.movies = state.movies.map(item => {
                    if (item.id === movie.id) {
                        item = {...movie, vote };
                    }
                    return item;
                })
            } else {
                state.movies.push({...movie, vote });
            }
        }
    }
});

export const { addVote } = voteSlice.actions;
export default voteSlice.reducer;