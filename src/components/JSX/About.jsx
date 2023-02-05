import Avatar from "../img/avatar2.jpg";
import Resume from "../img/resume.pdf";

function About() {
  return (
    <div className="mt-5 d-flex about px-3" id="about">
      <img src={Avatar} alt="" className="avatar" />
      <div className="about-text">
        <h1>About Me</h1>
        <p className="">
          Hi, I am Michael Christwin, a Frontend Developer proficient in
          creating great and responsive web experiences. I've had general
          interest about computers and applications ever since I was 8 and then
          decided to join the software development community at the age of 16.
          I'm currently specialized mainly in Frontend web development but the
          journey is only beginning :).
        </p>
        <button className="btn btn-primary">
          <a href={Resume} download className="text-white text-decoration-none">
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
}

export default About;
