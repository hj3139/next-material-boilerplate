import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from 'styles/teme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default MyApp;
