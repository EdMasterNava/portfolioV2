import * as React from 'react';
import { 
    createTheme as createMuiTheme, 
    ThemeProvider as MuiThemeProvider
} from '@mui/material/styles';

import { createComponents } from './Components';
import { createPalette } from './Palette';
import { createTypography } from './Typography';

function createTheme(mode) {
  return createMuiTheme({
    palette: createPalette(mode),
    components: createComponents(mode),
    typography: createTypography()
  });
}

const ThemeContext = React.createContext(() => {});
export const useThemeContext = () => {
    return React.useContext(ThemeContext);
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(() => createTheme('light'));

  const toggleTheme = React.useCallback(() => {
    setTheme((theme) =>{
        return createTheme(theme.palette.mode === 'light' ? 'dark' : 'light');   
    });
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
        <ThemeContext.Provider value={toggleTheme}>
            { children }
        </ThemeContext.Provider>
    </MuiThemeProvider>
  );
}

export { ThemeProvider };
