import React from "react";
import { useAppContext } from "../../arbitar/context/Provider";
import { useNavigate } from "react-router-dom";
import { updateGameMode } from "../../arbitar/context/reducer/move";
import { gameMode } from "../../arbitar/context/reducer/constant";
function Loadeing() {
	const router = useNavigate();
	let _gameMode = localStorage.getItem("game_mode");

	const { appState, dispatch } = useAppContext();

	const widthRef = React.useRef(0);
	const [loadingWidth, setLoadingWidth] = React.useState(2);

	// Loadeing Timer Screen
	React.useEffect(() => {
		// loading bar
		let timer = 0;

		const loader = () => {
			timer = setInterval(() => {
				if (widthRef.current === 94) return;
				widthRef.current = widthRef.current + 1;
				setLoadingWidth(widthRef.current);
				if (widthRef.current === 94) {
					if (_gameMode === "offline") {
						router("/game/ai", { replace: true });
					} else if (_gameMode === "online") {
						if (appState.socket) {
							// redom match queue emit
							appState.socket.onRendomMatch();
							dispatch(updateGameMode(gameMode.online));
							setTimeout(() => {
								dispatch();
								appState.socket.getAnimateMoveFromServer(dispatch);
								appState.socket.getUpdateDetailsFromServer(dispatch);
								appState.socket.onGmaeTime(dispatch);
								appState.socket.onTurnTimer(dispatch);
								appState.socket.onTurnChange(dispatch);
								appState.socket.onGameEnd(dispatch);
								appState.socket.getUserDataFromServer(dispatch);
								appState.socket.getMatchMakeingDataFromServer(dispatch);
								router("/match-make", { replace: true });
							}, 1000);
						}
					}
					clearInterval(timer);
				}
			}, 50);
		};

		const handleLoadPage = () => {
			loader();
		};

		handleLoadPage();

		return () => {
			clearInterval(timer);
		};
	}, [widthRef.current, _gameMode, router]);

	return (
		<main>
			<div className='view_container'>
				<div className='load_wrapper'>
					<div className='load_background'>
						<div className='inner_wrapper'>
							<div className='title'></div>
							<div className='loadeing_bg'>
								<div className='loadeing_text'></div>
								<img
									key={widthRef.current}
									src='/loader/loading_bar.png'
									width={20}
									height={30}
									alt='loader'
									style={{
										width: `${loadingWidth}%`,
										objectFit: "cover",
										height: "60%",
										borderRadius: "10px",
										marginInline: "8px",
										marginBottom: "2px",
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Loadeing;
