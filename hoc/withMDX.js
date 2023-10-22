import { MDXProvider } from "@mdx-js/react";
import SyntaxHighlighter from "../components/syntaxHighlighter";

const components = {
  p: ({ children }) => (
    <p
      style={{
        marginBottom: "1rem",
      }}
    >
      {children}
    </p>
  ),
  h4: ({ children }) => (
    <h4
      style={{
        margin: "2rem 0rem",
      }}
    >
      {children}
    </h4>
  ),
  h3: ({ children }) => (
    <h3
      style={{
        marginTop: "2rem",
        marginBottom: "1rem",
      }}
    >
      {children}
    </h3>
  ),
  h2: ({ children }) => (
    <h2
      style={{
        marginTop: "2rem",
        marginBottom: "1rem",
      }}
    >
      {children}
    </h2>
  ),
  blockquote: ({ children }) => (
    <blockquote
      style={{
        borderLeft: "2px solid #ccc",
        margin: 0,
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
        padding: "0 2em",
      }}
    >
      {children}
    </blockquote>
  ),
  pre: SyntaxHighlighter,
};

const withMDX = (props) => (Component) => {
  return (
    <MDXProvider components={components}>
      <Component {...props} />
    </MDXProvider>
  );
};

export default withMDX;
