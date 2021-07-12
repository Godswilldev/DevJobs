import App from "next/app";
import Navbar from "../components/Navbar";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
);

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
