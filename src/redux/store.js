import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducer/auth/auth';

export default configureStore({
    reducer:{
        Auth:authReducer
    },
    devTools:process.env.NODE_ENV !== 'production',
})