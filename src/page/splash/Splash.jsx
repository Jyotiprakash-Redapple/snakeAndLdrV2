import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Client from "../../client/client";
import { newSocketConnect } from "../../arbitar/context/reducer/move";
import { useAppContext } from "../../arbitar/context/Provider";
function Splash() {
	const navigate = useNavigate();
	// navigator.vibrate =
	// 	navigator.vibrate || navigator?.webkitVibrate || navigator?.mozVibrate || navigator?.msVibrate;

	// if (navigator?.vibrate) {
	// 	// vibration API supported
	// 	navigator.vibrate(5000);
	// } else {
	// 	console.log("vibrate not supported this device===>");
	// }
	const { appState, dispatch } = useAppContext();

	const checkQuery = () => {
		const search = window.location.search;
		if (search) {
			const searchParams = new URLSearchParams(search);

			// game mode online
			if (searchParams.get("auth_token") && searchParams.size === 1) {
				let queryVar = searchParams.get("auth_token");
				const socket = new Client();
				dispatch(newSocketConnect({ socket }));
				localStorage.setItem("auth_token", queryVar);
				localStorage.setItem("game_mode", "online");
				navigate("/loader", { replace: true });
			} else {
				// game mode offlien
				if (searchParams.get("mode")) {
					let queryVar = searchParams.get("mode");
					if (queryVar === "offline") {
						let queryVar = searchParams.get("auth_token");
						localStorage.setItem("offline_auth_token", queryVar);
						localStorage.setItem("game_mode", "offline");
						navigate("/loader", { replace: true });
					}
				}
			}
		} else {
			console.log("%cAuthentication Faild", "background-color: white; color: red; font-size: larger; font-weight: 700");
		}
	};

	/* run when component mount in dom */
	useEffect(() => {
		localStorage.removeItem("game_status");
		localStorage.removeItem("socketId");
		localStorage.removeItem("auth_token");
		localStorage.removeItem("game_mode");
		let timer = setTimeout(() => {
			checkQuery();
		}, 1000);
		return () => {
			window.clearTimeout(timer);
		};
	}, []);
	/* run when component mount in dom */
	return (
		<>
			<main>
				<div className='view_container'>
					<div className='splash_wrapper'>
						<div className='splash_background'></div>
						<div className='splash_logo'></div>
					</div>
				</div>
			</main>
		</>
	);
}

export default Splash;
