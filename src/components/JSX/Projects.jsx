import LH from "../img/learnhall.png";
import SW from "../img/switch-nft.png";
import NC from "../img/net-clone.png";
import { Row, Col } from "react-bootstrap";
import LaunchIcon from "@mui/icons-material/Launch";

function Projects() {
  return (
    <div className="projects pb-5" id="projects">
      <h1 className="text-center pro-t">Projects</h1>
      <section className="container pr">
        <Row className="row-set">
          <Col>
            <p className="d-block pn">Learnhall Official Website</p>
            <img src={LH} alt="" className="proj mx-auto" />
          </Col>
          <Col>
            <a href="https://nft.whynotswitch.com/" className="pn">
              Switch NFT Marketplace
              <LaunchIcon />
            </a>
            <img src={SW} alt="Switch Website" className="proj mx-auto" />
          </Col>
        </Row>
        <Row className="mt-5 row-set">
          <Col className="position-relative">
            <a
              href="https://netflix-clone-ojtk4gpns-michaelchristwin.vercel.app/"
              className="d-block pn block"
            >
              Netflix Clone <LaunchIcon />
            </a>
            <img src={NC} alt="Netflix Clone" className="proj mx-auto" />
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Projects;
