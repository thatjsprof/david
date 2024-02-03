import "../styles/global.css";
import withMDX from "../hoc/withMDX";
import Layout from "../components/layout";
import { ThemeProvider } from "@mui/material/styles";
import useColorProvider from "../hoc/colorProvider";

function App({ Component, pageProps }) {
  const { Provider, theme } = useColorProvider();

  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <div
          style={{
            color: theme.palette.mode === "dark" ? "#aaa" : "#000",
            backgroundColor:
              theme.palette.mode === "dark" ? "rgb(25, 25, 25)" : "#fff",
          }}
        >
          <Layout>
            <div
              style={{
                width: "100%",
              }}
            >
              {withMDX(pageProps)(Component)}
            </div>
          </Layout>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
