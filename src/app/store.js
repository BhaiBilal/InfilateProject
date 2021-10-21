import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import UserloginlogoutReducer from 'redux/UserloginlogoutSlice'
import CartItemsReducer from 'redux/CartItemsSlice'
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  userLoginLogout:UserloginlogoutReducer,
  cartItemsReducer:CartItemsReducer,
});


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store