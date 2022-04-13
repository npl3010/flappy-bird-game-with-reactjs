import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
import pipeGreen from 'assets/flappy-bird-game/pipe/v2-pipe-green.png';

function Pipes(props) {
    const {
        pipeDataList,
        pipeWidth,
        pipeHeightTop,
        xPos,
        distanceTopPipeAndBottomPipe,
        distanceLeftPipeAndRightPipe,
        countPairsOfPipes,
        firstPairOfPipesToBeShown
    } = useSelector((state) => state.pipe);
    const {
        gameWidth
    } = useSelector((state) => state.fbGame);

    const generatePipeList = () => {
        const pipeList = [];
        let currentLeftOfFirstDisplayedItem = xPos;
        let indexOfItemBeforeFirstDisplayedItem = (countPairsOfPipes - firstPairOfPipesToBeShown);

        for (let i = 0; i < countPairsOfPipes; i++) {
            let cssLeft = 0;
            const topHeightDefault = pipeHeightTop ? pipeHeightTop : 200;
            const topHeight = pipeDataList[i]?.topHeight ? pipeDataList[i].topHeight : topHeightDefault;
            if (i === firstPairOfPipesToBeShown) {
                cssLeft = currentLeftOfFirstDisplayedItem;
            }
            else if (i > firstPairOfPipesToBeShown) {
                currentLeftOfFirstDisplayedItem += distanceLeftPipeAndRightPipe;
                cssLeft = currentLeftOfFirstDisplayedItem;
            } else {
                cssLeft = xPos + (indexOfItemBeforeFirstDisplayedItem * distanceLeftPipeAndRightPipe);
                indexOfItemBeforeFirstDisplayedItem++;
            }

            pipeList.push(
                <div className='fb-pair-of-pipes' key={`${i}`}>
                    <div
                        className='fb-pipe at-top'
                        style={{
                            width: pipeWidth ? `${pipeWidth}px` : '',
                            height: `${topHeight}px`,
                            top: '0',
                            left: `${cssLeft}px`,
                            transition: cssLeft > gameWidth ? 'none' : `left 0.5s linear`
                        }}
                    >
                        <img src={pipeGreen} alt='pipe-at-top' />
                    </div>

                    <div
                        className='fb-pipe at-bottom'
                        style={{
                            width: pipeWidth ? `${pipeWidth}px` : '',
                            height: `auto`,
                            top: distanceTopPipeAndBottomPipe ? `${topHeight + distanceTopPipeAndBottomPipe}px` : '',
                            left: `${cssLeft}px`,
                            transition: cssLeft > gameWidth ? 'none' : `left 0.5s linear`
                        }}
                    >
                        <img src={pipeGreen} alt='pipe-at-bottom' />
                    </div>
                </div>
            );
        }

        return pipeList;
    };

    return (
        <div className='fb-list-of-all-pairs'>
            {generatePipeList()}
        </div>
    );
}

export default Pipes;