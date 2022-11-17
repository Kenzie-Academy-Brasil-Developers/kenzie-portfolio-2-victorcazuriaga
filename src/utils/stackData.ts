import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";

import { FaPython, FaAws } from "react-icons/fa";
import {DiDjango, DiPostgresql, DiDocker, DiMongodb} from "react-icons/di"

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "React",
    img: imgReact,
  },
  {
    title: "Python",
    img:FaPython
  },
  {
    title: "Django",
    img: DiDjango,
  },
  {
    title: "Docker",
    img: DiDocker,
  },
  {
    title: "PostgreSQL",
    img: DiPostgresql,
  },
  {
    title: "MongoDB",
    img: DiMongodb,
  },
  {
    title:"AWS",
    img: FaAws

  }
];
