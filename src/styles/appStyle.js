import styled from 'styled-components';

export const Container = styled.main`
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--span-l);
  padding-bottom: var(--span-l);

  @media only screen and (max-width: 1140px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

export const AppView = styled.div`
  max-width: 1140px;
  width: 100%;
  height: calc(100vh - 2 * var(--span-l));
  background: ${({ theme }) => theme.view};
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 24px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  transition: background 300ms;

  @media only screen and (max-width: 1140px) {
    height: 100vh;
    border-radius: 0px;
  }
`;
