import React from 'react';
import './index.scss';
import pipeGreen from 'assets/flappy-bird-game/pipe/v2-pipe-green.png';

function Pipe(props) {
    return (
        <div className='fb-pipe-wrapper'>
            <div className='fb-pipe at-top'>
                <img src={pipeGreen} alt='pipe-at-top' />
            </div>

            <div className='fb-pipe at-bottom'>
                <img src={pipeGreen} alt='pipe-at-bottom' />
            </div>
        </div>
    );
}

export default Pipe;