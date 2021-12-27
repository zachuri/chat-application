import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = () => {
	return (
		<ChatEngine
			height="100vh"
			projectID="90f783b7-8373-4431-a451-ccdaa844422c"
			userName=""
			// storing users password
			userSecret=""
		/>
	);
};

export default App;
