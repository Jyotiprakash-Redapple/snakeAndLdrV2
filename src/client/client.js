import { io } from "socket.io-client";
import { gameInit, updateBoard, getUserData, getMatchMakeingData, gameEnd, turnTimer, gameTimer, turnUpdate, animateBoard } from "../arbitar/context/reducer/move";
class Client {
	constructor(gameSceneInstance) {
		this.gameSceneRefence = gameSceneInstance;
		this.urlParams = new URLSearchParams(window.location.search);
		this.token = this.urlParams.get("auth_token");
		this.baseUrl = "http://16.163.81.210:5003/snlio";
		this.socket = io(this.baseUrl, {
			query: {
				auth_token: this.token,
			},
		});

		this.soundName = null;
		this.user_data = null;

		this._initSocketListeners();
	}
	create() {}
	_initSocketListeners() {
		// console.log('connecting to socket');
		let ref = this;
		this.socket.on("connect", (socket) => {
			console.log("Successfully connected!");
			this.socket.on("user-data", (arg) => {
				this.user_data = arg;
			});
		});
	}
	getUserDataFromServer(dispatch) {
		dispatch(getUserData(this.user_data));
	}
	getMatchMakeingDataFromServer(dispatch) {
		this.socket.on("matchmacking-data", (arg) => {
			dispatch(getMatchMakeingData(arg));
		});
	}
	getGameInitFromServer(dispatch) {
		this.socket.on("game-start", (arg) => {
			dispatch(gameInit({ arg }));
			console.log(arg);
		});
	}
	getUpdateDetailsFromServer(dispatch) {
		this.socket.on("update-details", (arg) => {
			dispatch(updateBoard({ arg }));
		});
	}
	getAnimateMoveFromServer(dispatch) {
		this.socket.on("animate-move-details", (arg) => {
			dispatch(animateBoard({ arg }));
		});
	}
	onGmaeTime(dispatch) {
		this.socket.on("gameTimer", (arg) => {
			dispatch(gameTimer(arg));
		});
	}
	onTurnTimer(dispatch) {
		this.socket.on("turnTimer", (arg) => {
			dispatch(turnTimer(arg));
		});
	}
	onTurnChange(dispatch) {
		this.socket.on("game-updateTurn", (arg) => {
			dispatch(turnUpdate(arg));
		});
	}
	onUpdateMove(cur_board) {
		console.log(cur_board);
		this.socket.emit("update-move", cur_board);
	}
	onAnimateMove(cur_board) {
		this.socket.emit("animate-move", cur_board);
	}
	onUpdateWin(data) {
		console.log("result", data);
		this.socket.emit("update-score", data);
	}
	onRendomMatch() {
		this.socket.emit("queue-join");
	}
	onQueueLeave() {
		console.log("queue leave");
		this.socket.emit("queue-leave");
	}
	emitDisConnect() {
		this.socket.disconnect();
	}
	onGameEnd(dispatch) {
		this.socket.on("game-end", (arg) => {
			dispatch(gameEnd(arg));
		});
	}
}

// let client = new Client();

// export { client as Client };
export default Client;
