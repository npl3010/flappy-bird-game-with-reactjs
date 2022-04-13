import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame } from 'features/fbgame/fbgameSlice';
import { letBirdFlyDown, letBirdFlyUp } from 'features/fbgame/birdSlice';
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
    const { transitionFlyUpMs, yPos: birdYPos } = useSelector((state) => state.bird);
    const { xPos: pipeXPos } = useSelector((state) => state.bird);
    const dispatch = useDispatch();

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

    const checkIfShouldEndGame = () => {
        /**
         * Bird's coordinates:
         */
        // birdYPos

        /**
         * Pipes' coordinates:
         */
    };

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
            <GameContainer $customWidth={`${gameWidth}px`} $customHeight={`${gameHeight}px`}>
                <Bird></Bird>
                <Pipes></Pipes>
                <Foreground></Foreground>
            </GameContainer>
        </div>
    );
}

export default FlappyBirdGame;