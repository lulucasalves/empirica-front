import { combineReducers, createStore } from 'redux'

import { productReducer } from './products'

const rootReducer = combineReducers({
  products: productReducer
})

const store = createStore(rootReducer)

export default store

export type IRootState = ReturnType<typeof store.getState>

export type IAppDispatch = typeof store.dispatch
