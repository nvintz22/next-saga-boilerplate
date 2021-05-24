import * as T from './action.types'

export const fetchHello = () => ({
    type: T.REQUEST_NAME
}) 

export const receiveName = (name: string) => ({
    type: T.RECEIVE_NAME,
    payload: name
})