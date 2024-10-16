import {configureStore} from '@reduxjs/toolkit'
import reducer from './slice';
const store = configureStore({
    reducer: {
        companies: reducer
    }
})
export default store;