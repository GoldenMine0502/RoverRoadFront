import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducer/auth/auth';
import userReducer from './reducer/user/user';
import popupReducer from './reducer/popup/popup';
import htmlReducer from './reducer/html/html';
import postReducer from './reducer/post/post';
import roadReducer from './reducer/road/road';
import searchReducer from './reducer/search/search';
import guiderReducer from './reducer/guider/guider';

export default configureStore({
    reducer:{
        auth:authReducer,
        user:userReducer,
        popup:popupReducer,
        html:htmlReducer,
        post:postReducer,
        road:roadReducer,
        search:searchReducer,
        guider:guiderReducer,
    },
    devTools:process.env.NODE_ENV !== 'production',
})