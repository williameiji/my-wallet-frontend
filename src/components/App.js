import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalResetStyle from "../assets/css/globalReset.css";
import GlobalStyle from "../assets/css/global.css";
import Login from "../components/loginScreen/Login";
import SignupScreen from "./signupScreen/SignupScreen";
import UserContext from "./context/UserContext";
import HistoryScreen from "./historyScreen/HistoryScreen";

function App() {
	const [userInfo, setUserInfo] = useState("");

	return (
		<UserContext.Provider value={{ setUserInfo, userInfo }}>
			<GlobalResetStyle />
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<SignupScreen />} />
					<Route path="/history" element={<HistoryScreen />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App;
