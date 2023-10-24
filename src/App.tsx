import { GlobalStyle } from '@styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { theme } from '@styles/theme';
import Router from '@routes/Router';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={Router} />
  </ThemeProvider>
);

export default App;
