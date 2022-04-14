import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styledComponents from 'styled-components';
import './index.scss';
import yellowBirdDownFlap from 'assets/flappy-bird-game/bird/yellowbird-downflap.png';

const BirdImage = styledComponents.img`
    width: ${props => props.$customWidth}px;
    height: ${props => props.$customHeight}px;
    display: block;
`;

function Bird(props) {
    const {
        stopPlaying
    } = props;
    const {
        xPos: birdXPos,
        yPos: birdYPos,
        rotate,
        transitionFlyUpMs,
        transitionRotateMs,
        birdWidth,
        birdHeight
    } = useSelector((state) => state.bird);
    const {
        xPos: pipeXPos,
        yPos: pipeYPos,
        pipeWidth,
        distanceTopPipeAndBottomPipe,
        distanceLeftPipeAndRightPipe,
        pipeDataList
    } = useSelector((state) => state.pipe);
    const {
        gameState,
        gameHeight
    } = useSelector((state) => state.fbGame);

    useEffect(() => {
        const impediments = pipeDataList.map((d, i) => {
            return {
                xFrom: (pipeXPos + i * distanceLeftPipeAndRightPipe),
                xTo: (pipeXPos + i * distanceLeftPipeAndRightPipe) + pipeWidth,
                yPipe1To: d.topHeight,
                yPipe2From: d.topHeight + distanceTopPipeAndBottomPipe,
            };
        });

        // Check is the bird hits the pipe:
        for (let i = 0; i < impediments.length; i++) {
            if (
                (birdXPos >= impediments[i].xFrom && birdXPos <= impediments[i].xTo)
                &&
                (birdYPos < impediments[i].yPipe1To || birdYPos > impediments[i].yPipe2From)) {
                stopPlaying();
            }
        }

        // Check if the bird falls to the ground:
        const yGround = gameHeight - 80 - birdHeight; // (foregroundHeight = 80)
        if (birdYPos >= yGround) {
            stopPlaying();
        }
    }, [
        birdXPos, birdYPos, pipeXPos, pipeYPos,
        birdWidth, birdHeight, pipeWidth, gameHeight,
        stopPlaying, distanceTopPipeAndBottomPipe, distanceLeftPipeAndRightPipe, pipeDataList
    ]);

    return (
        <div
            className='fb-bird-wrapper'
            style={{
                top: `${birdYPos}px`,
                left: birdXPos !== -1 ? `${birdXPos}px` : '',
                transform: birdXPos === -1 && gameState === 'stopped' ? '' : `rotate(${rotate}deg)`,
                transition: `top ${transitionFlyUpMs}ms ease, transform ${transitionRotateMs}ms ease`
            }}
        >
            <div className='fb-bird'>
                <BirdImage
                    src={yellowBirdDownFlap}
                    alt=''
                    $customWidth={birdWidth ? birdWidth : 'auto'}
                    $customHeight={birdHeight ? birdHeight : 'auto'}
                ></BirdImage>
            </div>
        </div>
    );
}

export default Bird;