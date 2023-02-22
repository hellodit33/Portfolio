import React from "react";
import * as S from "./styled";
import ReactFullpage from "@fullpage/react-fullpage";
import { Section, Title } from "../../components/common/styled";

type Props = {};

const Contact = ({}: Props) => (
  <ReactFullpage
    scrollingSpeed={1000}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Section className="section">
          <S.CVTitle>💼 EXPERIENCES</S.CVTitle>

            <S.Container>


              <S.ColumnContainer>
                <S.MissionTitle>Frontend Developer</S.MissionTitle>
                <S.DateMission>
                  <S.Date>November 2022 - Present </S.Date>
                  <S.Work>Frontend Developer. Client: Moveat - website, dashboard & app, front-end and back-end (ReactJS, React Native, NodeJS, Firebase). Redesigned the dashboard and created a queue line function together with the team. Collaboration together with the team and the client for an iterative process.
</S.Work>
                </S.DateMission>

                <S.MissionTitle>
                  Frontend Developer, Marketing & Editorial Manager
                </S.MissionTitle>
                <S.DateMission>
                  <S.Date>April 2022 - July 2022</S.Date>
                  <S.Work>Frontend Developer & Marketing. Editorial and marketing director of AI streaming recommendations startup Hint. Website maintenance on Wordpress & Webflow. From April 2022 I worked as a frontend developer on the chatbot (JavaScript) and the future app's shell, signup and onboarding processes (Figma, Flutter & Firebase).
</S.Work>
                </S.DateMission>
                <S.DateMission>
                  <S.Date>February 2022 - April 2022</S.Date>
                  <S.Work>Marketing & Editorial Manager</S.Work>
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
                  <S.Date>2019 - 2021</S.Date>
                  <S.Work>
                    Freelance journalism in Sweden, Algeria and France. Reportage during the Algerian revolution in 2019 and the yellow vest protests in France in 2019.
                  </S.Work>
                </S.DateMission>
                <S.DateMission>
                  <S.Date>2019</S.Date>
                  <S.Work>
                    Journalist at the Swedish radio P4 Västmanland 
                  </S.Work>
                </S.DateMission>

                <S.DateMission>
                  <S.Date>2018-2019</S.Date>
                  <S.Work>
                    Journalist at the Swedish newspaper Eskilstuna-Kuriren. Investigation on the culture of honor. 

                  </S.Work>
                </S.DateMission>

                <S.DateMission>
                  <S.Date>2018</S.Date>
                  <S.Work>
                    Journalist at the Swedish newspaper Göteborgs-Posten
                  </S.Work>
                </S.DateMission>
                <S.DateMission>
                  <S.Date>2018</S.Date>
                  <S.Work>Journalist intern at Svenska Dagbladet</S.Work>
                </S.DateMission>
                <S.DateMission>
                  <S.Date>2017-2019</S.Date>
                  <S.Work>
                    Nordics correspondent at the French newspaper La Croix
                  </S.Work>
                </S.DateMission>
                </S.ColumnContainer>
            


            </S.Container>
          </Section>
          <Section className="section">
          <S.CVTitle>🏫 EDUCATION</S.CVTitle>

            <S.Container>
              <S.ColumnContainer>

                <S.MissionTitle>Frontend Developer</S.MissionTitle>
                <S.DateMission>
                  <S.Date>September 2021 - May 2023 </S.Date>
                  <S.Work>Frontend Development. HTML, CSS, JavaScript, TypeScript, ReactJS, React Native, NodeJS, MongoDB, Firebase, Wordpress, Strapi, UX, Figma, Agile methodology.
</S.Work>
                </S.DateMission>
                <S.MissionTitle>Free standing courses</S.MissionTitle>
                <S.DateMission>
                  <S.Date>September 2018 - June 2022</S.Date>
                  <S.Work>
                    Film musicology, Innovation and sustainable development,
                    Introduction to tourism studies, Italian for beginners,
                    Arabic for beginners, Icelandic for beginners, Rhetoric and
                    Climate Transition, Climate Change and Geology, Italian A
                    and Italian B.
                  </S.Work>
                </S.DateMission>
                <S.MissionTitle>Cinema Studies</S.MissionTitle>
                <S.DateMission>
                  <S.Date>September 2019 - June 2021</S.Date>
                  <S.Work>
                    Bachelor Degree in film studies. Film history of the moving
                    image, screen cultures and genres, cultural studies,
                    ecocriticism, archival studies. Bachelor thesis on the
                    fictional memory of the French colonial period in Algeria.
                  </S.Work>
                </S.DateMission>
                <S.DateMission>
                  <S.Date>September 2015 - June 2018</S.Date>
                  <S.Work>
                  Bachelor Degree in journalism and multimedia. Writing journalism, video, radio, photo, HTML, CSS, JS, graphic design. Thesis on press freedom in Algerian online media.

                  </S.Work>
                </S.DateMission>
                <S.DateMission>
                  <S.Date>September 2014 - June 2015</S.Date>
                  <S.Work>
                  Intensive year in Swedish (C1 achieved, TISUS) before studies in journalism.

                  </S.Work>
                </S.DateMission>
                <S.DateMission>
                  <S.Date>September 2014 - June 2015</S.Date>
                  <S.Work>
                  Bachelor Degree in Sociology and Anthropology (two years of credited studies and one additional year in sociology). Sociology in politics, religion, culture, agriculture, family. Anthropology. Qualitative and quantitative methods.

                  </S.Work>
                </S.DateMission>
                <S.DateMission>
                  <S.Date>September 2011 - June 2014</S.Date>
                  <S.Work>
                  Bachelor Degree in Political Science. Subjects: Political science, sociology, law, history, languages. Erasmus at Umeå University. 

                  </S.Work>
                </S.DateMission>
              </S.ColumnContainer>
             
              <S.ColumnContainer>
              <S.CVTitle>💻 TECHNICAL SKILLS</S.CVTitle>
              
             <p>JavaScript, TypeScript, NodeJS, React Native, ReactJS, Flutter</p>
<p>MongoDB, Firebase, Strapi</p>
<p>Webflow, Wordpress</p>
<p>Git, Scrum, Agile, Mob programming</p>
<p>Adobe Premiere Pro, After Effects, Audition, Photoshop, Lightroom, inDesign, Figma</p> 
<p>Google Analytics, Google Search Console</p>
</S.ColumnContainer>
             </S.Container>
              </Section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Contact;
