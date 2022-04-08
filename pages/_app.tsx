import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../state/store";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/public/style/app.css";
import "/public/style/total.css";
import "/public/style/responsive.css";

import Head from "next/head";

// import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "layout/index";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TradexPro Exchange</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      {/* <Script src="/js/jquery-3.6.0.min.js" />
      <Script src="/js/bootstrap.bundle.min.js" /> */}
    </>
  );
}

export default MyApp;
