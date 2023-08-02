import React, { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import styles from '../styles/modules/todomodal.module.scss';
import Button from './Button';
import toast from 'react-hot-toast';
import { v4 as uuid } from 'uuid';
import { useDispatch} from 'react-redux';
import { addTodo, updateTodo } from '../slices/todoSlice';

function TodoModal({type, modalOpen, setModalOpen, todo}){
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('Incomplete');

    useEffect(()=> {
        if(type === 'update' && todo){
            setTitle(todo.title);
            setStatus(todo.status);
        } else {
            setTitle('');
            setStatus('Incomplete');
        }
    },[type, title, modalOpen, todo])

    const handleSubmit = (e) => {
        // console.log(title);
        // console.log(status);
        e.preventDefault();
        if(title === ''){
            toast.error('Please enter a title');
            return;
        } 
        if(title && status){
                if(type === 'add'){
                    dispatch(
                        addTodo({
                            id:uuid(),
                            title,
                            status,
                            time: new Date().toLocaleString(),
                        })
                    )
                }
                if(type === 'update'){
                    if(todo.title !== title || todo.status !== status){
                        dispatch(
                            updateTodo({
                                ...todo, title, status
                            })
                        )
                    }
                }
        }
        setModalOpen(false)
    }
    return(
       modalOpen && (<div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.closeButton} onClick={() => setModalOpen(false)}>
                <MdOutlineClose/>
            </div>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <h1 className={styles.formTitle}>
                    {type === 'add' ? 'ADD' : 'UPDATE'} TODO
                </h1>
                <label htmlFor="title">
                    Title
                    <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <label htmlFor="type">
                    Status
                    <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}>
                        <option>Incomplete</option>
                        <option>Complete</option>
                    </select>
                </label>
            <div className={styles.buttonContainer}>
                <Button type='submit' variant='primary'>
                    {type === 'add' ? 'ADD' : 'UPDATE'}
                </Button>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
            </div>
            </form>
        </div>
       </div> )
    );
}

export default TodoModal;