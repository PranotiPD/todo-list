import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

function Button({type, variant, children, ...rest}) {
    return (
        <button type={type === 'submit' ? 'submit' : 'button'} 
            className={getClasses([styles.button, styles[`button--${variant}`]])} {...rest}>
                {children}
        </button>
        
    );
}

function SelectButton({children, id, ...rest}){
    return(
        <select 
        id={id}
        className={getClasses([styles.button, styles.button__select])} {...rest}>
            {children}
        </select>
    );
}

export default Button; 
export {SelectButton};