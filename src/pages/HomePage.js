import logo from '../logo.svg';
import './HomePage.scss';

function HomePage() {
    return (
        <div className="home-page">
            <div className="home-content-wrapper">
                <div className='homepage-intro'>
                    <div className='homepage-intro__logo-wrapper'>
                        <img className='homepage-intro__logo' src={logo} alt="logo" style={{ width: '80px', height: '80px' }} />
                    </div>
                    <h1 className='homepage-intro__title'>Flappy Bird game</h1>
                    <div className='homepage-intro__text'>A web game made by using <b>ReactJS</b></div>
                    <div className='homepage-intro__text'>(SCSS, styled-components, react-router-dom)</div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
