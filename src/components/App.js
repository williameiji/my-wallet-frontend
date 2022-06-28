import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalResetStyle from "../assets/css/globalReset.css";
import GlobalStyle from "../assets/css/global.css";
import Login from "../components/loginScreen/Login";
import SignupScreen from "./signupScreen/SignupScreen";

function App() {
	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<SignupScreen />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
