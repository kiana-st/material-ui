import './App.css';
import Header from './components/header/Header';
import { ThemeProvider } from '@material-ui/core';
import theme from './utils/theme';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Main/>
      </ThemeProvider>
    </div>
  );
}

export default App;
