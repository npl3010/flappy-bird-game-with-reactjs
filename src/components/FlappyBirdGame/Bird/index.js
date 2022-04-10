import React from 'react';
import { useSelector } from 'react-redux';
import styledComponents from 'styled-components';
import './index.scss';
import yellowBirdDownFlap from 'assets/flappy-bird-game/bird/yellowbird-downflap.png';

export const BirdImage = styledComponents.img`
    width: auto;
    height: auto;
    display: block;
`;

function Bird(props) {
    const { yPos, transitionFlyUpMs } = useSelector((state) => state.bird);

    return (
        <div
            className='fb-bird-wrapper'
            style={{
                top: `${yPos}px`,
                transitionDuration: `${transitionFlyUpMs}ms`
            }}
        >
            <div className='fb-bird'>
                <BirdImage src={yellowBirdDownFlap} alt=''></BirdImage>
            </div>
        </div>
    );
}

export default Bird;