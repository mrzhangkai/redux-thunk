import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from './store/index.js'
import { getTodoList, changeInputAction, addItemAction, deleteItemAction} from './store/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.deleteItem = this.deleteItem.bind(this)
    }
    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }
    render() {
        return (
            <TodoListUI
                placeholder={this.state.inputValue}
                value={this.state.value}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
        );
    }
    changeInputValue = (e) => {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange = () => {
        this.setState(store.getState())
    }
    clickBtn = () => {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index) {
        console.log(index)
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList;