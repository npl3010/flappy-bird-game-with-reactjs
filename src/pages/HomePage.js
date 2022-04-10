import logo from '../logo.svg';
import MyTest from 'components/MyTest/Folder1/Folder2/MyTest';

function HomePage() {
    return (
        <div className="home-page">
            <div className="home-content-wrapper">
                <img src={logo} className="App-logo" alt="logo" style={{ width: '80px', height: '80px' }} />
                <MyTest></MyTest>
            </div>
        </div>
    );
}

export default HomePage;
