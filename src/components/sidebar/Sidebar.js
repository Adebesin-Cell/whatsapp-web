import {
  Container,
  Header,
  Avatar,
  Btn,
  SearchBar,
  SearchBarBtn,
  SearchInput,
  TabsButton,
  ChatList,
  Search,
  ChatItem,
  ChatLink,
  ChatAvatarBox,
  ChatAvatar,
  ChatDetails,
  ChatInfo,
  ChatTitle,
  ChatDate,
  ChatFooter,
  ChatMessage,
  ChatActions,
  ChatRead,
  ChatUnread,
  NewChat,
} from './SidebarStyles';
import avatar from '../../assets/images/avatar.jpg';
import avatarOne from '../../assets/images/avatar--10.jpg';
import avatarTwo from '../../assets/images/avatar--2.jpg';
import avatarThree from '../../assets/images/avatar--3.jpg';
import avatarFour from '../../assets/images/avatar--4.jpg';
import avatarFive from '../../assets/images/avatar--5.jpg';
import avatarSix from '../../assets/images/avatar--6.jpg';
import avatarSeven from '../../assets/images/avatar--7.jpg';
import avatarEight from '../../assets/images/avatar--8.jpg';
import avatarNine from '../../assets/images/avatar--9.jpg';
import * as Icon from 'react-feather';
import { ReactComponent as StatusIcon } from '../../assets/svgs/icon-status.svg';
import { ReactComponent as MessageIcon } from '../../assets/svgs/icon-message.svg';
import Button from '../UI/button/Button';
import * as Tabs from '@radix-ui/react-tabs';
import './Sidebar.scss';

