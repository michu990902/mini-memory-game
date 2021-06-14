import React from 'react';
import styles from './AppWrapper.module.scss';

const AppWrapper = ({ children }) => {
    return (
        <div className={styles.appWrapper}>
            {children}
        </div>
    );
};

export default AppWrapper;