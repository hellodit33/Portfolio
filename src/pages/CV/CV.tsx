import * as S from "./styled";
// @ts-ignore
import cv from "../../assets/cv.pdf";
// @ts-ignore
import cvsvenska from "../../assets/cvsvenska.pdf";
import "animate.css";
import { Link } from "../Portfolio/styled";
import {
  ArrowContainer,
  ArrowContent,
  Arrows,
  Space,
} from "../../components/common/styled";

const CV = () => {

  const handleArrowClick = () => {
    const nextSlide = document.getElementById("next-slide");
    if(nextSlide !== null) {
    nextSlide.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <S.ScrollContainer>
      <S.FullSection className="section animate__animated animate__fadeInDown">
        <S.CVTitle>
          <>💼</> EXPERIENCES
        </S.CVTitle>
        <S.Container>
          <S.ColumnContainer>
            <S.MissionTitle>
              Software Developer at Redmind, Stockholm
            </S.MissionTitle>
            <S.DateMission>
              <S.Date>November 2022 - Present </S.Date>
              <div>
                <S.Work>Software Developer</S.Work>
                <S.Work>
                  Client: Moveat - website, dashboard & app, front-end and
                  back-end (TypeScript, ReactJS, React Native, NodeJS,
                  Firebase).
                </S.Work>
                <S.Work>
                  Redesigned the dashboard, created a new queue line and reward
                  system function for the website and the app, together with the
                  team. Collaboration together with the team and the client for
                  an iterative process.
                </S.Work>
              </div>
            </S.DateMission>
            <S.MissionTitle>
              Marketing & Editorial Manager at Hint, Stockholm
            </S.MissionTitle>
            <S.DateMission>
              <S.Date>February 2022 - July 2022</S.Date>
              <div>
                <S.Work>
                  Marketing & Editorial Manager for the AI streaming
                  recommendations startup Hint.
                </S.Work>
                <S.Work>Website maintenance on Wordpress & Webflow.</S.Work>
                <S.Work>
                  From April 2022: Front-end development on the chatbot
                  (JavaScript) and the future app's shell, signup and onboarding
                  processes (Figma, Flutter & Firebase).
                </S.Work>
              </div>
            </S.DateMission>
            <S.DateMission>
              <S.Date>August 2021 - February 2022</S.Date>
              <S.Work>Editorial & Content Manager</S.Work>
            </S.DateMission>
            <S.DateMission>
              <S.Date>June 2021 - August 2021</S.Date>
              <S.Work>Editorial & Content Summer Intern</S.Work>
            </S.DateMission>
          </S.ColumnContainer>
          <S.ColumnContainer>
            <S.MissionTitle>Journalist</S.MissionTitle>
            <S.DateMission>
              <S.Date>February 2019 - December 2021</S.Date>
              <div>
                <S.Work>
                  Freelance journalism in Sweden, Algeria and France.
                </S.Work>
                <S.Work>
                  Reportages during the Algerian revolution in 2019 and the
                  yellow vest protests in France in 2019.
                </S.Work>
              </div>
            </S.DateMission>
            <S.DateMission>
              <S.Date>June 2019 - August 2019</S.Date>
              <S.Work>Journalist at the Swedish radio P4 Västmanland</S.Work>
            </S.DateMission>

            <S.DateMission>
              <S.Date>August 2018 - February 2019</S.Date>
              <div>
                <S.Work>
                  Journalist at the Swedish newspaper Eskilstuna-Kuriren.
                </S.Work>
                <S.Work>Investigation on the culture of honor.</S.Work>
              </div>
            </S.DateMission>
            <S.DateMission>
              <S.Date>July 2018 - August 2018</S.Date>
              <S.Work>
                Journalist at the Swedish newspaper{" "}
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.gp.se/av/Elodie%20Pradet"
                >
                  Göteborgs-Posten
                </Link>
              </S.Work>
            </S.DateMission>
            <S.DateMission>
              <S.Date>January 2018 - May 2018</S.Date>
              <S.Work>
                Journalist intern at{" "}
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.svd.se/av/elodie-pradet"
                >
                  Svenska Dagbladet
                </Link>
              </S.Work>
            </S.DateMission>
            <S.DateMission>
              <S.Date>October 2017 - October 2019</S.Date>
              <S.Work>
                Nordics correspondent at{" "}
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://muckrack.com/elodie-pradet/articles"
                >
                  La Croix
                </Link>
              </S.Work>
            </S.DateMission>
          </S.ColumnContainer>
        </S.Container>
        <ArrowContainer onClick={handleArrowClick}>
          <ArrowContent>
            <Arrows>
              <svg viewBox="0 0 60 48">
                <polygon
                  className="arrow-top"
                  points="28.2,18.6 1.1,1.1 1.6,0 28.2,16.9 54.8,0 55.4,1.1"
                />
                <polygon
                  className="arrow-middle"
                  points="28.2,28.9 0.7,12.2 2.2,10.6 28.2,24.6 54.1,10.6 55.6,12.2"
                />
                <polygon
                  className="arrow-bottom"
                  points="28.2,39.3 0,22.3 3,20.1 28.2,34.3 54.3,20.1 57.3,22.3"
                />
              </svg>
            </Arrows>
          </ArrowContent>
        </ArrowContainer>
      </S.FullSection>
      <S.FullSection id="next-slide" className="section">
        <S.CVTitle>
          <>🏫 </> EDUCATION
        </S.CVTitle>
        <S.Container>
          <S.ColumnContainer>
            <S.MissionTitle>Frontend Development</S.MissionTitle>
            <S.DateMission>
              <S.Date>September 2021 - May 2023 </S.Date>
              <div>
                <S.Work>Frontend Development at KYH, Stockholm</S.Work>
                <S.Work>
                  HTML, CSS, JavaScript, TypeScript, ReactJS, React Native,
                  NodeJS, MongoDB, Firebase, Wordpress, Strapi, UX, Figma, Agile
                  methodology.
                </S.Work>
              </div>
            </S.DateMission>
            <S.MissionTitle>Free-standing courses</S.MissionTitle>
            <S.DateMission>
              <S.Date>September 2018 - June 2022</S.Date>
              <div>
                <S.Work>
                  Free-standing courses at Stockholm University, Södertörn
                  University and Dalarna University
                </S.Work>
                <S.Work>
                  Film musicology, Innovation and sustainable development,
                  Introduction to tourism studies, Italian for beginners, Arabic
                  for beginners, Icelandic for beginners, Rhetoric and Climate
                  Transition, Climate Change and Geology, Italian A and Italian
                  B.
                </S.Work>
              </div>
            </S.DateMission>
            <S.MissionTitle>Cinema Studies</S.MissionTitle>
            <S.DateMission>
              <S.Date>September 2019 - June 2021</S.Date>
              <div>
                <S.Work>
                  Bachelor Degree in Film Studies at Stockholm University
                </S.Work>
                <S.Work>
                  Film history of the moving image, screen cultures and genres,
                  cultural studies, ecocriticism, archival studies. Bachelor
                  thesis on the fictional memory of the French colonial period
                  in Algeria.
                </S.Work>
              </div>
            </S.DateMission>
            <S.MissionTitle>Journalism Studies</S.MissionTitle>
            <S.DateMission>
              <S.Date>September 2015 - June 2018</S.Date>
              <div>
                <S.Work>
                  Bachelor Degree in Journalism and Multimedia at Södertörn
                  University
                </S.Work>
                <S.Work>
                  Writing journalism, video, radio, photo, HTML, CSS, JS,
                  graphic design. Thesis on press freedom in Algerian online
                  media.
                </S.Work>
              </div>
            </S.DateMission>
          </S.ColumnContainer>
          <S.ColumnContainer>
            <S.MissionTitle>Swedish Studies</S.MissionTitle>
            <S.DateMission>
              <S.Date>September 2014 - June 2015</S.Date>
              <div>
                <S.Work>Intensive Course in Swedish at Umeå University</S.Work>
                <S.Work>
                  Intensive year in Swedish (C1 achieved, TISUS) before studies
                  in journalism.
                </S.Work>
              </div>
            </S.DateMission>
            <S.MissionTitle>Sociology Studies</S.MissionTitle>
            <S.DateMission>
              <S.Date>
                September 2014 - June 2015 at University in Caen Normandie
              </S.Date>
              <div>
                <S.Work>Bachelor Degree in Sociology and Anthropology.</S.Work>
                <S.Work>
                  Two years of credited studies and one additional year in
                  sociology. Sociology in politics, religion, culture,
                  agriculture, family. Anthropology. Qualitative and
                  quantitative methods.
                </S.Work>
              </div>
            </S.DateMission>
            <S.MissionTitle>Political Science Studies</S.MissionTitle>

            <S.DateMission>
              <S.Date>September 2011 - June 2014</S.Date>
              <div>
                <S.Work>
                  Bachelor Degree in Political Science at Sciences Po Bordeaux
                </S.Work>
                <S.Work>
                  Subjects: Political science, sociology, law, history,
                  languages. Erasmus at Umeå University.
                </S.Work>
              </div>
            </S.DateMission>
            <S.CVTitle
              style={{
                marginTop: 25,
                marginLeft: 0,
                alignSelf: "flex-start",
              }}
            >
              <>💻 </>TECHNICAL SKILLS
            </S.CVTitle>
            <S.TechList>
              <S.TechListItem>
                JavaScript, TypeScript, React Native, ReactJS, Flutter
              </S.TechListItem>
              <S.TechListItem>
                NodeJS, MongoDB, Firebase, Strapi, Postman
              </S.TechListItem>
              <S.TechListItem>Webflow, Wordpress</S.TechListItem>
              <S.TechListItem>
                Git, Scrum, Agile, Mob programming
              </S.TechListItem>
              <S.TechListItem>
                Adobe Premiere Pro, After Effects, Audition, Photoshop,
                Lightroom, inDesign, Figma
              </S.TechListItem>
              <S.TechListItem>
                Google Analytics, Google Search Console
              </S.TechListItem>
            </S.TechList>
          </S.ColumnContainer>
        </S.Container>
        <S.CvSection>
          <S.CvLink href={cv} download>
            Download CV in English
          </S.CvLink>
          <S.CvLink href={cvsvenska} download>
            Download CV in Swedish
          </S.CvLink>
          <Space />
        </S.CvSection>
      </S.FullSection>
    </S.ScrollContainer>
  );
};

export default CV;
