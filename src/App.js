import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./page/splash/Splash.jsx";
import LoadingScrren from "./page/loder/Loader.jsx";
import GamePLayer from "./page/game/player/Player.jsx";
import GameAI from "./page/game/AI/Ai.jsx";
import MatchMake from "./page/matchMake/MatchMake.jsx";
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<SplashScreen />} />
					<Route path="/loader" element={<LoadingScrren />} />
					<Route path="/game/player" element={<GamePLayer />} />
					<Route path="/game/ai" element={<GameAI />} />
					<Route path="/match-make" element={<MatchMake />} />
					<Route path="*" element={<SplashScreen />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
