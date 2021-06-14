import React from 'react';
import styles from './Button.module.scss';

const Button = ({handleClick, disabled, children}) => {
    return (
        <button
            className={styles.button}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
export default Button;