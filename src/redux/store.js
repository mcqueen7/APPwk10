import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import counterReducer from "./counterSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";

const persistConfig={
    key:"root",
    storage:AsyncStorage,
}

// Part2: 
const store=configureStore({
    reducer:{
      counter:persistReducer(persistConfig,counterReducer),
    },
    devTools: process.env.NODE_ENV !=="production",
    middleware:[thunk]
  });
   persistStore(store);
  export default store;