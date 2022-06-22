import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
// import { SesstionProvider } from "next-auth/react";

type NextpageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextpageWithLayout;
};

function MyApp({ Component, pageProps }: AppProps) {
  // const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      {/* <SesstionProvider session={pageProps.session}> */}
      <h1>공통으로 들어간곳</h1>
      <Component {...pageProps} />
      {/* </SesstionProvider> */}
    </>
  );
}

export default MyApp;
