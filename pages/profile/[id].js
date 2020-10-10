import Head from "next/head";
import styles from "../../styles/Home.module.css";
// import HomeContainer from "../../components/home/HomeContainer";
import { withRouter } from "next/router";
import ProfileContainer from "../../components/profile/ProfileContainer";

function Profile({ router }) {
  console.log("props", router.query.id);

  const { id } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {id && <ProfileContainer id={id} router={router} />}
    </div>
  );
}
export default withRouter(Profile);
