import React, { useState } from 'react';
import styles from '../styles/modules/app.module.scss';
import Button, { SelectButton } from './Button';
import TodoModal from './TodoModal';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilterStatus } from '../slices/todoSlice';

function AppHeader() {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const initialFilterStatus = useSelector((state) => state.todo.todoStatus)
    const [filterStatus, setFilterStatus] = useState(initialFilterStatus);

    const updateFilter = (e) => {
        setFilterStatus(e.target.value);
        dispatch(updateFilterStatus(e.target.value));
    }   

    return (
        <div className={styles.appHeader} >
            <Button variant='primary' onClick={() => setModalOpen(true)}> Add task</Button>
            <SelectButton 
                id="status"
                onChange={(e) => updateFilter(e)}
                value={filterStatus}> 
                <option value='All'>All</option>
                <option value='Complete'>Complete</option>
                <option value='Incomplete'>Incomplete</option>
            </SelectButton>
            <TodoModal type='add' modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </div>
    );
}

export default AppHeader;