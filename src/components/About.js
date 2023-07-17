import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "JT",
  lastName: "",
  bithday: "6.3.XXXX",
  address: "Ann Arbor, MI",
  phn: "+1 313 889 2915",
  email: "JT@POWRDEV.TECH",
  serviceLists: [
    "Website Development",
    "Live DJ Services",
    "IoT Setup & Configuration",
    "Notary Public Services",
    "Dance Instructor",
  ],
  skills: {
    programming: [
      { name: "HTML/CSS", value: "86" },
      { name: "JavaScript", value: "45" },
      { name: "React", value: "35" },
      { name: "Python", value: "25" },
    ],
    language: [
      { name: "English", value: "95" },
      { name: "Spanish", value: "20" },
      { name: "German", value: "5" },
    ],
  },
  education: [
    { year: "2021 - Present", unv: "Kalamazoo Valley Community College", degree: "In Progress" },
    { year: "April 2019", unv: "Eastern Michigan Univercity", degree: "Bachelor Degree" },
    // { year: "2008 - 2010", unv: "Simone College", degree: "Associate Degree" },
  ],
  working: [
    { year: "2023 - Current", company: "Mercury Broadband", deg: "Field Technician I" },
    { year: "2021 - 2023", company: "MTI Mobile Technology Inc.", deg: "Field Technician" },
    { year: "2020 - Current", company: "POWR Design", deg: "Owner/Software Developer" },
    { year: "2020 - 2021", company: "Aurthur Murry Dance Studio", deg: "Dance Instuctor" },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
            <div className="image">
                <img src={'/public/img/about/JB.jpg'} alt="" />
                <div className="main" data-img-url="/img/about/JB.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                 <p>
                  My name is <span>JT.</span> I am a software developer, above all else.
                  I am also a technician, and a live DJ.
                  I am very passionate and dedicated to my work. With 5 years experience as a working professional,
                  I have acquired the skills and knowledge to know what I am doing.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
