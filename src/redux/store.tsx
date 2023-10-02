import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './sessionSlice';
import voteReducer from './voteSlice';

export const store = configureStore({
    reducer: {
        session: sessionReducer,
        vote: voteReducer
    }
})