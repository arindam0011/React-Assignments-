import { configureStore } from "@reduxjs/toolkit";
import counterRucer from "./Counter"

const store = configureStore({
    reducer:{
        counter: counterRucer
    }
})

export default store