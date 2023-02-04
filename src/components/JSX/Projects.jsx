import LH from "../img/learnhall.png";
import SW from "../img/switch-nft.png";

function Projects() {
  return (
    <div className="projects pb-5">
      <h1 className="text-center">Projects</h1>
      <div className="d-flex justify-content-center mt-5">
        <img src={LH} alt="" className="proj mx-auto" />
        <img src={SW} alt="" className="proj mx-auto" />
      </div>
    </div>
  );
}

export default Projects;
