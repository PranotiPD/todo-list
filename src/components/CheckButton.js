import React from 'react';
import styles from '../styles/modules/todoItem.module.scss'

function CheckButton(props) {
    return (
        <div>
            <input className={styles.checkButton} type='checkbox'/>
        </div>
    );
}

export default CheckButton;