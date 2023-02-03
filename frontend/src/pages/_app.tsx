import type { AppProps } from "next/app";
import { Seo } from "components/seo";
import "./globals.scss";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <Seo />
         <Component {...pageProps} />;
      </>
   );
}
