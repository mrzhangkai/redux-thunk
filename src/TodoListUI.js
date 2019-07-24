import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoListUi = (props) => {
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    value={props.value}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeInputValue} />
                <Button
                    type="primary"
                    onClick={props.clickBtn}
                >Please Add</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={
                        (item, index) => (
                            <List.Item onClick={() => { props.deleteItem(index) }}>
                                {item}
                            </List.Item>
                        )
                    }
                />
            </div>
        </div>
    );
}

export default TodoListUi;