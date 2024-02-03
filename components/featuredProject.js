import { GitHub, Language, VideoCameraFront } from "@mui/icons-material";
import { useTheme } from "@mui/material";

const FeaturedProject = ({
  title,
  description,
  github,
  stack,
  website,
  image,
  video,
}) => {
  const theme = useTheme();
  return (
    <div
      key={title}
      style={{
        gap: "1rem",
        display: "flex",
        alignItems: "start",
        borderRadius: "5px",
        marginBottom: "1.5rem",
        border: `1px solid ${
          theme.palette.mode === "dark" ? "#4d4d4d" : "#ddd"
        }`,
        padding: "1.5rem 1rem .7rem 1.3rem",
      }}
    >
      <img src={`images/${image}`} width="60px" />
      <div>
        <h4>{title}</h4>
        <p
          style={{
            lineHeight: "1.4rem",
          }}
        >
          {description}
        </p>
        <p
          style={{
            marginTop: "1rem",
            fontSize: ".8rem",
            fontStyle: "italic",
          }}
        >
          <b>Stack:</b> {stack}
        </p>
        <div
          style={{
            gap: ".7rem",
            display: "flex",
            marginTop: "1rem",
            alignItems: "center",
          }}
        >
          {github && (
            <a href={github} target="_blank">
              <GitHub
                sx={{
                  color: "#808080",
                  cursor: "pointer",
                }}
              />
            </a>
          )}
          {website && (
            <a href={website} target="_blank">
              <Language
                sx={{
                  color: "#808080",
                  cursor: "pointer",
                }}
              />
            </a>
          )}
          {video && (
            <a href={video} target="_blank">
              <VideoCameraFront
                sx={{
                  color: "#808080",
                  cursor: "pointer",
                }}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
