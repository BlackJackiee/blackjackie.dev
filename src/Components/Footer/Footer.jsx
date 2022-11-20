export default function Footer(props) {
  return (
    <section
      className="pt-3"
      style={{ marginTop: "120px", backgroundColor: "var(--SkillBackground)" }}
      id="footer"
    >
      <div className="container-md pb-4">
        <div className="row justify-content-between align-items-center">
          <div className="col-5 col-lg-3">
            <img
              className="img-fluid"
              src="src\Components\Footer\assets\LeftInfo.svg"
              alt=""
            />
          </div>
          <div className="col-5 col-lg-3">
            <img
              className="img-fluid m-0"
              src="./assets/RightInfo.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="py-1  " style={{ background: "var(--PrimaryGradient)" }}>
        <div className="container-lg">
          <p
            className="text-center text-white m-0"
            style={{ fontSize: ".8em" }}
          >
            All Rights Reservd BlackJackie
          </p>
        </div>
      </div>
    </section>
  );
}
