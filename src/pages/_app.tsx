import axios from "axios";
import { SWRConfig } from "swr";
import "bootstrap/dist/css/bootstrap.css";
import "@styles/globals.css";
axios.defaults.baseURL = "http://localhost:3001";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => axios(url).then((res) => res.data),
        dedupingInterval: 5000,
      }}
    >
      <div className="p-3">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
