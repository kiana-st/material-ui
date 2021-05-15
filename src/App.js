import './App.css';
import Header from './components/header/Header';
import { ThemeProvider } from '@material-ui/core';
import theme from './utils/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
