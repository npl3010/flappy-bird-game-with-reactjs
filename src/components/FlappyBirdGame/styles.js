import styledComponents from "styled-components";
import bgDay from 'assets/flappy-bird-game/bg/background-day.png';
// import bgNight from 'assets/flappy-bird-game/bg/background-night.png';

export const GameContainer = styledComponents.div`
    position: relative;
    background-color: #fff;
    background-image: url(${bgDay});
    background-position: bottom center;
    background-size: contain;
    background-repeat: repeat;
    overflow: hidden;
    width: ${props => props.$customWidth ? props.$customWidth : '350px'};
    height: ${props => props.$customHeight ? props.$customHeight : '500px'};
`;