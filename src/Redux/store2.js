import {configureStore} from '@reduxjs/toolkit';
import userReducer  from './userlice';
export default configureStore({


    reducer:{
        user:userReducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),

});


// store:{
//     username,
//     lastname,
//     email,
//     phone,
//     address,

    
// }