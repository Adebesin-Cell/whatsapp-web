import useDarkMode from './hooks/useDarkMode';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/globalStyles';
import { lightTheme, darkTheme } from './theme/Theme';
import { Container } from './styles/appStyle';

import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles></GlobalStyles>
      <Container className='container'>
        <Routes>
          <Route
            path='/home'
            element={<Home toggleTheme={themeToggler} />}
          ></Route>
          <Route path='chats/:chatid'></Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
