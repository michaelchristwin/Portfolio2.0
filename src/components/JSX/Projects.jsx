import LH from "../img/learnhall.png";
import SW from "../img/switch-nft.png";
import { Row, Col } from "react-bootstrap";
import LaunchIcon from "@mui/icons-material/Launch";

function Projects() {
  return (
    <div className="projects pb-5">
      <h1 className="text-center pro-t">Projects</h1>
      <div className="d-flex justify-content-center pr">
        <Row>
          <Col className="me-5">
            <p className="d-block text-center pn">Learnhall Official Website</p>
            <img src={LH} alt="" className="proj mx-auto" />
          </Col>
          <Col className="ms-5">
            <a href="https://nft.whynotswitch.com/" className="text-center pn">
              Switch NFT Marketplace
              <LaunchIcon />
            </a>
            <img src={SW} alt="" className="proj mx-auto" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Projects;
