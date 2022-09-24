import Head from "next/head";
import { useSelector } from "react-redux";
import ProductCategory from "../components/CategorySection";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import PrimaryHeader from "../components/PrimaryHeader";
import styles from "../styles/Home.module.css";

export default function Home() {
  // const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <div className="">
      <Head>
        <title>Walcart | E-commerce Site</title>
        <meta name="description" content="Walcart ecommerce next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Layout className="">
          <Hero />
          <ProductCategory />
        </Layout>
      </div>
    </div>
  );
}
