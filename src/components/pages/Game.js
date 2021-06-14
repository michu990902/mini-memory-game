import React from 'react';
import GameBoard from "../molecules/GameBoard/GameBoard";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

const Game = ({ username }) => {
    
    return (
        <>
            {!username.length ? <Redirect to="/"/> : (
                <GameBoard/>
            )}
        </>
    );
};

const mapStateToProps = state => ({
    username: state.app.username,
});

export default connect(mapStateToProps)(Game);