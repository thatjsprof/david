export const archivesObject = [
  {
    year: "2022",
    data: [
      {
        date: "Oct 31",
        title: "Compound Component Pattern in React",
        link: "/blog/advanced-react-components/compound-pattern",
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
    year: "2023",
    data: [
      {
        date: "Mar 10",
        title: "How to use Redux Saga in a react application",
        link: "/blog/redux-saga",
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
    title: "Pully",
    description:
      "Pully is a realtime messaging infrastructure that developers can use to manage their applications realtime needs.",
    image: "pully.png",
    website: "https://pully-infra.github.io/pully-landing/",
    github: "https://github.com/Pully-Infra/",
  },
  {
    title: "FeedPipe",
    description:
      "FeedPipe is a feedback tool that allows you to collect product feedback from your users directly in your favorite apps and view insights from your FeedPipe dashboard.",
    image: "feedpipe.png",
    website: "https://feedpipe.io",
  },
];

export const allProjects = [
  ...featuredProjects,
  {
    title: "Code Play",
    description:
      "A web based coding environment built with React, ESBuild for bundling, Monaco Editor as the code editor (the same one used by VSCode).",
    image: "codePlay.png",
    website: "https://thatjsprof.github.io/code-play/",
    github: "https://github.com/thatjsprof/code-play",
  },
  {
    title: "Wordle Clone",
    description:
      "This is a clone of the original wordle game. Built with React and Tailwind.",
    image: "wordle.png",
    website: "https://thatjsprof.github.io/wordle-clone/",
    github: "https://github.com/thatjsprof/wordle-clone",
  },
  {
    title: "Sorting Visualizer",
    description:
      "This is a visual representiation of sorting algorithms. Bubble sort is currently implemented with the rest coming soon.",
    image: "sorting.png",
    website: "https://thatjsprof.github.io/sorting_visualizer/",
    github: "https://github.com/thatjsprof/sorting_visualizer",
  },
];
