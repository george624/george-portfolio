
interface Project {
    id: number;
    title: string;
    desc: string;
    img: string;
    link?: string;
    github?: string;
    tags: string[];
  }
  
export const projects: Project[] = [
    {
      id: 0,
      title: "Project 1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad exercitationem excepturi corporis sunt autem possimus officia, laboriosam cum. Quis quisquam quia et odio praesentium aliquid nobis assumenda voluptatem, itaque iste.",
      img: "/static/projects/yei-learn.png",
      link: "",
      github: "",
      tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase"],
    },
    {
      id: 1,
      title: "Project 2",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quam, eveniet quidem alias ipsum aspernatur harum error! Placeat obcaecati iure minus voluptatibus facilis ducimus tenetur perferendis hic. Molestias, placeat tempora.",
      img: "/static/projects/buildfaster.png",
      link: "",
      tags: ["HTML", "CSS", "Javascript", "Typescript"],
    },
    {
      id: 2,
      title: "Project 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eum, quibusdam minima assumenda nihil recusandae veniam repellendus consequatur quo beatae! Ad minus odio cupiditate sapiente voluptates nisi, eveniet assumenda quas.",
      img: "/static/projects/react-emoji-search.png",
      link: "",
      github: "",
      tags: ["React", "CSS", "JSON"],
    },
    {
        id: 3,
        title: "Project 4",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad exercitationem excepturi corporis sunt autem possimus officia, laboriosam cum. Quis quisquam quia et odio praesentium aliquid nobis assumenda voluptatem, itaque iste.",
        img: "/static/projects/yei-learn.png",
        link: "",
        github: "",
        tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase"],
      },
      {
        id: 4,
        title: "Project 5",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quam, eveniet quidem alias ipsum aspernatur harum error! Placeat obcaecati iure minus voluptatibus facilis ducimus tenetur perferendis hic. Molestias, placeat tempora.",
        img: "/static/projects/buildfaster.png",
        link: "",
        tags: ["HTML", "CSS", "Javascript", "Typescript"],
      },
      {
        id: 5,
        title: "Project 6",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eum, quibusdam minima assumenda nihil recusandae veniam repellendus consequatur quo beatae! Ad minus odio cupiditate sapiente voluptates nisi, eveniet assumenda quas.",
        img: "/static/projects/react-emoji-search.png",
        link: "",
        github: "",
        tags: ["React", "CSS", "JSON"],
      },
  ];