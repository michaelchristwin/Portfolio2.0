import Rlogo from "../img/react.png";
import Node from "../img/node.png";
import BootStrap from "../img/bootstrap.jpeg";
import MongoDB from "../img/mongodb.png";
import NodeI from "../img/node.png";
import "../CSS/hex.css";
import Django from "../img/django.png";
import Tail from "../img/tail.png";
import Tool from "./Tool";
import Express from "../img/express.png";
import Type from "../img/type.png";

function Skills() {
  return (
    <main className="skills bg-white position-absolute pt-4" id="skills">
      <div className="skill-in mx-auto text-center d-block">
        <span className="skill-title d-block">Tech Stack</span>
        <ul id="hexGrid" className="mt-5">
          <Tool img={MongoDB} />
          <Tool img={Express} />
          <Tool img={Rlogo} />
          <Tool img={NodeI} />
          <Tool img={BootStrap} />
          <Tool img={Django} />
          <Tool img={Tail} />
          <Tool img={Type} />
        </ul>
      </div>
    </main>
  );
}

export default Skills;
