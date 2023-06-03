import * as React from 'react';
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from './pages/modules/styles/ThemeProvider';
import App from './App';

function Root() {
    return (
      <>
          <ThemeProvider>
            <CssBaseline>
                <App />
            </CssBaseline>
          </ThemeProvider>
      </>
    );
  }
  
  export default Root;