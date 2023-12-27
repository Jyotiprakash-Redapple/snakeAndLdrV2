// import SoundAlert from "../../../audio/alert.mp3";
import React, { useEffect, useState } from "react";

import Board from "../../../components/gameBoard";

import { app } from "../../../config/appConfig";
// import { useAppContext } from "../../../arbitar/context/Provider";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { IoMdHeart } from "react-icons/io";
import { FaHeartBroken } from "react-icons/fa";
// import Popupbox from "../../../components/popup/popupbox";
var soundPlay = true;
function PlayWithPlayer() {
	const [quitGame, setQuitGame] = useState(false);
	const { player, opponent } = app;
	const router = useNavigate();
	// const { appState, dispatch } = useAppContext();
	const handelQuitGame = () => {
		// if (appState.socket) {
		// 	appState.socket.emitDisConnect();
		// }
	};
	/**
	 * function for calculkate progress bar
	 */

	// function updateProgressBar(time) {
	// 	let remainingTime = appState.totalTurnTime - Number(time);
	// 	let percentageComplete = 100 - (remainingTime / appState.totalTurnTime) * 100;
	// 	let strokeDashOffsetValue = 100 - percentageComplete;

	// 	// console.log("Percentage Complete:", percentageComplete, "%");
	// 	// console.log("Remaining Time:", remainingTime, "seconds");

	// 	if (isCloseToOne(percentageComplete, 0.000001)) {
	// 		percentageComplete = 0;
	// 	}
	// 	let colour = percentageComplete < 30 ? "#EF4040" : "#A6FF96";
	// 	return `radial-gradient(closest-side, #bb404000 0px, transparent 77%, transparent 80%), conic-gradient(${colour} ${percentageComplete}%, #0062cc 0deg)`;
	// }

	// Function to check if a number is close to one (within a small epsilon)
	function isCloseToOne(value, epsilon) {
		return Math.abs(1 - value) < epsilon;
	}

	// useEffect(() => {
	// 	if (!appState.socket) {
	// 		router("/internet-disconnect", { replace: true });
	// 	} else {
	// 	}
	// }, []);
	let position = {
		player1: {
			color: "r",
			value: 1,
			score: 0,
			user_name: "test",
			id: "3",
		},
		player2: {
			color: "y",
			value: 2,
			score: 0,
			user_name: "test0",
			id: "1",
		},
	};
	return (
		<main>
			<div className="view_container">
				{/*<--start::play with player wrapper---->*/}
				<div className="play_wrapper">
					{/*<--start::bg screen---->*/}
					<div className="player_bg">
						{/*<--start::timer back ---->*/}

						<span className="global_timer">
							<strong
								style={{
									color: "#FFF",
								}}>
								2.23
							</strong>
						</span>
						<span className="quit_game"></span>
						<span className="sound_game off"></span>
						<span className="pawn_click">
							<div className="role">
								<span className="role_btn"></span>
							</div>
							<div className="turn_role_text">
								<strong
									style={{
										color: "#FFF",
									}}>
									Your Turn
								</strong>
							</div>
						</span>
						{/*<--start::timer back ---->*/}
						{quitGame && (
							<div className="quit_game_bg">
								<div className="quit_game_wrapper">
									<div className="quit_game_text"></div>
									<div className="quit_game_btn">
										{" "}
										<button className="yes" onClick={() => handelQuitGame()}>
											Yes
										</button>
										<button className="no" onClick={() => setQuitGame(false)}>
											No
										</button>
									</div>
								</div>
							</div>
						)}
						<div className="inner_wrapper">
							<div className="top_sesc">
								<div className="left_base">
									<div className="player_name">
										<div className="name">
											<p
												style={{
													color: "#fff",
													fontSize: "10px",
													whiteSpace: "nowrap",
													width: "60%",
													overflow: "hidden",
													textAlign: "center",
													textOverflow: "ellipsis",
												}}>
												Jack
											</p>
										</div>
										<div className="turn_bar_bg">
											<div className="turn_bar_inActive_bg">
												<img
													src="/game_play/time_bar.png"
													width={20}
													height={30}
													alt="loader"
													style={{
														height: "7px",
														// width: `${loadingWidth}%`,
														objectFit: "cover",

														borderRadius: "10px",
													}}
												/>
											</div>
										</div>
									</div>
									<div className="player_profile">
										<img
											src="/logo192.png"
											style={{
												objectFit: "contain",
												width: "90%",
												height: "100%",
												borderRadius: "10px",
											}}></img>
									</div>
								</div>
								<div className="dise_base"></div>
								<div className="right_base">
									<div className="player_profile" style={{ marginLeft: "7px" }}>
										<img
											src="/logo192.png"
											style={{
												objectFit: "contain",
												width: "90%",
												height: "100%",
												borderRadius: "10px",
											}}></img>
									</div>
									<div className="player_name">
										<div className="name">
											<p
												style={{
													color: "#fff",
													fontSize: "10px",
													whiteSpace: "nowrap",
													width: "60%",
													overflow: "hidden",
													textAlign: "center",
													textOverflow: "ellipsis",
												}}>
												Jack
											</p>
										</div>
										<div className="turn_bar_bg">
											<div className="turn_bar_inActive_bg">
												<img
													src="/game_play/time_bar.png"
													width={20}
													height={30}
													alt="loader"
													style={{
														height: "7px",
														// width: `${loadingWidth}%`,
														objectFit: "cover",

														borderRadius: "10px",
													}}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="btm_sesc">
								<div className="gameBoard">
									<Board playerPositions={position} turn={"r"} />
								</div>
							</div>
						</div>
						{/* <Popupbox /> */}
					</div>
					{/*<--end::bg screen---->*/}
				</div>
				{/*<--end::play with player wrapper---->*/}
			</div>
		</main>
	);
}

export default PlayWithPlayer;
