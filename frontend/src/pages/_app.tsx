import type { AppProps } from 'next/app';
import { Seo } from 'components/common/Seo';
import 'pages/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Seo />
            <Component {...pageProps} />
        </>
    );
};

export default App;
