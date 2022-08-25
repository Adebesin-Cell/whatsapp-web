import styled from 'styled-components';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';
import * as Tabs from '@radix-ui/react-tabs';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background: ${({ theme }) => theme.sidebar};
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  display: flex;
  flex-direction: column;
  padding-top: var(--span-s);
  overflow-y: hidden;
  transition: all 300ms;
  position: relative;

  @media only screen and (max-width: 1140px) {
    border-radius: 0px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: var(--span-m);
  padding-right: var(--span-s);

  .status__btn {
    svg {
      .circle {
        stroke: ${({ theme }) => theme.status};
      }
    }
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  margin-right: var(--span-m);
`;

export const Btn = styled(Button)`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.icon};
`;

export const Search = styled.div`
  padding-left: var(--span-m);
  padding-right: var(--span-s);
`;

export const SearchBar = styled.div`
  margin-top: var(--span-s);
  width: 100%;
  display: flex;
  background: #ffffff;
  border: 1px solid #d1e4e8;
  border-radius: 24px;
  height: 48px;
  border-radius: 24px;
`;

export const SearchBarBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: calc(var(--span-xs) + 5px);
  padding-top: calc(var(--span-xs) + 5px);
  padding-bottom: calc(var(--span-xs) + 5px);
  color: ${({ theme }) => theme.search};

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const SearchInput = styled(Input)`
  flex-grow: 1;
  padding-left: var(--span-xs);
  font-family: 'Plus Jakarta Sans';
  font-size: var(--size-s);
  font-weight: var(--weight-sm);
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.search};

  &::-webkit-input-placeholder,
  &:-ms-input-placeholder {
    font-family: 'Plus Jakarta Sans';
    font-size: var(--size-s);
    font-weight: var(--weight-sm);
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: ${({ theme }) => theme.search};
  }
`;

export const TabsButton = styled(Tabs.Trigger)`
  padding: calc(var(--span-xs) + 2px);
  font-family: 'Plus Jakarta Sans';
  font-size: var(--size-s);
  font-weight: var(--weight-md);
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.whiteFixed};
  cursor: pointer;
  color: ${({ theme }) => theme.tabsButtonText};
  transition: all 300ms;

  &:nth-child(1) {
    border-radius: 12px 0px 0px 12px;
  }

  &:nth-child(3) {
    border-radius: 0px 12px 12px 0px;
  }

  &[data-state='active'] {
    color: ${({ theme }) => theme.whiteFixed};
    background: ${({ theme }) => theme.tabsButton};
  }
`;

export const ChatList = styled.ul`
  overflow-y: scroll;
  flex-grow: 1;
  padding: 0 calc(var(--span-xs) + 8px);
  padding-bottom: var(--span-m);

  &::-webkit-scrollbar {
    opacity: 0;
    visibility: hidden;
    width: 0px;
    height: 0px;
  }
`;

export const ChatItem = styled.li`
  list-style-type: none;
`;

export const ChatLink = styled(NavLink)`
  text-decoration: none;
  padding: 8px 12px;
  display: flex;
  width: 100%;
  border-radius: 8px;
  transition: all 300ms;

  &:hover .chat__text {
    color: ${({ theme }) => theme.chatTextHover};
  }

  &:hover .chat__date {
    color: ${({ theme }) => theme.chatTimeHover};
  }

  &:hover {
    background: ${({ theme }) => theme.chatLinkBg};
  }

  &.active {
    background: ${({ theme }) => theme.chatLinkBg};
  }
`;

export const ChatAvatarBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
`;

export const ChatAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ChatDetails = styled.div`
  flex-grow: 1;
  margin-left: calc(var(--span-xs) + 2px);
`;

export const ChatInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 6px;
`;

export const ChatTitle = styled.h1`
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-m) - 1px);
  font-weight: var(--weight-md);
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.chatTitle};
  transition: all 300ms;
`;

export const ChatDate = styled.h6`
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-xs) - 2px);
  font-weight: var(--weight-sm);
  line-height: 16px;
  letter-spacing: 0em;
  text-align: right;
  color: ${({ theme }) => theme.chatDate};
  transition: all 300ms;
`;

export const ChatFooter = styled.div`
  display: flex;
  margin-top: 8px;
  padding-bottom: 6px;
  justify-content: space-between;
`;

export const ChatMessage = styled.p`
  max-width: 180px;
  overflow: clip;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  text-align: left;
  font-family: 'Plus Jakarta Sans';
  font-size: var(--size-xs);
  font-weight: var(--weight-md);
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.chatMessage};
  opacity: 0.6;
  transition: all 300ms;
`;

export const ChatActions = styled.div`
  display: flex;
  margin-left: auto;
`;

export const ChatUnread = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-xs) - 2px);
  font-weight: var(--weight-xlg);
  line-height: 13px;
  letter-spacing: 0em;
  text-align: center;
  color: #128c7e;
  background: #dff7f4;
`;

export const ChatRead = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2361ff;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const NewChat = styled(Button)`
  position: absolute;
  right: var(--span-s);
  bottom: var(--span-m);
  width: 60px;
  height: 60px;
  background: #128c7e;
  box-shadow: 0px 3.29412px 15.6471px rgba(18, 140, 126, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  svg {
    width: 21px;
    height: 21px;
  }
`;
