import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
// Imports
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// REDUCERS
const reducerOne = (state = [], action) => {
  
    if(action.type ==='getGif'){ 
        console.log('in reducerOne', action.payload);
        return action.payload.data;
    // }else if (action.type === 'setGif'){
    //     return action.payload.data;
    }
    return state;
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
const storeInstance = createStore(
    combineReducers({
        reducerOne
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// GENERATORS
function* rootSaga() {
    console.log('in rootSaga');
    yield takeEvery('SEARCH', searchGif);
    yield takeEvery('GET_GIF', getGif);
}

function* searchGif(action) { /* This SAGA talks to server.js and sends the response to reducer */
    console.log('in searchGif', action.payload)
    try {
        const response = yield axios.post('/search', action.payload)
        //Where does the response go after our post?
        yield put({ type: 'GET_GIF' })
    } catch (error) {
        console.log('There was an error in searchGif:', error);
    }
}
function* getGif(action){
console.log('in getGif')
  try {
      const response = yield axios.get('/search');
      yield put({type: 'getGif', payload: response.data})
  }  catch(error){
      console.log(error);
  }

}

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('react-root'));