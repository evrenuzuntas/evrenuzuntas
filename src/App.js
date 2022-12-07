import { ThemeProvider, } from '@mui/material';
import { getTheme } from './utils/theme';
import './utils/i18n'; // available for all components through context api
import Index from "./pages/Index";

// import AppRouter from './router/AppRouter';
import Header from './components/Header';



function App() {
  return (
    <ThemeProvider theme={getTheme()}>

      <Index></Index>

    </ThemeProvider>
  );
}

export default App;