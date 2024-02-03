export const archivesObject = [
  {
    year: "2022",
    data: [
      {
        date: "Oct 31",
        title: "Compound Component Pattern in React",
        link: "/blog/compound-pattern",
        tag: "react",
      },
      // {
      //   date: "Nov 01",
      //   title: "Render Props Pattern in React",
      //   link: "/blog/advanced-react-components/compound-pattern",
      // },
    ],
  },
];

export const blogObject = [
  {
    year: "2024",
    data: [
      {
        date: "Jan 30",
        title:
          "How to Generate and download a PDF document in a Next.JS application",
        link: "/blog/download-pdf-next-app",
        tag: "next",
      },
    ],
  },
  {
    year: "2023",
    data: [
      {
        date: "Dec 07",
        title:
          "Leveraging lambda layers to share dependencies across multiple lambda functions",
        link: "/blog/lambda-layers",
        tag: "aws",
      },
      {
        date: "Dec 06",
        title: "Deploy a CI/CD pipeline using AWS Codepipeline (Script)",
        link: "/blog/aws-codepipeline",
        tag: "aws",
      },
      {
        date: "Nov 28",
        title:
          "Using Prisma-Appsync to provision appsync resolvers in under 10 minutes",
        link: "/blog/prisma-appsync",
        tag: "graphql",
      },
      {
        date: "Jul 29",
        title: "How to use GraphQL and Apollo Client in a React Application",
        link: "/blog/graphql-apollo-in-react",
        tag: "graphql",
      },
      {
        date: "Mar 10",
        title: "How to use Redux Saga in a React application",
        link: "/blog/redux-saga",
        tag: "redux",
      },
    ],
  },
  {
    year: "2022",
    data: [...archivesObject?.[0].data],
  },
];

export const featuredProjects = [
  {
    title: "Webplug",
    description:
      "Webplug is a webhooks as a service infrastructure that allows you to manage webhooks for users of your application. You can view how many times a message was retried, manually resend a message or which endpoints are failing. The infrastructure is deployable to AWS using the webplugcli app.",
    image: "logo.png",
    stack:
      "AWS Lambda, AWS Simple Notification Service, PostgreSQL, Cloudwatch Logs, oclif, shadcn/ui, tailwind. Deployed using AWS CDK.",
    // website: "https://webhook-plugs.github.io/webhooks-plug-landing/",
    github: "https://github.com/webhooks-plug/",
    video: "https://youtu.be/5Ns9REq0fLU?si=OsNFKanMk_AsrWQv",
  },
  {
    title: "Pully",
    description:
      "Pully is a realtime messaging infrastructure that developers can use to manage their applications realtime needs. It also provides you middleware functions (lambdas) that allow you to intercept messages before they are published to the subscribers so you can perform business logic.",
    image: "pully.png",
    stack:
      "Node with TS, Lambda, Lambda Layers, S3, IAM, Docker, ECR, ECS Fargate, AWS SDK. Deployed using AWS CDK.",
    website: "https://pully-infra.github.io/pully-landing/",
    github: "https://github.com/Pully-Infra/",
  },
  {
    title: "FeedPipe",
    description:
      "FeedPipe is a feedback tool that allows you to collect product feedback from your users directly in Slack, Jira and Notion and view insights from your FeedPipe dashboard.",
    image: "feedpipe.png",
    stack:
      "Node JS, Lambda, S3, API Gateway, Apollo GraphQL, Next JS, Material UI. Deployed to AWS using Serverless.",
    website: "https://feedpipe.io",
  },
];

export const allProjects = [
  ...featuredProjects,
  {
    title: "Medblock",
    description:
      "Medblock is a project that aims to show how blockchain can be used in healthcare to store and retrieve medical records",
    image: "medblock.png",
    stack: "Mini Blockchain built using Javascript, VueJS, NodeJS, MongoDB",
    github: "https://github.com/thatjsprof/Medblock",
  },
  {
    title: "Code Play",
    description:
      "A web based coding environment built with React, ESBuild for bundling, Monaco Editor as the code editor (the same one used by VSCode).",
    image: "codePlay.png",
    stack: "React JS, Esbuild, Monaco editor.",
    website: "https://thatjsprof.github.io/code-play/",
    github: "https://github.com/thatjsprof/code-play",
  },
  {
    title: "Wordle Clone",
    description:
      "This is a clone of the original wordle game. Built with React and Tailwind.",
    image: "wordle.png",
    stack: "React JS, Tailwind.",
    website: "https://thatjsprof.github.io/wordle-clone/",
    github: "https://github.com/thatjsprof/wordle-clone",
  },
  {
    title: "Sorting Visualizer",
    description:
      "This is a visual representiation of sorting algorithms. Bubble sort is currently implemented with the rest coming soon.",
    image: "sorting.png",
    stack: "Vue JS, VueX, Tailwind.",
    website: "https://thatjsprof.github.io/sorting_visualizer/",
    github: "https://github.com/thatjsprof/sorting_visualizer",
  },
];

export const mainTags = (dark) => [
  {
    title: "All",
    slug: "all",
    color: "#cd5632",
    bgColor: dark ? "#f5ddd6" : "#faeeea",
  },
  {
    title: "AWS",
    slug: "aws",
    color: "#1cb01c",
    bgColor: "#d3f8d3",
  },
  {
    title: "GraphQL",
    slug: "graphql",
    color: "#c2a524",
    bgColor: dark ? "#efe2a9" : "#f7f1d4",
  },
  {
    title: "React",
    slug: "react",
    color: dark ? "#63849c" : "#5a778c",
    bgColor: "#d0dae1",
  },
  {
    title: "Next.JS",
    slug: "next",
    color: dark ? "#63849c" : "#5a778c",
    bgColor: "#d0dae1",
  },
  {
    title: "Redux",
    slug: "redux",
    color: "#c2723d",
    bgColor: dark ? "#e0b89e" : "#edd5c5",
  },
];

export const archiveTags = (dark) => [
  {
    title: "All",
    slug: "all",
    color: "#cd5632",
    bgColor: dark ? "#f5ddd6" : "#faeeea",
  },
  {
    title: "React",
    slug: "react",
    color: dark ? "#63849c" : "#5a778c",
    bgColor: "#d0dae1",
  },
];
