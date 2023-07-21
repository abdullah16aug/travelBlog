import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../components/home/cardSlice";

const store= configureStore({
    reducer: {
        card: cardReducer,
    },

})
export default store;