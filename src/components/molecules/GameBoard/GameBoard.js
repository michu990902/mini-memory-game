import React, { useState, useEffect } from 'react';
import Center from '../../atoms/Center/Center';
import Grid from '../../atoms/Grid/Grid';
import Card from '../../atoms/Card/Card';
import { saveScore } from '../../../redux/game/gameActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const GameBoard = ({ username, saveScore }) => {
    let canSave = true;
    let history = useHistory();

    const gameDelay = 250;
    const showPatternDelay = 750;
    
    const [level, setLevel] = useState(1);
    const [reset, setReset] = useState(0);
    const [lives, setLives] = useState(3);
    const [winPattern, setWinPattern] = useState([~~(Math.random()*8)]);
    const [boardSize, setBoardSize] = useState(3);
    const [userPattern, setUserPattern] = useState([]);

    const [enabled, setEnabled] = useState(-1);
    const [fail, setFail] = useState(false);
    const [disableAll, setDisableAll] = useState(true);
    
    useEffect(() => {
        let mounted = true;
            if(level > 5){
                setTimeout(() => {
                    if(mounted){
                        setBoardSize(4);
                    }
                }, showPatternDelay);
            }
            const tmpWinPattern = new Array(level)
                .fill()
                .map(() => ~~(Math.random()*((boardSize**2)-1)));
    
            setWinPattern(tmpWinPattern);
        return () => mounted = false;
    }, [level, reset]);

    useEffect(() => {
        let mounted = true;
            setTimeout(() => {
                if(mounted){
                    setFail(false);
                    showPattern();
                }
            }, showPatternDelay*2);
        return () => mounted = false;
    }, [winPattern]);

    const showPattern = () => {
        winPattern.forEach((itemId, index) => {
            setTimeout(() => {
                setEnabled(-1);
                setTimeout(() => {
                    setEnabled(itemId);
                }, 250);
            }, showPatternDelay*index);
        });
        setTimeout(() => {
            setEnabled(-1);
            setDisableAll(false);
        }, showPatternDelay*winPattern.length);
    };

    const setMove = id => {
        setDisableAll(true);
        setUserPattern(prev => {
            const currentPattern = [...prev, id];
            const isCorrectMove = currentPattern.map((cm, id) => winPattern[id] === cm).every(i => i);
            const isCorrectPattern = isCorrectMove && currentPattern.length === winPattern.length;

            animateMove(id, isCorrectMove);

            if(isCorrectPattern){
                setLevel(prev => prev+1);
                setFail(false);
                return [];
            }

            if(!isCorrectMove){
                setLives(prev => {
                    if(prev > 1){
                        setReset(prev => prev+1);
                        return prev-1;
                    }else{
                        if(canSave){
                            saveScore(username, level);
                            canSave = false;
                        }
                        setLevel(1);
                        setTimeout(() => {
                            history.push('/scoreboard');
                        }, showPatternDelay)
                        return 3;
                    }
                });
                return [];
            }
            setTimeout(() => {
                setDisableAll(false);
            }, gameDelay)

            return currentPattern;
        });
    };

    const animateMove = (id, isCorrect) => {
        setFail(!isCorrect);
        setEnabled(id);
        setTimeout(() => {
            setEnabled(-1);
        }, gameDelay);
    };
    
    return (
        <Center>
            <h2>Level: {level}, Lives: {lives}</h2>
            <Grid size={boardSize}>
                {new Array(boardSize**2).fill().map((item, id) => <Card 
                    key={id} 
                    enabled={enabled === id}
                    fail={fail}
                    handleClick={() => setMove(id)}
                    disableAll={disableAll}
                />)}
            </Grid>
        </Center>
    );
};

const mapStateToProps = state => ({
    username: state.app.username,
});

const mapDispatchToProps = dispatch => ({
    saveScore: (username, score) => dispatch(saveScore(username, score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);