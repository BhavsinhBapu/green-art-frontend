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
import useTranslation from "next-translate/useTranslation";
function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("TradexPro Exchange")}</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