const Sidebar = function (props) {
  return (
    <Container>
      <Header>
        <Avatar onClick={props.toggleTheme} src={avatar}></Avatar>
        <Button className='status__btn'>
          <StatusIcon />
        </Button>
        <Btn>
          <Icon.ChevronDown />
        </Btn>
      </Header>
      <Search>
        <SearchBar>
          <SearchBarBtn>
            <Icon.Search />
          </SearchBarBtn>
          <SearchInput placeholder='Search or start a new chat' />
        </SearchBar>
      </Search>
      <Tabs.Root defaultValue='chats' className='tabs'>
        <Tabs.List aria-label='tabs' className='tabs__list'>
          <TabsButton value='chats'>Chats</TabsButton>
          <TabsButton value='favourites'>Favourites</TabsButton>
          <TabsButton value='group'>Group</TabsButton>
        </Tabs.List>
      </Tabs.Root>
      <ChatList>
        <ChatItem>
          <ChatLink
            to='/chats/1'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <ChatAvatarBox>
              <ChatAvatar src={avatar} />
            </ChatAvatarBox>
            <ChatDetails>
              <ChatInfo>
                <ChatTitle>Cody Fisher</ChatTitle>
                <ChatDate>05:14pm</ChatDate>
              </ChatInfo>
              <ChatFooter>
                <ChatMessage className='chat__text'>
                  Haha that's terrifying 😂
                </ChatMessage>
                <ChatActions>
                  <ChatUnread>5+</ChatUnread>
                  {/* <ChatRead>
                    <Icon.Check />
                  </ChatRead> */}
                </ChatActions>
              </ChatFooter>
            </ChatDetails>
          </ChatLink>
          <ChatLink
            to='/chats/2'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <ChatAvatarBox>
              <ChatAvatar src={avatarOne} />
            </ChatAvatarBox>
            <ChatDetails>
              <ChatInfo>
                <ChatTitle>Jane Cooper</ChatTitle>
                <ChatDate>07:38 am</ChatDate>
              </ChatInfo>
              <ChatFooter>
                <ChatMessage className='chat__text'>Haha oh man</ChatMessage>
                <ChatActions>
                  {/* <ChatUnread>5+</ChatUnread> */}
                  <ChatRead>
                    <Icon.Check />
                  </ChatRead>
                </ChatActions>
              </ChatFooter>
            </ChatDetails>
          </ChatLink>
          <ChatLink
            to='/chats/3'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <ChatAvatarBox>
              <ChatAvatar src={avatarTwo} />
            </ChatAvatarBox>
            <ChatDetails>
              <ChatInfo>
                <ChatTitle>Floyd Miles</ChatTitle>
                <ChatDate>yesterday</ChatDate>
              </ChatInfo>
              <ChatFooter>
                <ChatMessage className='chat__text'>perfect!</ChatMessage>
                <ChatActions>
                  <ChatUnread>1</ChatUnread>
                  {/* <ChatRead>
                    <Icon.Check />
                  </ChatRead> */}
                </ChatActions>
              </ChatFooter>
            </ChatDetails>
          </ChatLink>
          <ChatLink
            to='/chats/4'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <ChatAvatarBox>
              <ChatAvatar src={avatarThree} />
            </ChatAvatarBox>
            <ChatDetails>
              <ChatInfo>
                <ChatTitle>Marvin McKinney</ChatTitle>
                <ChatDate>yesterday</ChatDate>
              </ChatInfo>
              <ChatFooter>
                <ChatMessage className='chat__text'>
                  omg, this is amazing...
                </ChatMessage>
                <ChatActions>
                  <ChatUnread>2</ChatUnread>
                  {/* <ChatRead>
                    <Icon.Check />
                  </ChatRead> */}
                </ChatActions>
              </ChatFooter>
            </ChatDetails>
          </ChatLink>
          <ChatLink
            to='/chats/5'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <ChatAvatarBox>
              <ChatAvatar src={avatarFour} />
            </ChatAvatarBox>
            <ChatDetails>
              <ChatInfo>
                <ChatTitle>Dianne Russell</ChatTitle>
                <ChatDate>yesterday</ChatDate>
              </ChatInfo>
              <ChatFooter>
                <ChatMessage className='chat__text'>
                  I'll be there in 2 mins
                </ChatMessage>
                <ChatActions>
                  <ChatUnread>3</ChatUnread>
                  {/* <ChatRead>
                    <Icon.Check />
                  </ChatRead> */}
                </ChatActions>
              </ChatFooter>
            </ChatDetails>
          </ChatLink>
          <ChatLink
            to='/chats/6'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <ChatAvatarBox>
              <ChatAvatar src={avatarFive} />
            </ChatAvatarBox>
            <ChatDetails>
              <ChatInfo>
                <ChatTitle>Stephen Grider</ChatTitle>
                <ChatDate>7/23/2022</ChatDate>
              </ChatInfo>
              <ChatFooter>
                <ChatMessage className='chat__text'>Lmao</ChatMessage>
                <ChatActions>
                  <ChatUnread>5+</ChatUnread>
                  {/* <ChatRead>
                    <Icon.Check />
                  </ChatRead> */}
                </ChatActions>
              </ChatFooter>
            </ChatDetails>
          </ChatLink>
          <ChatLink
            to='/chats/7'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <ChatAvatarBox>
              <ChatAvatar src={avatarSix} />
            </ChatAvatarBox>
            <ChatDetails>
              <ChatInfo>
                <ChatTitle>Cody Fisher</ChatTitle>
                <ChatDate>05:14pm</ChatDate>
              </ChatInfo>
              <ChatFooter>
                <ChatMessage className='chat__text'>
                  Haha that's terrifying 😂
                </ChatMessage>
                <ChatActions>
                  <ChatUnread>5+</ChatUnread>
                  {/* <ChatRead>
                    <Icon.Check />
                  </ChatRead> */}
                </ChatActions>
              </ChatFooter>
            </ChatDetails>
          </ChatLink>
          <ChatLink
            to='/chats/8'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <ChatAvatarBox>
              <ChatAvatar src={avatarSeven} />
            </ChatAvatarBox>
            <ChatDetails>
              <ChatInfo>
                <ChatTitle>Cody Fisher</ChatTitle>
                <ChatDate>05:14pm</ChatDate>
              </ChatInfo>
              <ChatFooter>
                <ChatMessage className='chat__text'>
                  Haha that's terrifying 😂
                </ChatMessage>
                <ChatActions>
                  <ChatUnread>5+</ChatUnread>
                  {/* <ChatRead>
                    <Icon.Check />
                  </ChatRead> */}
                </ChatActions>
              </ChatFooter>
            </ChatDetails>
          </ChatLink>
          <ChatLink
            to='/chats/9'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <ChatAvatarBox>
              <ChatAvatar src={avatarEight} />
            </ChatAvatarBox>
            <ChatDetails>
              <ChatInfo>
                <ChatTitle>Cody Fisher</ChatTitle>
                <ChatDate>05:14pm</ChatDate>
              </ChatInfo>
              <ChatFooter>
                <ChatMessage className='chat__text'>
                  Haha that's terrifying 😂
                </ChatMessage>
                <ChatActions>
                  <ChatUnread>5+</ChatUnread>
                  {/* <ChatRead>
                    <Icon.Check />
                  </ChatRead> */}
                </ChatActions>
              </ChatFooter>
            </ChatDetails>
          </ChatLink>
          <ChatLink
            to='/chats/10'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <ChatAvatarBox>
              <ChatAvatar src={avatarNine} />
            </ChatAvatarBox>
            <ChatDetails>
              <ChatInfo>
                <ChatTitle>Cody Fisher</ChatTitle>
                <ChatDate>05:14pm</ChatDate>
              </ChatInfo>
              <ChatFooter>
                <ChatMessage className='chat__text'>
                  Haha that's terrifying 😂
                </ChatMessage>
                <ChatActions>
                  <ChatUnread>5+</ChatUnread>
                  {/* <ChatRead>
                    <Icon.Check />
                  </ChatRead> */}
                </ChatActions>
              </ChatFooter>
            </ChatDetails>
          </ChatLink>
        </ChatItem>
      </ChatList>
      <NewChat>
        <MessageIcon />
      </NewChat>
    </Container>
  );
};

export default Sidebar;
