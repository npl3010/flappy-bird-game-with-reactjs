import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
import pipeGreen from 'assets/flappy-bird-game/pipe/v2-pipe-green.png';

function Pipes(props) {
    const {
        pipeHeight,
        xPos,
        distanceTopPipeAndBottomPipe,
        distanceLeftPipeAndRightPipe,
        countPairsOfPipes,
        firstPairOfPipesToBeShown
    } = useSelector((state) => state.pipe);

    const generatePipeList = () => {
        const pipeList = [];
        let currentLeftOfFirstDisplayedItem = xPos;
        let indexOfItemBeforeFirstDisplayedItem = (countPairsOfPipes - firstPairOfPipesToBeShown);

        for (let i = 0; i < countPairsOfPipes; i++) {
            let cssLeft = 0;
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
                            height: pipeHeight ? `${pipeHeight}px` : '',
                            top: '0',
                            left: `${cssLeft}px`,
                            transition: cssLeft > 350 ? 'none' : `left 0.5s linear`
                        }}
                    >
                        <img src={pipeGreen} alt='pipe-at-top' />
                    </div>

                    <div
                        className='fb-pipe at-bottom'
                        style={{
                            height: pipeHeight ? `${pipeHeight}px` : '',
                            top: distanceTopPipeAndBottomPipe ? `${pipeHeight + distanceTopPipeAndBottomPipe}px` : '',
                            left: `${cssLeft}px`,
                            transition: cssLeft > 350 ? 'none' : `left 0.5s linear`
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