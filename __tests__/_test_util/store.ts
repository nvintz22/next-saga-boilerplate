import createSagaMiddleware from 'redux-saga'
import configureStore from 'redux-mock-store'

const middleware = createSagaMiddleware()
export const mockStore = configureStore([middleware])