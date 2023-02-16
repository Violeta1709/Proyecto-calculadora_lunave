import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const basicTheme = createTheme({

});
 function App({ Component, pageProps }) {

  return (
  <ThemeProvider theme={basicTheme}>
      <CssBaseline/>
   <Component {...pageProps} />
</ThemeProvider>
  )
}
export default App