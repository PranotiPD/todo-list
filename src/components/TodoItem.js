import React, { useState } from 'react';
import styles from '../styles/modules/todoItem.module.scss'
import CheckButton from './CheckButton';
import { MdDelete, MdEdit } from 'react-icons/md';
import TodoModal from './TodoModal';

function TodoItem({todo}) {
    const [updateModalOpen, setUpdateModalOpen] = useState(false);

    const handleDelete = () => {

    }

    const handleUpdate = () => {
        setUpdateModalOpen(true);
    }

    return (
        <div className={styles.item}>
            <div className={styles.todoDetails}>
                <CheckButton />
                <div className={styles.details}>
                    <p className={styles.todoText}>{todo.title}</p>
                    <p className={styles.time}>{todo.time}</p>
                </div>
            </div>
            <div className={styles.todoActions}>
                <div className={styles.delete}
                    onClick={() => handleDelete()}>
                    <MdDelete/>
                </div>
                <div className={styles.update}
                    onClick={() => handleUpdate()}>
                    <MdEdit/>
                </div>
            </div>
            <TodoModal type='update' modalOpen={updateModalOpen} setModalOpen={setUpdateModalOpen} todo={todo}/>
        </div>
        
    );
}

export default TodoItem;