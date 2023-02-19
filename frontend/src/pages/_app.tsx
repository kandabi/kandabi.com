import type { AppProps } from 'next/app';
import { Seo } from 'components/common/seo';
import 'styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
   return (
      <>
         <Seo />
         <Component {...pageProps} />
      </>
   );
};

export default App;
