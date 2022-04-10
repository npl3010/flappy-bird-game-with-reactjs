import React, { useEffect } from 'react';
import { GameContainer } from './styles';
import Bird from './Bird';
import Pipe from './Pipe';
import Foreground from './Foreground';
import './index.scss'

function FlappyBirdGame(props) {

    const letBirdFly = () => {
        console.log('FLY!');
    }

    useEffect(() => {
        const handleSpacebarPressed = (e) => {
            if (e.keyCode === 32 && e.target === document.body) {
                e.preventDefault();
                letBirdFly();
            }
        };
        document.addEventListener('keypress', handleSpacebarPressed);
    }, []);

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