import "bootstrap-icons/font/bootstrap-icons.css";
import "/Colours.css";
import SocialBttn from "./SocialBttn";

export default function AboutMeTab() {
  return (
    <section
      className="container text-white text-center p-0"
      style={{ marginTop: "90px" }}
      id="about"
    >
      <div className="row justify-content-evenly">
        <div
          className="col-9 mx-auto p-5 rounded-5"
          style={{ backgroundColor: "var(--BackgroundPrimary)" }}
        >
          {/* Main Body */}

          <div className="row row-cols-2 justify-content-evenly ">
            {/* Socials */}
            <div className="col-9 col-md-4 col-lg-4">
              <div
                className="card rounded-4 p-2"
                style={{ backgroundColor: "var(--BackgroundSecondary)" }}
              >
                <div className="card-header p-1">
                  <h5 className="card-title fs-1">Socials</h5>
                </div>
                <div className="card-body my-4">
                  <ul
                    className="list-group gap-2 gap-sm-4 list-group-flush"
                    style={{ listStyle: "none" }}
                  >
                    <li>
                      <SocialBttn
                        IconPath="bi bi-discord"
                        HrefLink="https://discordapp.com/users/330929694859984896"
                      />
                    </li>
                    <li>
                      <SocialBttn
                        IconPath=""
                        src="src/assets/roblox.svg"
                        HrefLink="https://www.roblox.com/users/214354501/profile"
                      />
                    </li>
                    <li>
                      <SocialBttn
                        IconPath="bi bi-twitter"
                        HrefLink="https://twitter.com/BlackjackeRBLX"
                      />
                    </li>
                    <li>
                      <SocialBttn
                        IconPath="bi bi-github"
                        HrefLink="https://github.com/BlackJackiee"
                      />
                    </li>
                    <li>
                      <SocialBttn
                        IconPath="bi bi-youtube"
                        HrefLink="https://www.youtube.com/channel/UChTI_7miHMtnYUSbAxnGjNQ"
                      />
                    </li>
                  </ul>
                </div>
                <div className="card-footer ">
                  <img className="w-25" src="/src/assets/jeezus.png" />
                  <p className="card-text">
                    <small style={{ color: "var(--WhiteSecondary)" }}>
                      Let me Know If You Have Any Questions!
                    </small>
                  </p>
                </div>
              </div>
            </div>

            {/* About Me Right */}
            <div className="row align-items-md-center g-5 g-md-0 m-0 p-0 col-12 col-md-8 col-lg-6">
              {/* About Me Description */}
              <div
                className="col-12 align-self-lg-start px-3 py-5 rounded-4"
                style={{
                  backgroundColor: "var(--BackgroundSecondary)",
                }}
              >
                <div className="row">
                  <img className="col-8" src="src/assets/AboutMeText.svg" />
                  <div className="col-4 position-relative">
                    <img
                      className="img-fluid top-50 start-50 position-absolute translate-middle"
                      src="src/assets/RadialCircle.svg"
                    />
                    <img
                      className="img-fluid top-50 start-50 position-absolute translate-middle"
                      src="src/assets/MonkeSmall.png"
                    />
                    <img
                      className="img-fluid top-50 start-50 position-absolute translate-middle"
                      src="src/assets/ScripterIcon.svg"
                    />
                  </div>
                </div>
              </div>

              {/* Map */}
              <div
                className="d-none d-md-block col-12 align-self-lg-end p-0 py-3 rounded-4 "
                style={{
                  backgroundColor: "var(--BackgroundSecondary)",
                }}
              >
                <img className="w-100 h-100" src="src/assets/Map.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// {/* Social Info */}
// <div
// className="col-4 p-4 rounded-5"
// style={{ backgroundColor: "var(--BackgroundSecondary)" }}
// >
// <h2 className="fs-6">SOCIALS</h2>
// <div
//   className=""
//   style={{
//     height: "3px",
//     left: "472px",
//     top: "658px",

//     background: "#313139",
//   }}
// ></div>

// {/* Socail Buttons */}
// <div className="d-grid mt-2 gap-2 col-12 mx-auto">
//   <button className="btn btn-primary" type="button">
//     Button
//   </button>
//   <button className="btn btn-primary" type="button">
//     Button
//   </button>
// </div>
// </div>

// {/* About Me Info */}
// <div className="col-4">One of two columns</div>

// <div className="row justify-content-center">
//   <div className="col-8 bg-primary p-5 rounded-5">
//     <div className="container">
//       <div className="row justify-content-center">
//         <div
//           className="p-0 rounded-3 bg-black"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {/* Social Buttons */}
//           <div>
//             {/* Title */}
//             <h6 className="col my-3">SOCIALS</h6>

//             {/* Main Buttons */}
//             <div className="container p-0">
//               <SocialBttn IconPath="bi bi-discord" />
//               <SocialBttn
//                 IconPath="bi bi-twitter"
//                 HrefLink="https://twitter.com/BlackjackeRBLX"
//               />
//               <SocialBttn
//                 IconPath="bi bi-github"
//                 HrefLink="https://github.com/BlackJackiee"
//               />
//               <SocialBttn
//                 IconPath="bi bi-youtube"
//                 HrefLink="https://www.youtube.com/channel/UChTI_7miHMtnYUSbAxnGjNQ"
//               />
//             </div>
//             {/* Description */}
//             <a className="btn btn-secondary mt-4 rounded-circle">
//               <img
//                 src="/src/assets/jeezus.png"
//                 alt="Monkey Icon"
//                 width="50"
//                 height="50"
//                 className="rounded-circle"
//               />
//             </a>
//             <h6 className="fw-lighter">
//               let me know if you have any questions!
//             </h6>
//           </div>
//           <ul className=""></ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
