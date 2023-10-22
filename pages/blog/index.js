import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import { blogObject } from "../../constants/constants";

const BlogPosts = () => {
  return (
    <div>
      <p
        style={{
          lineHeight: "1rem",
          letterSpacing: "0.02rem",
        }}
        className={`${utilStyles.textColor} ${utilStyles.headingXl}`}
      >
        Blog Posts
      </p>
      <div
        style={{
          marginTop: "3rem",
        }}
      >
        {blogObject.map(({ year, data }) => {
          return (
            <div
              key={year}
              style={{
                marginBottom: "2.5rem",
              }}
            >
              <p
                style={{
                  mb: 3,
                  color: "#535353",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                {year}
              </p>
              {data.map(({ date, title, link }) => {
                return (
                  <div
                    key={title}
                    style={{
                      mb: 2,
                      display: "flex",
                      columnGap: "1.5rem",
                      alignItems: "start",
                      marginBottom: ".5rem",
                    }}
                  >
                    <p
                      style={{
                        color: "#aaa",
                        fontSize: "1.2rem",
                        marginBottom: "0rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {date}
                    </p>
                    <Link href={link}>
                      <div
                        style={{
                          color: "#535353",
                          cursor: "pointer",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                          marginTop: "-.3rem",
                        }}
                      >
                        {title}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPosts;
