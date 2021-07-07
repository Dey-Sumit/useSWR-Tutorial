import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "@styles/globals.css";

axios.defaults.baseURL = "http://localhost:3001";

function MyApp({ Component, pageProps }) {
  return (
    <div className="p-3">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
