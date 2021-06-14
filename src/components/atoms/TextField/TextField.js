import React, { useRef, useEffect } from 'react';
import styles from './TextField.module.scss';

const TextField = (props, {focus}) => {
    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
    }, [focus, inputRef]);

    return <input 
        ref={inputRef}
        type="text" 
        className={styles.textField}
        {...props}
    />
};

export default TextField;