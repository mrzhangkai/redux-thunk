import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'
export const getTodoList = () => {
    return (dispatch) => {
        axios.post('https://www.easy-mock.com/mock/5d3578a690fa2835de1dedbf/cityList/todo').then((res) => {
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}
export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
export const addItemAction = () => ({
    type: ADD_ITEM
})
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})
export const getListAction = (data) => ({
    type: GET_LIST,
    data
})