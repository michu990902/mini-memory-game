import React from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import Center from '../atoms/Center/Center';
import Table from '../molecules/Table/Table';
import Button from '../atoms/Button/Button';

const Scoreboard = ({ username, scores }) => {
    let history = useHistory();

    const handleClick= () => {
        history.push('/');
    };
    return (
        <Center>
            {!username.length ? <Redirect to="/"/> : (
                <>
                    <h2>Congratulations {username}!</h2>
                    <br/>
                    <h3>You achieved the result: {(scores[scores.length - 1] || {}).score}</h3>
                    <Table data={scores}/>
                    <Button
                        handleClick={handleClick}
                    >Try Again</Button>
                </>
            )}
        </Center>
    );
};

const mapStateToProps = state => ({
    username: state.app.username,
    scores: state.game.scores,
});

export default connect(mapStateToProps)(Scoreboard);