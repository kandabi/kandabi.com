import type { AppProps } from 'next/app';
import { Seo } from 'components/common/seo';
import { GlobalStyles } from 'styles/globals';
import { AppThemeProvider } from 'styles/theme';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <AppThemeProvider>
         <Seo />
         <GlobalStyles />
         <Component {...pageProps} />
      </AppThemeProvider>
   );
}
