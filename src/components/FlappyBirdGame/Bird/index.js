import React from 'react';
import styledComponents from 'styled-components';
import './index.scss';
import yellowBirdDownFlap from 'assets/flappy-bird-game/bird/yellowbird-downflap.png';

export const BirdImage = styledComponents.img`
    width: auto;
    height: auto;
    display: block;
`;

function Bird(props) {
    return (
        <div className='fb-bird-wrapper'>
            <div className='fb-bird'>
                <BirdImage src={yellowBirdDownFlap}></BirdImage>
            </div>
        </div>
    );
}

export default Bird;