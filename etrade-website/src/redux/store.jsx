// import { configureStore } from '@reduxjs/toolkit'
// import  productSaga  from './productSaga'
// import rootReducer from "./rootReducer";
// import  createSagaMiddleware  from 'redux-saga'


// const SagaMiddleware = createSagaMiddleware();
// const store = configureStore({
//     reducer: rootReducer,
//     middleware: () => [SagaMiddleware]
// })


// SagaMiddleware.run(productSaga);
// export default store

import { configureStore } from '@reduxjs/toolkit';
import productSaga from './productSaga';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';

const SagaMiddleware = createSagaMiddleware();

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch {
    // Ignore write errors
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SagaMiddleware),
});

// Save state to local storage whenever store state changes
store.subscribe(() => {
  saveState(store.getState());
});

SagaMiddleware.run(productSaga);

export default store;
