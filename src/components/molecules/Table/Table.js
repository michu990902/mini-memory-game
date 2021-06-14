import React from 'react';
import styles from './Table.module.scss';

const Table = ({ data }) => (
    <table className={styles.table}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row, id) => (
                <tr key={id}>
                    <td>{row.username}</td>
                    <td>{row.score}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;