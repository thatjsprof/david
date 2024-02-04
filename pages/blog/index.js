import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import { blogObject, mainTags } from "../../constants/constants";
import { useTheme } from "@mui/material";
import { useState } from "react";

const BlogPosts = () => {
  const theme = useTheme();
  const [currentTag, setCurrentTag] = useState("all");
  const [hovered, setHovered] = useState({});

  const handleMouseEnter = (slug) => {
    setHovered((prev) => ({ ...prev, [slug]: true }));
  };

  const handleMouseLeave = (slug) => {
    setHovered((prev) => ({ ...prev, [slug]: false }));
  };

  const handleClick = (slug) => {
    setCurrentTag(slug);
  };

  return (
    <div>
      <p
        style={{
          lineHeight: "1rem",
          letterSpacing: "0.02rem",
          color: theme.palette.mode === "dark" ? "#aaa" : "#535353",
        }}
        className={`${utilStyles.headingXl}`}
      >
        Blog Posts
      </p>
      <div
        style={{
          marginTop: "2.5rem",
          gap: ".8rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {mainTags(theme.palette.mode === "dark").map(
          ({ title, slug, color, bgColor }) => {
            return (
              <div
                key={slug}
                onClick={() => handleClick(slug)}
                onMouseEnter={() => handleMouseEnter(slug)}
                onMouseLeave={() => handleMouseLeave(slug)}
                style={{
                  color,
                  cursor: "pointer",
                  padding: ".1rem 1rem",
                  borderRadius: "7px",
                  border: `1px solid ${color}`,
                  backgroundColor:
                    hovered?.[slug] || currentTag === slug
                      ? bgColor
                      : "transparent",
                }}
              >
                {title}
              </div>
            );
          }
        )}
      </div>
      <div
        style={{
          marginTop: "3rem",
        }}
      >
        {blogObject.map(({ year, data }) => {
          const validData =
            currentTag === "all"
              ? data
              : data.filter((entry) => entry.tag === currentTag);

          return validData.length > 0 ? (
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
              {validData.map(({ date, title, link }) => {
                return (
                  <div
                    key={title}
                    style={{
                      mb: 2,
                      display: "flex",
                      columnGap: ".3rem",
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
                        minWidth: "6rem",
                      }}
                    >
                      {date}
                    </p>
                    <Link href={link}>
                      <div
                        style={{
                          color:
                            theme.palette.mode === "dark" ? "#aaa" : "#535353",
                          cursor: "pointer",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                          // marginTop: "-.3rem",
                        }}
                      >
                        {title}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPosts;
