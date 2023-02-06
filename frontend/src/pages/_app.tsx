import type { AppProps } from 'next/app';
import { Seo } from 'components/common/seo';
import { AppThemeProvider } from 'styles/theme';
import 'styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
   return (
      <AppThemeProvider>
         <Seo />
         <Component {...pageProps} />
      </AppThemeProvider>
   );
};

export default App;
