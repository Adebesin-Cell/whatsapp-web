import {
  Container,
  Header,
  HeaderAvatar,
  ChatDetails,
  ChatInfo,
  ChatTitle,
  ChatStatus,
  ChatStatusIcon,
  ChatStatusText,
  ChatActions,
  ChatBody,
  ChatSecurity,
  ChatSecurityInfo,
  Footer,
  EmojiButton,
  OptionsButton,
  AudioButton,
  ChatInput,
} from './ChatStyles';
import Button from '../UI/button/Button';
import avatar from '../../assets/images/avatar--20.jpg';
import * as Icon from 'react-feather';
import { ReactComponent as SmileIcon } from '../../assets/svgs/icon-smile.svg';
import { ReactComponent as IconMic } from '../../assets/svgs/icon-mic.svg';

const Chat = function () {
  return (
    <Container>
      <Header>
        <ChatDetails>
          <HeaderAvatar src={avatar} />
          <ChatInfo>
            <ChatTitle>Jane Cooper</ChatTitle>
            <ChatStatus>
              <ChatStatusIcon />
              <ChatStatusText>Online</ChatStatusText>
            </ChatStatus>
          </ChatInfo>
        </ChatDetails>
        <ChatActions>
          <Button className='chat__btn'>
            <Icon.PhoneCall />
          </Button>
          <Button className='chat__btn'>
            <Icon.Video />
          </Button>
          <Button className='chat__btn'>
            <Icon.Search />
          </Button>
          <Button className='chat__btn'>
            <Icon.MoreVertical />
          </Button>
        </ChatActions>
      </Header>
      <ChatBody>
        <ChatSecurity>
          <Icon.Lock />
          <ChatSecurityInfo>
            Messages are end-to-end encrypted. No one outside of this chat, not
            even WhatsApp can read or listen to them click to learn more.
          </ChatSecurityInfo>
        </ChatSecurity>
      </ChatBody>
      <Footer>
        <EmojiButton>
          <SmileIcon />
        </EmojiButton>
        <OptionsButton>
          <Icon.Plus />
        </OptionsButton>
        <ChatInput type='text' placeholder='Say Something...'></ChatInput>
        <AudioButton>
          <IconMic />
        </AudioButton>
      </Footer>
    </Container>
  );
};

export default Chat;
