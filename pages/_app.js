import Head from "next/head";
import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { PageTransition } from "next-page-transitions";
// import "../node_modules/jquery/dist/jquery.slim.min.js";
// import "../node_modules/popper.js/dist/umd/popper.min.js";

// 'jquery/dist/jquery.min.js'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script src="/node_modules/jquery/dist/jquery.slim.min.js"></script>
        <script src="/node_modules/popper.js/dist/umd/popper.min.js"></script>
        <script src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
      </Head>
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
    </div>
  );
}

export default MyApp;
{
  /* <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script> */
}
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
