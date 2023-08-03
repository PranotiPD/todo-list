import React from 'react';
import styles from '../styles/modules/app.module.scss'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function AppContent() {
    const filterStatus = useSelector((state) => state.todo.todoStatus)
    const todoList = useSelector((state) => state.todo.todoList);
    const sortedTodoList = [...todoList];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

    const filteredTodoList = sortedTodoList.filter((todo) => {
        if(filterStatus === 'All'){
            return true;
        } 
        return todo.status === filterStatus
    })

    return (
        <div className={styles.content__wrapper}>
            {filteredTodoList && filteredTodoList.length > 0 ? (
                filteredTodoList.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            ) : <p className={styles.notodos}>No todos</p>}
        </div>
    );
}

export default AppContent;