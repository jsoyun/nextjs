import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import {Top} from "../components/Top";

type NextpageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextpageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Top />
    <h1>fdfd</h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
