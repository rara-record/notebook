// client / index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import Reducer from './_reducers'

const createStoreWithMiddleware =
   applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
   <Provider
      store={createStoreWithMiddleware(Reducer,
         window.__REDUX_DEVTOOLS_EXTENSION__ &&
         window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <App />
   </Provider>

   , document.getElementById('root'))
serviceWorker.unregister()


// client / _reducers / index.js
import { combineReducers } from 'redux';
// import user fomr './user_reducer';

const rootReducer = combineReducers({
   user, // user_reducer의 함수를 받으며 리덕스를 분리해서 쓸때 사용
})

export default rootReducer;