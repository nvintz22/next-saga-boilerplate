import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as T from './action.types'
import { receiveName } from './actions'

const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/api/hello')
    return response.data
}

function* fetchHello() {
    try {
        const data = yield call(fetchData)
        console.log('%c  data:', 'color: #0e93e0;background: #aaefe5;', data);
        yield put(receiveName(data?.name))
    } catch (e) {
        console.log(e)
    }
}

export function* templateSagas() {
    yield all([
        takeLatest(T.REQUEST_NAME, fetchHello)
    ])
}