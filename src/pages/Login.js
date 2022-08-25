import {
  Container,
  LoginImage,
  LoginForm,
  LoginHeading,
  LoginParagraph,
  LoginButton,
  LoginText,
  LoginAlternative,
  LoginLine,
  LoginGroup,
  LoginLabel,
  LoginInput,
  LoginButtonSubmit,
  LoginCta,
  LoginCtaText,
  LoginCtaLink,
} from '../styles/loginStyles';
import { ReactComponent as GoogleIcon } from '../assets/svgs/icon-google.svg';
import { useNavigate } from 'react-router-dom';

const LoginView = function () {
  const navigate = useNavigate();

  const loginHandler = function () {
    navigate('/home', { replace: true });
  };

  return (
    <Container>
      <LoginImage />
      <LoginForm>
        <LoginHeading>Welcome Back</LoginHeading>
        <LoginParagraph>Please sign in to continue</LoginParagraph>
        <LoginButton type='button'>
          <GoogleIcon />
          <LoginText>Sign In with google</LoginText>
        </LoginButton>
        <LoginAlternative>
          <LoginLine />
          <LoginText>or continue with email</LoginText>
          <LoginLine />
        </LoginAlternative>
        <LoginGroup>
          <LoginLabel htmlFor='email'>Email</LoginLabel>
          <LoginInput
            type='email'
            name='email'
            id='email'
            placeholder='username@gmail.com'
            required
          />
        </LoginGroup>
        <LoginGroup>
          <LoginLabel htmlFor='password'>Password</LoginLabel>
          <LoginInput
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            required
          />
        </LoginGroup>
        <LoginGroup>
          <LoginButtonSubmit type='submit' onClick={loginHandler}>
            Sign In
          </LoginButtonSubmit>
        </LoginGroup>
        <LoginGroup>
          <LoginCta>
            <LoginCtaText>A new user? </LoginCtaText>
            <LoginCtaLink to='/register'> Sign Up</LoginCtaLink>
          </LoginCta>
        </LoginGroup>
      </LoginForm>
    </Container>
  );
};

export default LoginView;
