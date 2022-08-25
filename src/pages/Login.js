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
} from '../styles/loginStyles';
import { ReactComponent as GoogleIcon } from '../assets/svgs/icon-google.svg';

const LoginView = function () {
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
      </LoginForm>
    </Container>
  );
};

export default LoginView;
