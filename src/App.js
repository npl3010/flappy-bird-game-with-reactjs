import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import HomePage from "pages/HomePage";
import GamePage from "pages/GamePage";
import './App.scss';
import NavMenu from "components/NavMenu";

function App() {
    return (
        <BrowserRouter>
            <NavMenu></NavMenu>

            <div className="app-wrapper">
                <Routes>
                    <Route path="/home" element={<HomePage />}>
                    </Route>
                    <Route path="/game" element={<GamePage />}>
                    </Route>
                    <Route path="/" element={<HomePage />}>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
