import { Seo } from 'Components/Common/Seo';
import type { AppProps } from 'next/app';
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
