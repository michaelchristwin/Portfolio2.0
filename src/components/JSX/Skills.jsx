import Rlogo from "../img/react.png";
import Node from "../img/node.png";

import { Row, Col } from "react-bootstrap";
function Skills() {
  return (
    <main className="skills bg-white position-absolute pt-4">
      <div className="skill-in mx-auto text-center d-block">
        <span className="skill-title d-block">Tech Stack</span>
        <Row className="mt-5">
          <Col className="hexagon">
            <div className="hexagon-shape">
              <img src={Rlogo} alt="" className="tool" />
            </div>
          </Col>
          <Col>
            <div>
              <img src={Node} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </main>
  );
}

export default Skills;
