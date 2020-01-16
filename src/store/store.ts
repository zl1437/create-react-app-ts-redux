
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import * as indexReducer from '../reducers'
import * as course from '../reducers/course'
import { combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise';


import { createLogger } from 'redux-logger';
const logger = createLogger();
declare const window: any;
//声明 window 为其可以加入原来没有的属性
declare const module: any;


const reducer = combineReducers({
    ...indexReducer,
    ...course
})
export default function configureStore(initialState: any) {
    // const create = window.devToolsExtension
    //     ? window.devToolsExtension()(createStore)
    //     : createStore
    const store = process.env.NODE_ENV === 'production' ?
        createStore(reducer, applyMiddleware(thunk, logger, promiseMiddleware))
        :
        (
            createStore(reducer, compose(
                applyMiddleware(thunk, logger, promiseMiddleware)
            )))


    // if (module.hot) {
    // module.hot.accept('../reducers', () => {
    //     const nextReducer = require('../reducers')
    //     store.replaceReducer(nextReducer)
    // })
    // }

    return store
}

