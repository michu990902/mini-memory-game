import React from 'react';
import styles from './Grid.module.scss';
import PropTypes from 'prop-types';

const Grid = ({ size, children }) => {
    const colStyles = {gridTemplateColumns: `repeat(${size}, 1fr)`};
    return (
        <div className={styles.grid} style={colStyles}>
            {children}
        </div>
    );
};

Grid.propTypes = {
    size: PropTypes.number,
};

Grid.defaultProps = {
    size: 3,
};

export default Grid;