import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle themeName="light" />
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
