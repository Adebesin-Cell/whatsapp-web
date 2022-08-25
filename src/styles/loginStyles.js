import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background from '../assets/images/login-background.png';
import Button from '../components/UI/button/Button';
import Input from '../components/UI/input/Input';

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
  overflow: hidden;

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
  transition: all 300ms;
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
  transition: all 300ms;
`;

export const LoginButton = styled(Button)`
  padding: calc(var(--span-xs) + 5px) var(--span-2xl);
  background: ${({ theme }) => theme.loginButton};
  border: 1px solid ${({ theme }) => theme.loginButton};
  box-shadow: 0px 4px 10px rgba(110, 110, 110, 0.07);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--span-xs) + 5px);
  width: 100%;
  margin-top: var(--span-m);
  transition: all 300ms;
`;

export const LoginText = styled.span`
  font-family: 'Plus Jakarta Sans';
  font-size: var(--size-s);
  font-weight: var(--weight-sm);
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({ theme }) => theme.loginText};
  transition: all 300ms;
`;

export const LoginAlternative = styled.div`
  margin-top: var(--span-m);
  padding: 0 calc(var(--span-2xl) + var(--span-xs) + 5px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--span-xs);
  width: 100%;
`;

export const LoginLine = styled.span`
  height: 1px;
  flex: 1 0 43px;
  background: ${({ theme }) => theme.line};
  transition: all 300ms;
`;

export const LoginGroup = styled.div`
  margin-top: var(--span-m);
  width: 100%;
`;

export const LoginLabel = styled.label`
  display: none;
  margin-bottom: var(--span-s);
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-m) + 2px);
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.loginLabel};
  transition: all 300ms;
`;

export const LoginInput = styled(Input)`
  padding: calc(var(--span-xs) + 8px) var(--span-s);
  background: ${({ theme }) => theme.loginInput};
  border-radius: 6px;
  font-family: 'Plus Jakarta Sans';
  font-size: calc(var(--size-s));
  font-weight: var(--weight-sm);
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.loginInputText};
  display: block;
  width: 100%;
  border: 1px solid transparent;
  transition: all 300ms;

  &:focus {
    border: 1px solid ${({ theme }) => theme.submitButton};
    transition: all 300ms;
  }

  &::-webkit-input-placeholder {
    font-family: 'Plus Jakarta Sans';
    font-size: calc(var(--size-s));
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: ${({ theme }) => theme.loginInputPlaceholder};
    transition: all 300ms;
  }
`;

export const LoginButtonSubmit = styled(Button)`
  padding: calc(var(--span-xs) + 8px) var(--span-2xl);
  background: ${({ theme }) => theme.submitButton};
  border: 1px solid ${({ theme }) => theme.submitButton};
  box-shadow: 0px 4px 10px rgba(110, 110, 110, 0.07);
  border-radius: 6px;
  width: 100%;
  font-family: 'Plus Jakarta Sans';
  font-size: var(--size-s);
  font-weight: var(--weight-xlg);
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({ theme }) => theme.whiteFixed};
  transition: all 300ms;
`;

export const LoginCta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Plus Jakarta Sans';
  font-size: var(--size-m);
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
`;

export const LoginCtaText = styled.span`
  color: ${({ theme }) => theme.loginCtaText};
  transition: all 300ms;
  text-align: center;
  font-weight: var(--weight-sm);
  margin-right: 3px;
`;

export const LoginCtaLink = styled(Link)`
  color: ${({ theme }) => theme.loginCtaLink};
  transition: all 300ms;
  text-decoration: none;
  text-align: center;
  font-weight: var(--weight-xlg);
`;
