import { GitHub, Language } from "@mui/icons-material";
import { featuredProjects } from "../constants/constants";
import Link from "next/link";
import FeaturedProject from "../components/featuredProject";

export default function Home() {
  return (
    <div>
      <div
        className="about"
        style={{
          marginBottom: "4rem",
        }}
      >
        <div>
          <h3
            style={{
              marginBottom: "1.5rem",
            }}
          >
            About Me
          </h3>
          <p>
            I am a software engineer with up to 4 years of professional
            experience in the web development space using Node JS, AWS Services,
            React, Next JS, GraphQL, PostgresQL, Docker and more.
          </p>
          <p
            style={{
              marginTop: "1.5rem",
            }}
          >
            Recently I built{" "}
            <a
              href="https://pully-infra.github.io/pully-landing/"
              target="_blank"
              style={{
                color: "#009999",
                cursor: "pointer",
              }}
            >
              Pully
            </a>
            , a scalable open-source realtime messaging infrastructure that can
            be used to provide in-transit messaging for applications and{" "}
            <a
              href="https://github.com/webhooks-plug" // Change later
              target="_blank"
              style={{
                color: "#e68a00",
                cursor: "pointer",
              }}
            >
              Webplug
            </a>
            , a webhooks as a service infrastructure that can be used to manage
            webhooks for users of a service.
          </p>
        </div>
        <div
          style={{
            marginTop: "1.5rem",
          }}
        >
          I picked up golang recently. Excited to see where that takes me.
        </div>
        <div
          style={{
            marginTop: "1.5rem",
          }}
        >
          <p>
            You can also find me levelling up on my system design ⚙️ skills by
            studying existing systems or learning the guitar 🎸 while I'm off
            work.
          </p>
          <p
            style={{
              marginTop: ".7rem",
            }}
          >
            PS: <i>I also love to read.</i>
          </p>
        </div>
      </div>
      <div
        className="featured-projects"
        style={{
          marginTop: "2.8rem",
        }}
      >
        <div>
          <h3
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1.5rem",
              justifyContent: "space-between",
            }}
          >
            Featured Projects
            <Link href="/projects" passHref>
              <span
                style={{
                  fontSize: ".875rem",
                  // textDecoration: "underline"
                }}
              >
                View All
              </span>
            </Link>
          </h3>
          <div>
            {featuredProjects.map((props) => {
              return <FeaturedProject key={props.title} {...props} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
