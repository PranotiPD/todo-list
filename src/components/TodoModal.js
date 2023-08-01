import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import styles from '../styles/modules/todomodal.module.scss';
import Button from './Button';
import { Toast } from 'react-hot-toast';

function TodoModal({type, modalOpen, setModalOpen}){
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('Incomplete');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title === ''){
            Toast.error('Please enter a title');
            return;
        } else {
            
        }
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
                <label>
                    Title
                    <input/>
                </label>
                <label>
                    Status
                    <select>
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