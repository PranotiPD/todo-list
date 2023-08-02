import React from 'react';
import styles from '../styles/modules/app.module.scss'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function AppContent() {
    const todoList = useSelector((state) => state.todo.todoList);

    return (
        <div className={styles.content__wrapper}>
            {todoList && todoList.length > 0 ? (
                todoList.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            ) : <p>No todos</p>}
        </div>
    );
}

export default AppContent;