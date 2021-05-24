import { templateSagas } from './template'
import { all } from 'redux-saga/effects'

function* sagas () {
    yield all([templateSagas()])
}

export default sagas