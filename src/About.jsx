import AboutCard from "./components/Home/miniSections/AboutCard";
import AffiliationCarousel from "./components/layout/AffiliationCarousel";
import Form from "./components/layout/Form";
import AboutDrJenniferMutch from "./images/AboutJenniferMutch.png";

export default function About() {
  return (
    <div className="row about ">
      <div
        className="row about shared-padding aboutDetailed white-text"
        id="about"
      >
        <div className="center">
          <div className="col s10 offset-s1">
            <div className="col l6 S12 offset-l1 left-side">
              <h2>
                <u>About Dr. Mutch</u>
              </h2>
              <h5 className="white-text">
                <b>MD, MSc, FRCSC</b>
              </h5>
              <br />
              <br />
              <div>
                <span style={{ fontSize: "1.2rem" }}>
                  {/* Expert in orthopaedic surgery, specializing in sports injuries,
              joint replacements, and reconstruction to help patients regain
              mobility and quality of life. */}
                  Dr Mutch is an Academic Orthopedic Surgeon and Assistant
                  Professor at McGill University. She is also affiliated with
                  the St-Mary’s Research Center and is the surgical lead for the
                  ERAS (Enhanced Recovery After Surgery) program for West
                  Montreal.
                </span>
              </div>
            </div>
            <div className="col l4 s12 aboutDrJenniferMutch">
              <img src={AboutDrJenniferMutch} alt="" />
            </div>{" "}
            <div className="row" style={{ marginRight: "8.33%" }}>
              <div className="col s12 fullWidthAbout offset-s1">
                <div className="professionalBackgroundAndEducation">
                  <h5>
                    <b>
                      <u>Educational Background + Advanced Training</u>
                    </b>
                  </h5>
                  <span style={{ fontSize: "1.2rem" }}>
                    Dr Mutch completed her medical school at McGill University
                    and her orthopedic residency training at the University of
                    Montreal. <br />
                    <br /> Dr Mutch then completed 2 fellowships following her
                    residency training: <br /> <br />
                    The Detroit Medical Center in Detroit, Michigan, USA. In
                    addition to learning advanced techniques in both Academic
                    and Private centers, Dr Mutch had the opportunity to follow
                    and treat professional sports teams including the Detroit
                    Red Wings (Hockey), the Tigers (Baseball) and the Pistons
                    (Basketball). <br /> <br />
                    Sunnybrook Health Sciences Center in Toronto, Ontario,
                    Canada. Dr Mutch trained along world leaders in Orthopedic
                    surgery and served as the head physician for the ToRD
                    (Toronto Roller Derby) league.
                  </span>
                </div>
                <div className="continuingExcellence">
                  <h5>
                    <b>
                      <u>Continuing Excellence</u>
                    </b>
                  </h5>
                  <span style={{ fontSize: "1.2rem" }}>
                    Dr Mutch is constantly learning advanced techniques to keep
                    on the leading edge of Orthopedic surgery clinical practise.
                    She has undergone additional certified training in: <br />
                  </span>
                  <br />
                  <div className="table row s12">
                    <div className="col s6">
                      Oxford Partial Knee Replacements
                    </div>
                    <div className="col s6">
                      <span>- Boston, Massachusetts, USA</span> <br />
                      <span>- San Diego, California, USA</span>
                      <span>- Montreal, Quebec, Canada</span>
                    </div>
                  </div>
                  <div className="table row s12">
                    <div className="col s6">
                      Ultrasound guided injections for joints and nerves{" "}
                    </div>
                    <div className="col s6">
                      <span>- Chicago, Illinois, USA</span> <br />
                      <span>- London, England</span>
                    </div>
                  </div>
                  <div className="table row s12">
                    <div className="col s6">
                      ROSA (Robotic Surgical Assist) Knee Replacements{" "}
                    </div>
                    <div className="col s6">
                      <span>- Montreal, Quebec, Canada</span> <br />
                    </div>
                  </div>
                  <div className="table row s12">
                    <div className="col s6">
                      Anterior Approach Hip Replacements (2026)
                    </div>
                    <div className="col s6">
                      <span>- Brussels, Belgium</span> <br />
                    </div>
                  </div>
                </div>
                <div className="CurrentRole">
                  <h5>
                    <b>
                      <u>Current Role</u>
                    </b>
                  </h5>
                  <span style={{ fontSize: "1.2rem" }}>
                    Dr Mutch is working out of the highest-volume center for hip
                    and knee replacements in Quebec, Canada and spearheaded the
                    Day Surgery Arthroplasty program at her hospital as well as
                    an online tracking platform for Surgical Wait Times. She is
                    the surgical lead for the ERAS (Enhanced Recovery After
                    Surgery) program in West Montreal and is a Scientific Member
                    of the REB (Research Ethics Board), allowing her to stay at
                    the forefront of surgical practise and ethical care.
                  </span>
                </div>
              </div>
            </div>
            <br />
            <div className="icon-holders center s12"></div>
          </div>
        </div>
      </div>
      <Form></Form>
      <AffiliationCarousel></AffiliationCarousel>
    </div>
  );
}
