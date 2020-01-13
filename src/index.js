import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import shoppingListItemReducer from "./reducers/shoppingListItemReducer";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";

const reduxDevTool =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(shoppingListItemReducer, reduxDevTool);

ReactDOM.render(
	<Provider store={store}>
		<App store={store} />
	</Provider>,
	document.getElementById("root")
);
