import FeaturedProject from "../../components/featuredProject";
import { allProjects } from "../../constants/constants";
import { useTheme } from "@mui/material";

const Projects = () => {
  const theme = useTheme();

  return (
    <div>
      <p
        style={{
          fontWeight: 800,
          color: theme.palette.mode === "dark" ? "#aaa" : "#535353",
          fontSize: "2rem",
          margin: "1rem 0",
          lineHeight: "1rem",
          letterSpacing: "0.02rem",
        }}
      >
        Projects
      </p>
      <p
        style={{
          marginTop: "1.5rem",
          marginBottom: "0rem",
        }}
      >
        This is a list of some interesting projects I have built recently or a
        while back.
      </p>
      <p>
        For projects in view, please click this{" "}
        <a
          href="https://projectsboard.vercel.app/"
          target="_blank"
          style={{
            textDecoration: "underline",
          }}
        >
          link
        </a>
      </p>
      <div
        style={{
          marginTop: "3rem",
        }}
      >
        {allProjects.map((props) => {
          return <FeaturedProject key={props.title} {...props} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
