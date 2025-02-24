import AboutCard from "./miniSections/AboutCard";
export default function About() {
  return (
    <div className="row about">
      <div className="center">
        <div className="col s10 offset-s1 ">
          <h2 className="center">
            <u>About Dr. Mutch</u>
          </h2>
          <br />
          <br />
          <div className="center">
            <span style={{ fontSize: "1.2rem" }}>
              Expert in orthopaedic surgery, specializing in sports injuries,
              joint replacements, and reconstruction to help patients regain
              mobility and quality of life.
            </span>
          </div>
          <div className="icon-holders center">
            <AboutCard
              icon="school"
              title="Medical School"
              item1="McGill University"
              item2=" Montreal, Quebec, Canada"
              item3="2004 - 2009"
            ></AboutCard>
            <AboutCard
              icon="local_library"
              title="Residency Training"
              item1="Université de Montréal"
              item2=" Montreal, Quebec, Canada"
              item3="2009 - 2014"
            ></AboutCard>
            <AboutCard
              icon="local_hospital"
              title="Fellowship Training"
              item1="Detroit Medical Center"
              item2="Detroit, Michigan, USA"
              item3="2014- 2015"
            ></AboutCard>
            <AboutCard
              icon="local_hospital"
              title="Fellowship Training"
              item1="Sunnybrook Hospital &  University of Toronto"
              item2="Toronto, Ontario, Canada"
              item3="2015 – 2016"
            ></AboutCard>
            <AboutCard
              icon="library_books"
              title="Research Interests"
              item1="Upper Extremity"
              item2="Trauma"
            ></AboutCard>
            <AboutCard
              icon="local_pharmacy"
              title="Clinical Interests"
              item1="Upper Limb / Hand Trauma & Reconstruction"
              item2="Sports Medicine & Arthroplasty"
            ></AboutCard>
          </div>
        </div>
      </div>
    </div>
  );
}
