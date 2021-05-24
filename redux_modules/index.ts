import { createWrapper } from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { StateType } from 'typesafe-actions'

import reducers from './root-reducers'
import sagas from './root-sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))
const makeStore = () => store;
sagaMiddleware.run(sagas)

export type RootState = StateType<typeof reducers>
export const wrapper = createWrapper(makeStore)