import React from 'react';
import styles from './Center.module.scss';

const Center = ({ children }) => {
    return (
        <div className={styles.center}>
            {children}
        </div>
    );
};

export default Center;