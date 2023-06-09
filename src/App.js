import { ThemeProvider, } from '@mui/material';
import { getTheme } from './utils/theme';
import './utils/i18n'; // available for all components through context api
import AppRouter from './router/AppRouter';



function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;