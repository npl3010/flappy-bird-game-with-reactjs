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
    const { yPos, rotate, transitionFlyUpMs, transitionRotateMs } = useSelector((state) => state.bird);

    return (
        <div
            className='fb-bird-wrapper'
            style={{
                top: `${yPos}px`,
                transform: `rotate(${rotate}deg)`,
                transition: `top ${transitionFlyUpMs}ms ease, transform ${transitionRotateMs}ms ease`
            }}
        >
            <div className='fb-bird'>
                <BirdImage src={yellowBirdDownFlap} alt=''></BirdImage>
            </div>
        </div>
    );
}

export default Bird;