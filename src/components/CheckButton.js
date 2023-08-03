import React from 'react';
import styles from '../styles/modules/todoItem.module.scss'

function CheckButton({checked, handleCheck}) {
    return (
        <div>
            <input className={styles.checkButton} type='checkbox' checked={checked} onClick={handleCheck}/>
        </div>
    );
}

export default CheckButton;