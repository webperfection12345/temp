import {configureStore} from '@reduxjs/toolkit';
import loginUserReducer from '../modules/loginUser';
import getCountryReducer from '../modules/getCountry';
import getPopertiesReducer from '../modules/getPoperties';
import getFavoritePropertiesReducer from '../modules/getFavoriteProperties';
import getTrashReducer from '../modules/getTrash';

export const store = configureStore({
  reducer: {
    loginUser: loginUserReducer,
    getCountry: getCountryReducer,
    getPoperties: getPopertiesReducer,
    getFavoriteProperties: getFavoritePropertiesReducer,
    getTrash: getTrashReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      hasError: true,
      errorName: 'ValidationError',
      errorMessage: 'Foo must be greater than Bar',
    }),
});
