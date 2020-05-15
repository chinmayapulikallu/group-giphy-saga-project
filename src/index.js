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
    if(action.type ==='GET_GIF'){ 
        console.log('in reducerOne', action.payload);
        return action.payload.data;
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
    yield takeEvery('CLICK_SEARCH', clickSearch);
    // yield takeEvery('GET_GIF', getGif);
}

function* clickSearch(action) {
    console.log('action.payload is:', action.payload)
    let searchTerm = action.payload;
    try {
        const response = yield axios.get(`/search/${searchTerm}`);
        yield put({ type: 'GET_GIF', payload: response.data });
    }
    catch (error) {
        console.log(error);
    }
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('react-root'));