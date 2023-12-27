let gameStatus = {
	pending: "pending",
	ongoing: "ongoing",
	r_win: "red pawn win",
	y_win: "yellow pawn win",
};

let gameMode = {
	offline: "offline",
	online: "online",
};

// const player1 === red and player2===yellow
/// white === player1 and black ==== player2
let initGame = {
	socket: null,
	position: {},
	turn: "",
	status: gameStatus.pending,
	mode: "",
	advantage: 0,
	turnTime: {}, // turn time | counter | life
	gameTime: 0,
	totalTurnTime: 0,
};

Object.freeze(initGame);

let actionTypes = {
	GET_USER_DATA: "GET_USER_DATA",
	GET_MATCH_MAKEING_DATA: "GET_MATCH_MAKEING_DATA",
	NEW_GAME_INIT: "NEW_GAME_INIT",
	NEW_GAME_INIT_AI: "NEW_GAME_INIT_AI",
	BOARD_UPDATE: "BOARD_UPDATE",
	NEW_MOVE: "NEW_MOVE",
	TURN_CHANGE: "TURN_CHANGE",
	WIN: "WIN",
	NEW_GAME: "NEW_GAME",
	GAME_MODE: "GAME_MODE",
	STATUS: "STATUS",

	NEW_SOCKET_CONNECTION: "NEW_SOCKET_CONNECTION",
};

export { initGame, actionTypes, gameStatus, gameMode };
