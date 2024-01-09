import React from "react";

import Winner from "./winner";
import { useAppContext } from "../../arbitar/context/Provider";
import { gameStatus } from "../../arbitar/context/reducer/constant";
function Popupbox() {
	const { appState, dispatch } = useAppContext();

	if (appState.status === gameStatus.r_win || appState.status === gameStatus.y_win) {
		return (
			<div className='popup'>
				<Winner />
			</div>
		);
	}

	return null;
}

export default Popupbox;
