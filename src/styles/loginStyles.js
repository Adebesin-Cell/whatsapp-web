import styled from 'styled-components';
import background from '../assets/images/login-background.png';
import Button from '../components/UI/button/Button';

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  height: calc(100vh - 2 * var(--span-l));
  background: ${({ theme }) => theme.login};
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  transition: background 300ms;

  @media only screen and (max-width: 1140px) {
    height: 100vh;
    border-radius: 0px;
  }
`;

export const LoginImage = styled.div`
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;

  @media only screen and (max-width: 1140px) {
    border-radius: 0px;
  }
`;

export const LoginForm = styled.form`
  padding: calc(var(--span-2xl) + var(--span-s));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginHeading = styled.h1`
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-xl));
  font-weight: var(--weight-md);
  line-height: 45px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({ theme }) => theme.loginHeading};
`;

export const LoginParagraph = styled.p`
  margin-top: 3px;
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-m));
  font-weight: var(--weight-sm);
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({ theme }) => theme.loginHeading};
`;

export const LoginButton = styled(Button)`
  padding: calc(var(--span-xs) + 5px) var(--span-2xl);
  background: ${({ theme }) => theme.loginButton};
  border: 1px solid #f6f6f6;
  box-shadow: 0px 4px 10px rgba(110, 110, 110, 0.07);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--span-xs) + 5px);
  width: 100%;
  margin-top: var(--span-m);
`;

export const LoginText = styled.span`
  font-family: 'Plus Jakarta Sans';
  font-size: var(--size-s);
  font-weight: var(--weight-sm);
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #1e1e1e;
`;
