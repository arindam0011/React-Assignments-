import {configureStore} from "@reduxjs/toolkit";

import userReduser from "./User"

const store = configureStore({
    reducer: {
        user: userReduser
    }
});
export default store