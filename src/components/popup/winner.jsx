import React from "react";
import { gameStatus } from "../../arbitar/context/reducer/constant";
import { useAppContext } from "../../arbitar/context/Provider";

function Winner() {
	const { appState, dispatch } = useAppContext();

	if (appState.status === gameStatus.ongoing || appState.status === gameStatus.pending) return null;

	const isWin = appState.status.endsWith("wins");

	const getClassName = () => {
		if (appState.status === gameStatus.r_win) {
			if (appState.position.player2.color === "r") {
				return "defect";
			} else {
				return "wins";
			}
		} else {
			if (appState.status === gameStatus.y_win) {
				if (appState.position.player2.color === "r") {
					return "wins";
				} else {
					return "defect";
				}
			}
		}
	};

	return (
		<>
			{" "}
			<div className={`popup--inner`}>
				<div className={getClassName()}> </div>
			</div>
		</>
	);
}

export default Winner;
