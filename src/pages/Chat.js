import { AppView } from '../styles/appStyle';
import Sidebar from '../components/sidebar/Sidebar';
import Chat from '../components/chat/Chat';

const ChatPage = function (props) {
  return (
    <AppView>
      <Sidebar toggleTheme={props.toggleTheme} />
      <Chat></Chat>
    </AppView>
  );
};

export default ChatPage;
