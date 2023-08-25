import type { AppProps } from 'next/app';
import 'styles/globals.scss';
import { Seo } from 'components/common/seo';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Seo />
            <Component {...pageProps} />
        </>
    );
};

export default App;
