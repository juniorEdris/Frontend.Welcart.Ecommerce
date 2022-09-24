import { Provider } from "react-redux";
import PrimaryHeader from "../components/PrimaryHeader";
import store from "../store";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="header">
        <PrimaryHeader />
      </div>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
