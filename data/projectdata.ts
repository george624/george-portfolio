
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
      title: "Ticketnation",
      desc: "A ticketing platform that helps event organizers, productions, artists, and venues to manage their ticket system.",
      img: "/static/projects/ticketnation.png",
      link: "https://www.ticketnation.ph",
      tags: ["ReactJS", "TailwindCSS", "Redux Toolkit", "NodeJS"],
    },
    {
      id: 1,
      title: "GuestPoint",
      desc: "GuestPoint’s full range of cloud-based property management solutions help you simplify your operations, manage and grow your revenue, and create great experiences for your guests.",
      img: "/static/projects/guestpoint.png",
      link: "https://www.guestpoint.com/",
      tags: ["HTML", "CSS", "Javascript","ReactJS", "Typescript", "Zustand"],
    },
    {
      id: 2,
      title: "Securities and Futures Commission",
      desc: "A common platform for SFC electronic forms and submission services.",
      img: "/static/projects/sfc.png",
      link: "https://wings.sfc.hk/main/#/en",
      tags: ["ReactJS", "HTML", "AntDesign"],
    }
  ];