import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",

    initialState: {
        userName: "",
        email: ""
    },

    reducers: {

        addUser(state, action) {
            state.userName = action.payload
        },
        addEmail(state, action) {
            state.email = action.payload
        }

    }
})

export const { addUser, addEmail } = userSlice.actions
export default userSlice.reducer