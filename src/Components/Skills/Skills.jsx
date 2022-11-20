import SkillCard from "./SkillCard";

export default function AboutMeTab() {
  return (
    <section
      className="container row-cols-1 text-white text-center p-5 h-100"
      style={{ marginTop: "120px" }}
      id="skills"
    >
      <div className="row justify-content-center">
        <div className="row justify-content-evenly">
          {/* Title */}
          <div className="row justify-content-center">
            <h1 className="fw-bold mb-md-2 mb-lg-4">Skills</h1>
            <img
              src="src\Components\Skills\SkillsDesc.svg"
              alt="Skills Description"
              className="col-lg-6"
            />
          </div>
        </div>

        {/* Skill Cards */}
        <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center g-3">
          <div className="col">
            <SkillCard Title="3D Modelling" />
          </div>
          <div className="col">
            <SkillCard Title="UI DESIGNER" />
          </div>
          <div className="col">
            <SkillCard Title="Programmer" Highlight="true" />
          </div>
          <div className="col">
            <SkillCard Title="3D Texturing" />
          </div>
          <div className="col">
            <SkillCard Title="Other" />
          </div>
        </div>
      </div>
    </section>
  );
}
