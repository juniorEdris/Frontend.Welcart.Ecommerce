import Header from "./Header";
import Layout from "./Layout";
import TopLinks from "./TopLinks";

const PrimaryHeader = () => {
  return (
    <Layout>
      <TopLinks />
      <Header />
    </Layout>
  );
};

export default PrimaryHeader;
