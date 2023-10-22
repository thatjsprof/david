import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import Typography from "@mui/material/Typography";
import utilStyles from "../styles/utils.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useRouter } from "next/router";

const name = "David Ajayi";
export const siteTitle = "David Ajayi Blog";
const githubLink = "https://www.github.com/thatjsprof";
const twitterLink = "https://www.twitter.com/aj_davetech";

export default function Layout({ children, blogInfo }) {
  const router = useRouter();
  console.log(router);

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
          content="Learn how to build a personal website using Next.js"
        />
        <meta component="meta" name="og:title" content={siteTitle} />
        <title component="title">{siteTitle}</title>
      </Head>
      <div component="header" className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" passHref>
            <span className={utilStyles.heading2Xl}>{name}</span>
          </Link>
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
              <Link href="#">
                <span className={styles.link} style={getStyles("projects")}>
                  Resume
                </span>
              </Link>
            </div>
            <div className={styles.linksSocial}>
              <Link href={twitterLink} passHref>
                <span>
                  <TwitterIcon className={styles.link} />
                </span>
              </Link>
              <Link href={githubLink} passHref>
                <span>
                  <GitHubIcon className={styles.link} />
                </span>
              </Link>
              <Link href="mailto:david.ajayi.anu@gmail.com" passHref>
                <span>
                  <MailOutlineIcon className={styles.link} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div component="main" className={styles.main}>
        {blogInfo?.title && <Typography>Title</Typography>}
        {children}
      </div>
      <div component="footer" className={styles.footer}>
        Copyright &copy; 2023 Ajayi David
      </div>
    </div>
  );
}
