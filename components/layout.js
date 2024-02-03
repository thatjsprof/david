import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import Typography from "@mui/material/Typography";
import utilStyles from "../styles/utils.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../hoc/colorProvider";
import { LinkedIn } from "@mui/icons-material";

const name = "David Ajayi 👋🏿";
export const siteTitle = "David Ajayi's Blog";
const githubLink = "https://www.github.com/thatjsprof";
const twitterLink = "https://www.twitter.com/aj_davetech";
const linkedinLink = "https://www.linkedin.com/in/ajayi-davetech/";

export default function Layout({ children, blogInfo }) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const router = useRouter();

  const checkActive = (name) => {
    return router.pathname.includes(name);
  };

  const getStyles = (name) => {
    return {
      color: checkActive(name) ? "#fff" : "inherit",
      opacity: checkActive(name) ? 1 : 0.75,
    };
  };

  return (
    <div className={styles.container}>
      <Head>
        <meta component="link" rel="icon" href="/favicon.ico" />
        <meta
          component="meta"
          name="description"
          content="David Ajayi's personal website"
        />
        <meta component="meta" name="og:title" content={siteTitle} />
        <title component="title">{siteTitle}</title>
      </Head>
      <div
        component="header"
        style={{
          backgroundColor:
            theme.palette.mode === "dark" ? "#0d0d0d" : "#006699",
        }}
        className={styles.header}
      >
        <div className={styles.headerInner}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link href="/" passHref>
              <span className={utilStyles.heading2Xl}>{name}</span>
            </Link>
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </div>
          </div>

          <div className={styles.headerLinks}>
            <div className={styles.linksApp}>
              <Link href="/blog">
                <span className={styles.link} style={getStyles("blog")}>
                  Blog
                </span>
              </Link>
              <Link href="/archives">
                <span className={styles.link} style={getStyles("archives")}>
                  Archives
                </span>
              </Link>
              <Link href="/projects">
                <span className={styles.link} style={getStyles("projects")}>
                  Projects
                </span>
              </Link>
              <a
                href="https://drive.google.com/file/d/1ZEGrzWzC5iTgYzEyQ3PorCXZLYp46U7T/view?usp=sharing"
                target="_blank"
              >
                <span className={styles.link} style={getStyles("resume")}>
                  Resume
                </span>
              </a>
            </div>
            <div className={styles.linksSocial}>
              <a href={twitterLink} target="_blank">
                <TwitterIcon className={styles.link} />
              </a>
              <a href={githubLink} target="_blank">
                <GitHubIcon className={styles.link} />
              </a>
              <a href={linkedinLink} target="_blank">
                <LinkedIn className={styles.link} />
              </a>
              <a href="mailto:david.ajayi.anu@gmail.com">
                <MailOutlineIcon className={styles.link} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div component="main" className={styles.main}>
        {blogInfo?.title && <Typography>Title</Typography>}
        {children}
      </div>
      <div component="footer" className={styles.footer}>
        Copyright &copy; 2024 Ajayi David
      </div>
    </div>
  );
}
