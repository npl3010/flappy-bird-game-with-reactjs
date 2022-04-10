import React from 'react';
import styledComponents from 'styled-components';
import './index.scss';
import foreground from 'assets/flappy-bird-game/foreground/base.png';

export const ForegroundImage = styledComponents.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-image: url(${foreground});
    background-position: top center;
    background-size: contain;
    background-repeat: repeat;
`;

function Foreground(props) {
    return (
        <div className='fb-foreground-wrapper'>
            <div className='fb-foreground'>
                <ForegroundImage></ForegroundImage>
            </div>
        </div>
    );
}

export default Foreground;