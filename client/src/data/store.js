
import { createStore, applyMiddleware, compose } from 'redux'

import * as reducers from './reducers/reducers'
import * as actions from './actions/actions'
import { l } from '../utility/log-helper'
import thunk from 'redux-thunk'


const enhancer = compose(applyMiddleware(thunk))

export const store = createStore(reducers.deafultReducer, {}, enhancer)

export const test = (store) => {
    store.dispatch(actions.test({
        id: 1,
        name: "asdfasdfad"
    }))

    store.dispatch(actions.test({
        id: 2,
        name: "asdfasdfad"
    }))

    l(store.getState())
    
}