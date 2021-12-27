import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
	return (
		<ChatEngine
			height="100vh"
			projectID="90f783b7-8373-4431-a451-ccdaa844422c"
			userName="johnjohn"
			userSecret="123123"
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
