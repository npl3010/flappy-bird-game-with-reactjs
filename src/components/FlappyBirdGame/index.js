import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame } from 'features/fbgame/fbgameSlice';
import { letBirdFlyDown, letBirdFlyUp } from 'features/fbgame/birdSlice';
import { movePipeToLeft } from 'features/fbgame/pipeSlice';
import { GameContainer } from './styles';
import Bird from './Bird';
import Pipes from './Pipes';
import Foreground from './Foreground';
import './index.scss'

function FlappyBirdGame(props) {
    const timeoutIdToLetBirdFall = useRef(null);
    const intervalIdForBirdFlyDown = useRef(null);
    const { gameState } = useSelector((state) => state.fbGame);
    const { transitionFlyUpMs } = useSelector((state) => state.bird);
    const dispatch = useDispatch();

    const startPlaying = useCallback(() => {
        dispatch(startGame());
    }, [dispatch]);

    const letBirdFly = useCallback(() => {
        clearTimeout(timeoutIdToLetBirdFall.current);
        clearInterval(intervalIdForBirdFlyDown.current);

        // The bird flies up:
        dispatch(letBirdFlyUp());
        dispatch(movePipeToLeft());

        // The bird flies down:
        timeoutIdToLetBirdFall.current = setTimeout(() => {
            dispatch(letBirdFlyDown());
            dispatch(movePipeToLeft());

            intervalIdForBirdFlyDown.current = setInterval(() => {
                dispatch(letBirdFlyDown());
                dispatch(movePipeToLeft());
            }, 150);
        }, transitionFlyUpMs);

    }, [dispatch, transitionFlyUpMs]);

    useEffect(() => {
        return () => {
            clearTimeout(timeoutIdToLetBirdFall.current);
            clearInterval(intervalIdForBirdFlyDown.current);
        };
    }, [intervalIdForBirdFlyDown]);

    useEffect(() => {
        const handleSpacebarPressed = (e) => {
            if (e.keyCode === 32 && e.target === document.body) {
                e.preventDefault();
                letBirdFly();

                if (gameState === 'stopped') {
                    startPlaying();
                }
            }
        };

        document.addEventListener('keypress', handleSpacebarPressed);

        return () => {
            document.removeEventListener('keypress', handleSpacebarPressed);
        };
    }, [gameState, startPlaying, letBirdFly]);

    return (
        <div className='flappy-bird-game'>
            <GameContainer>
                <Bird></Bird>
                <Pipes></Pipes>
                <Foreground></Foreground>
            </GameContainer>
        </div>
    );
}

export default FlappyBirdGame;