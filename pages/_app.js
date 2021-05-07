import "styles/globals.scss";
import Navbar from "components/Navbar";
import { TextContextProvider } from "components/TextContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TextContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </TextContextProvider>
    </>
  );
}

export default MyApp;
