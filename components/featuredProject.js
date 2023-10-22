import { GitHub, Language } from "@mui/icons-material";

const FeaturedProject = ({ title, description, github, website, image }) => {
  return (
    <div
      key={title}
      style={{
        gap: "1rem",
        display: "flex",
        alignItems: "start",
        borderRadius: "5px",
        marginBottom: "1.5rem",
        border: "1px solid #ddd",
        padding: "1rem 1rem .7rem 1rem",
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
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
