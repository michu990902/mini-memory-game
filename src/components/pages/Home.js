import React, { useState, useEffect } from 'react';
import Center from '../atoms/Center/Center';
import TextField from '../atoms/TextField/TextField';
import Button from '../atoms/Button/Button';
import { connect } from 'react-redux';
import { setUsername } from '../../redux/app/appActions';
import { useHistory } from 'react-router-dom';

const Home = ({ username, setUsername }) => {
    let history = useHistory();

    const [name, setName] = useState("");
    const handleName = e => {
        setName(e.target.value);
    }

    const handleSubmit = () => {
        setUsername(name);
        history.push('/game');
    };

    useEffect(() => {
        setName(username);
    }, [username]);

    return (
        <Center>
            <h2>Please enter your name</h2>
            <TextField
                name="name"
                onChange={handleName}
                value={name || ""}
                placeholder="eg. Michael"
            />
            <Button
                handleClick={handleSubmit}
                disabled={!name.length}
            >Start game</Button>
        </Center>
    );
};

const mapStateToProps = state => ({
    username: state.app.username,
});

const mapDispatchToProps = dispatch => ({
    setUsername: username => dispatch(setUsername(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);