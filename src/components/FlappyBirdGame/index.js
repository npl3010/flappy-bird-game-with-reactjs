import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame, stopGame } from 'features/fbgame/fbgameSlice';
import { letBirdFlyDown, letBirdFlyUp, setBirdXPos } from 'features/fbgame/birdSlice';
import { generatePipeList, movePipesToLeft } from 'features/fbgame/pipeSlice';
import { GameContainer } from './styles';
import Bird from './Bird';
import Pipes from './Pipes';
import Foreground from './Foreground';
import './index.scss'

function FlappyBirdGame(props) {
    const timeoutIdToLetBirdFall = useRef(null);
    const intervalIdForBirdFlyDown = useRef(null);
    const { gameState, gameWidth, gameHeight } = useSelector((state) => state.fbGame);
    const { transitionFlyUpMs, birdWidth } = useSelector((state) => state.bird);
    const dispatch = useDispatch();

    useEffect(() => {
        if (gameWidth) {
            dispatch(setBirdXPos((gameWidth / 2) - (birdWidth / 2)));
        }
    }, [dispatch, gameWidth, birdWidth]);

    const stopPlaying = useCallback(() => {
        dispatch(stopGame());
        clearTimeout(timeoutIdToLetBirdFall.current);
        clearInterval(intervalIdForBirdFlyDown.current);
    }, [dispatch]);

    const startPlaying = useCallback(() => {
        dispatch(startGame());
        dispatch(generatePipeList());
    }, [dispatch]);

    const letBirdFly = useCallback(() => {
        clearTimeout(timeoutIdToLetBirdFall.current);
        clearInterval(intervalIdForBirdFlyDown.current);

        // The bird flies up:
        dispatch(letBirdFlyUp());
        dispatch(movePipesToLeft());

        // The bird flies down:
        timeoutIdToLetBirdFall.current = setTimeout(() => {
            dispatch(letBirdFlyDown());
            dispatch(movePipesToLeft());

            intervalIdForBirdFlyDown.current = setInterval(() => {
                dispatch(letBirdFlyDown());
                dispatch(movePipesToLeft());
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

                if (gameState !== 'playing') {
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
            <GameContainer $customWidth={`${gameWidth}px`} $customHeight={`${gameHeight}px`}>
                <Bird stopPlaying={stopPlaying}></Bird>
                <Pipes></Pipes>
                <Foreground></Foreground>
            </GameContainer>
        </div>
    );
}

export default FlappyBirdGame;