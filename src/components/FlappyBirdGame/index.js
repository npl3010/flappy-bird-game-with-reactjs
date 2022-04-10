import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame } from 'features/fbgame/fbgameSlice';
import { letBirdFlyDown, letBirdFlyUp } from 'features/fbgame/birdSlice';
import { GameContainer } from './styles';
import Bird from './Bird';
import Pipe from './Pipe';
import Foreground from './Foreground';
import './index.scss'

function FlappyBirdGame(props) {
    const intervalIdForBirdFlyDown = useRef(null);
    const { gameState } = useSelector((state) => state.fbGame);
    const { transitionFlyUpMs } = useSelector((state) => state.bird);
    const dispatch = useDispatch();

    const startPlaying = useCallback(() => {
        dispatch(startGame());
    }, [dispatch]);

    const letBirdFly = useCallback(() => {
        clearInterval(intervalIdForBirdFlyDown.current);
        // The bird flies up:
        dispatch(letBirdFlyUp());
        // The bird flies down:
        intervalIdForBirdFlyDown.current = setInterval(() => {
            dispatch(letBirdFlyDown());
        }, transitionFlyUpMs);
    }, [dispatch, transitionFlyUpMs]);

    useEffect(() => {
        return () => {
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
                <Pipe></Pipe>
                <Foreground></Foreground>
            </GameContainer>
        </div>
    );
}

export default FlappyBirdGame;