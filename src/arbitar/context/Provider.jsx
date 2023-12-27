import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "../context/reducer/reducer";
import { initGame } from "../context/reducer/constant";
const AppContext = createContext({});
function Provider(props) {
	const [appState, dispatch] = useReducer(reducer, initGame);
	const providerState = {
		appState,
		dispatch,
	};
	return <AppContext.Provider value={providerState}>{props.children}</AppContext.Provider>;
}
export function useAppContext() {
	return useContext(AppContext);
}

export default Provider;
