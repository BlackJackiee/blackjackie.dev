import SkillCard from "./SkillCard";

// Image Imports ;(
import ModellingTitle from "./Titles/3D Modelling.svg";
import TexturingTitle from "./Titles/3D Texturing.svg";
import OtherTitle from "./Titles/Other.svg";
import UiTitle from "./Titles/UI DESIGNER.svg";
import ProgrammerTitle from "./Titles/Programmer.svg";

import ModellingIcon from "./Icons/3D Modelling.svg";
import TexturingIcon from "./Icons/3D Texturing.svg";
import OtherIcon from "./Icons/Other.svg";
import UiIcon from "./Icons/UI DESIGNER.svg";
import ProgrammerIcon from "./Icons/Programmer.svg";

import ModellingDesc from "./Descriptions/3D Modelling.svg";
import TexturingDesc from "./Descriptions/3D Texturing.svg";
import OtherDesc from "./Descriptions/Other.svg";
import UiDesc from "./Descriptions/UI DESIGNER.svg";
import ProgrammerDesc from "./Descriptions/Programmer.svg";

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
            <SkillCard
              TitleSrc={ModellingTitle}
              IconSrc={ModellingIcon}
              DescSrc={ModellingDesc}
            />
          </div>
          <div className="col">
            <SkillCard TitleSrc={UiTitle} IconSrc={UiIcon} DescSrc={UiDesc} />
          </div>
          <div className="col">
            <SkillCard
              TitleSrc={ProgrammerTitle}
              IconSrc={ProgrammerIcon}
              DescSrc={ProgrammerDesc}
              Highlight="true"
            />
          </div>
          <div className="col">
            <SkillCard
              TitleSrc={TexturingTitle}
              IconSrc={TexturingIcon}
              DescSrc={TexturingDesc}
            />
          </div>
          <div className="col">
            <SkillCard
              TitleSrc={OtherTitle}
              IconSrc={OtherIcon}
              DescSrc={OtherDesc}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
