import './App.css';
import Header from './components/header/Header';
import { ThemeProvider } from '@material-ui/core';
import theme from './utils/theme';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Main/>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
