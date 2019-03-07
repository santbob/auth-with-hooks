import React from 'react';
import Routes from './Routes'


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
})

const App = () => {

  return (
    <MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Routes/>
    </MuiThemeProvider>
  );
}

export default App
