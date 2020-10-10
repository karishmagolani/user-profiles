import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomeContainer from "../components/home/HomeContainer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContainer />
    </div>
  );
}

// getInitialProps = async ctx => {
//   return { host: ctx.req.headers.host }
// };
