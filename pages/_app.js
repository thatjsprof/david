import "../styles/global.css";
import withMDX from "../hoc/withMDX";
import Layout from "../components/layout";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <div
        style={{
          width: "100%",
        }}
      >
        {withMDX(pageProps)(Component)}
      </div>
    </Layout>
  );
}

export default App;
