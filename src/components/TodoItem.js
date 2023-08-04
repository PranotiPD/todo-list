import React, { useEffect, useState } from 'react';
import styles from '../styles/modules/todoItem.module.scss'
import CheckButton from './CheckButton';
import { MdDelete, MdEdit } from 'react-icons/md';
import TodoModal from './TodoModal';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import { getClasses } from '../utils/getClasses';

function TodoItem({todo}) {
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if(todo.status === 'Complete'){
            setChecked(true);
        } else {
            setChecked(false);
        }
    },[todo.status])

    const handleDelete = () => {
        dispatch(deleteTodo({...todo}))
    }

    const handleUpdate = () => {
        setUpdateModalOpen(true);
    }

    const handleCheck = () => {
        setChecked(!checked)
        dispatch(updateTodo({
            ...todo, status : checked ? 'Incomplete' : 'Complete'
        }))
    }

    return (
        <div className={styles.item}>
            <div className={styles.todoDetails}>
                <CheckButton checked={checked} handleCheck={handleCheck} />
                <div className={styles.details}>
                    <p 
                    className={getClasses([
                    styles.todoText,
                    todo.status === 'Complete' && styles['todoText--completed'],
                    ])}>
                        {todo.title}
                    </p>
                    <div className={styles.timeAndStatus}>
                        <p className={styles.time}>{todo.time}</p>
                        <p className={styles.time}>{todo.updatedStatus}</p>
                    </div>
                    
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