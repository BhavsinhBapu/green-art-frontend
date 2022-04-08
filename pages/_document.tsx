import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/style/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="../fav.png" />
        <script src="/static/datafeeds/udf/dist/bundle.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/js/jquery-3.6.0.min.js" />
        <script src="/js/bootstrap.bundle.min.js" />
      </body>
    </Html>
  );
}
