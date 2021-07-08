import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "@styles/globals.css";

import { SWRConfig } from "swr";

axios.defaults.baseURL = "http://localhost:3001";

function MyApp({ Component, pageProps }) {
  return (
    //! 6 👇

    <SWRConfig
      value={{
        fetcher: (url: string) => axios(url).then((res) => res.data),
        dedupingInterval: 10000,
      }}
    >
      <div className="p-3">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
