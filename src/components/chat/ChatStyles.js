import styled from 'styled-components';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

export const Header = styled.div`
  display: flex;
  background: ${({ theme }) => theme.chatHeader};
  padding: var(--span-s);
  border-top-right-radius: 24px;
`;

export const ChatDetails = styled.div`
  display: flex;
  margin-right: auto;
`;

export const HeaderAvatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
`;

export const ChatInfo = styled.div`
  margin-left: calc(var(--span-xs) + 5px);
  display: flex;
  flex-direction: column;
`;

export const ChatTitle = styled.h1`
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-m));
  font-weight: var(--weight-md);
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.chatHeading};
`;

export const ChatStatus = styled.div`
  display: flex;
  align-items: center;
`;

export const ChatStatusIcon = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.online};
`;

export const ChatStatusText = styled.p`
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-xs));
  font-weight: var(--weight-md);
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 4px;
  color: ${({ theme }) => theme.onlineText};
`;

export const ChatActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--span-l);

  .chat__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #130f26;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ChatBody = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  padding: var(--span-s) var(--span-m);

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-track {
    box-shadow: none;
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    height: 10px;
    border: none;
    background: #b0c5c2;
    border-radius: 50px;
    outline: none;
  }
`;

export const ChatSecurity = styled.div`
  padding: calc(var(--span-xs) + 2px) var(--span-s);
  background: #feecdc;
  border-radius: 12px;
  display: flex;
  color: #312e40;
  max-width: 480px;
  margin: 0 auto;
  align-items: center;
  margin-bottom: var(--span-m);

  svg {
    width: 24px;
    height: 24px;
    stroke-width: 1px;
  }
`;

export const ChatSecurityInfo = styled.p`
  margin-left: calc(var(--span-xs) + 5px);
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-xs) - 1px);
  font-weight: var(--weight-sm);
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #312e40;
`;

export const Footer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.chatFooter};
  padding: var(--span-s);
  border-bottom-right-radius: 24px;
  gap: var(--span-s);
  align-items: center;
`;

export const EmojiButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionsButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #130f26;
  border-radius: 8px;
  width: 24px;
  height: 24px;
  color: #128c7e;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ChatInput = styled(Input)`
  flex-grow: 1;
  height: 48px;
  padding: calc(var(--span-xs) + 2px) calc(var(--span-s) + 4px);
  background: #ffffff;
  border-radius: 24px;
  font-family: 'Plus Jakarta Sans';
  font-size: var(--size-s);
  font-weight: var(--weight-sm);
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #8f8f8f;
`;

export const AudioButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #130f26;
`;
