import styled from 'styled-components';

export const HomeView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HomeIllustration = styled.img`
  object-fit: cover;
`;

export const HomeHeading = styled.h1`
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-l) + 3px);
  font-weight: var(--weight-md);
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: var(--span-s);
  max-width: 300px;
  color: ${({ theme }) => theme.introHeading};
`;

export const HomeParagraph = styled.p`
  margin-top: var(--span-s);
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-s));
  font-weight: var(--weight-md);
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({ theme }) => theme.introParagraph};
  max-width: 490px;
  padding: 0 var(--span-m);
`;
