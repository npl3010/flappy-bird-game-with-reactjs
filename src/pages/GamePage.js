import React from 'react';
import FlappyBirdGame from 'components/FlappyBirdGame';
import './GamePage.scss';
import { useSelector } from 'react-redux';

function GamePage(props) {
    const { value } = useSelector((state) => state.bird);
    console.log(value);

    return (
        <div className="game-page">
            <FlappyBirdGame />
        </div>
    );
}

export default GamePage;