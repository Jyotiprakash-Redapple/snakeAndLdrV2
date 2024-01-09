import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./page/splash/Splash.jsx";
import LoadingScrren from "./page/loder/Loader.jsx";
import GamePLayer from "./page/game/player/Player.jsx";
import GameAI from "./page/game/AI/Ai.jsx";
import MatchMake from "./page/matchMake/MatchMake.jsx";

import TopBarProgress from "react-topbar-progress-indicator";
const SuspensedView = ({ children }) => {
	// const baseColor = getCSSVariableValue("--bs-primary");
	TopBarProgress.config({
		barColors: {
			0: "red",
		},
		barThickness: 1,
		shadowBlur: 5,
	});
	return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<SuspensedView>
								<SplashScreen />
							</SuspensedView>
						}
					/>
					<Route
						path='/loader'
						element={
							<SuspensedView>
								<LoadingScrren />
							</SuspensedView>
						}
					/>
					<Route
						path='/game/player'
						element={
							<SuspensedView>
								<GamePLayer />
							</SuspensedView>
						}
					/>
					<Route
						path='/game/ai'
						element={
							<SuspensedView>
								<GameAI />
							</SuspensedView>
						}
					/>
					<Route
						path='/match-make'
						element={
							<SuspensedView>
								<MatchMake />
							</SuspensedView>
						}
					/>
					<Route
						path='*'
						element={
							<SuspensedView>
								<SplashScreen />
							</SuspensedView>
						}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
