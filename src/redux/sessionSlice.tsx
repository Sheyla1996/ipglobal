import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sessionId: null,
    expiresAt: ""
}


export const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        addSession: (state, action) => {
            const { guest_session_id, expires_at } = action.payload;
            state.sessionId = guest_session_id;
            state.expiresAt = expires_at;
        }
    }
});

export const { addSession } = sessionSlice.actions;
export default sessionSlice.reducer;