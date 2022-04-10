import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import HomePage from "pages/HomePage";
import GamePage from "pages/GamePage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/game">Game</Link>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route path="/home" element={<HomePage />}>
                </Route>
                <Route path="/game" element={<GamePage />}>
                </Route>
                <Route path="/" element={<HomePage />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
