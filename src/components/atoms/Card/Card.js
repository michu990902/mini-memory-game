import React from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = ({ enabled, fail, handleClick, disableAll }) => {
    const classes = clsx(styles.card, {
        [styles.cardFail]: fail,
        [styles.active]: enabled,
    });

    return (
        <button 
            className={classes}
            onClick={handleClick}
            disabled={disableAll}
        >
            
        </button>
    );
};

export default Card;