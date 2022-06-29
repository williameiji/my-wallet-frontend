import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalResetStyle from "../assets/css/globalReset.css";
import GlobalStyle from "../assets/css/global.css";
import Login from "../components/loginScreen/Login";
import SignupScreen from "./signupScreen/SignupScreen";
import UserContext from "./context/UserContext";
import HistoryScreen from "./historyScreen/HistoryScreen";
import InputScreen from "./inputScreen/InputScreen";
import OutputScreen from "./outputScreen/OutputScreen";

function App() {
	const [userInfo, setUserInfo] = useState("");
	const [controlHistory, setControlHistory] = useState(false);

	return (
		<UserContext.Provider
			value={{ setUserInfo, userInfo, setControlHistory, controlHistory }}
		>
			<GlobalResetStyle />
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<SignupScreen />} />
					<Route path="/history" element={<HistoryScreen />} />
					<Route path="/newinput" element={<InputScreen />} />
					<Route path="/newoutput" element={<OutputScreen />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App;
