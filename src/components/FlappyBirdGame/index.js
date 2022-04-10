import React from 'react';
import { GameContainer } from './styles';
import './index.scss'
import Bird from './Bird';
import Pipe from './Pipe';
import Foreground from './Foreground';

function FlappyBirdGame(props) {
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