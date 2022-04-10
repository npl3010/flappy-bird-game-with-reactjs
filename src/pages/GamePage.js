import React from 'react';
import FlappyBirdGame from 'components/FlappyBirdGame';
import './GamePage.scss';

function GamePage(props) {
    return (
        <div className="game-page">
            <FlappyBirdGame />
        </div>
    );
}

export default GamePage;