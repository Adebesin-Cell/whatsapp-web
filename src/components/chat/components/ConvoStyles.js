import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: var(--span-s);
`;

export const ConvoReceived = styled.div`
  max-width: 65%;
  width: 100%;
  margin-right: auto;
  display: flex;
  justify-content: flex-start;
`;

export const ConvoImageWrapperReceived = styled.div`
  display: flex;
  max-width: 215px;
  width: 100%;
  padding: 4px;
  position: relative;
`;

export const ConvoImageReceived = styled.img`
  display: block;
  width: 100%;
  height: 215px;
  border-radius: 16px 16px 16px 0px;
  object-fit: cover;
`;

export const ConvoTimeReceived = styled.span`
  position: absolute;
  right: var(--span-xs);
  bottom: var(--span-xs);
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-xs) - 2px);
  font-weight: var(--weight-md);
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.whiteFixed};
`;

export const ConvoSent = styled.div`
  max-width: 65%;
  width: 100%;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
`;

export const ConvoImageWrapperSent = styled.div`
  display: flex;
  max-width: 215px;
  width: 100%;
  padding: 4px;
  position: relative;
`;

export const ConvoImageSent = styled.img`
  display: block;
  width: 100%;
  height: 215px;
  border-radius: 16px 16px 0px 16px;
  object-fit: cover;
`;

export const ConvoTimeSent = styled.span`
  position: absolute;
  right: var(--span-xs);
  bottom: var(--span-xs);
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-xs) - 2px);
  font-weight: var(--weight-md);
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.whiteFixed};
`;

export const ConvoTextReceived = styled.p`
  padding: calc(var(--span-xs) + 5px) calc(var(--span-s) + 5px);
  position: relative;
  font-family: 'Plus Jakarta Sans';
  font-size: var(--size-s);
  font-weight: var(--weight-sm);
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  background: ${({ theme }) => theme.whiteFixed};
  display: flex;
  border-radius: 16px 16px 16px 0px;
  color: #010101;
`;

export const ConvoTextTimeReceived = styled.span`
  position: absolute;
  right: var(--span-xs);
  bottom: var(--span-xs);
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-xs) - 2px);
  font-weight: var(--weight-md);
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #09132c;
`;

export const ConvoTextSpan = styled.span`
  max-width: 85%;
`;

export const ConvoTextSent = styled.p`
  padding: calc(var(--span-xs) + 5px) calc(var(--span-s) + 5px);
  position: relative;
  font-family: 'Plus Jakarta Sans';
  font-size: var(--size-s);
  font-weight: var(--weight-sm);
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  background: #d7f8f4;
  display: flex;
  border-radius: 16px 16px 0px 16px;
  color: #010101;
`;

export const ConvoTextTimeSent = styled.span`
  position: absolute;
  right: var(--span-xs);
  bottom: var(--span-xs);
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-xs) - 2px);
  font-weight: var(--weight-md);
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #09132c;
`;
