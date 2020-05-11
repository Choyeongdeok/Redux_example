import React from 'react';
import {connect} from 'react-redux'
import {changeInput, insert, toggle, remove} from '../modules/todos'
import Todos from '../components/Todos'

//input, todos => state
//changeInput, insert, toggle, remove => action
const TodosContainer = ({input, todos, changeInput, insert, toggle, remove}) => {
    return (
        <Todos
            input = {input}
            todos = {todos}
            onChangeInput = {changeInput}
            onInsert = {insert}
            onToggle = {toggle}
            onRemove = {remove}
        />
    );
};

export default connect(
    //todos 비구조화 할당 state.todos.input => todos.input
    ({todos}) => ({
        input : todos.input,
        todos : todos.todos
    }),
    {
        changeInput,
        insert,
        toggle,
        remove
    }
)(TodosContainer)