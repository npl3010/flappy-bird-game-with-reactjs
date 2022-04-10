import styledComponents from "styled-components";
import bgDay from 'assets/flappy-bird-game/bg/background-day.png';
// import bgNight from 'assets/flappy-bird-game/bg/background-night.png';

export const GameContainer = styledComponents.div`
    position: relative;
    width: 350px;
    height: 500px;
    background-color: #fff;
    background-image: url(${bgDay});
    background-position: bottom center;
    background-size: contain;
    background-repeat: repeat;
    overflow: hidden;
`;