import * as S from "./styled";
import ReactFullpage from "@fullpage/react-fullpage";
import { Section} from "../../components/common/styled";


const Contact = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Section className="section">
            <S.CVTitle><>💼</> EXPERIENCES</S.CVTitle>

            <S.Container>
              <S.ColumnContainer>
                <S.MissionTitle>
                  Frontend Developer at Redmind, Stockholm
                </S.MissionTitle>
                <S.DateMission>
                  <S.Date>November 2022 - Present </S.Date>
                  <div>
                   <S.Work>Frontend Developer.</S.Work> 
                   <S.Work>Client: Moveat - website, dashboard &
                    app, front-end and back-end (TypeScript, ReactJS, React
                    Native, NodeJS, Firebase). </S.Work>
                    
                    <S.Work>Redesigned the dashboard, created
                    a queue line function together with the team and released
                    new versions of the app. Collaboration together with the
                    team and the client for an iterative process.</S.Work> 
                </div>
                  
                </S.DateMission>

                <S.MissionTitle>
                  Frontend Developer, Marketing & Editorial Manager at Hint,
                  Stockholm
                </S.MissionTitle>
                <S.DateMission>
                  <S.Date>April 2022 - July 2022</S.Date>
                  <div>
                  <S.Work>
                    Frontend Developer & Marketing Manager for the AI streaming
                    recommendations startup Hint.</S.Work><S.Work>Website maintenance on
                    Wordpress & Webflow. </S.Work>
<S.Work>Front-end development on the chatbot
                    (JavaScript) and the future app's shell, signup and
                    onboarding processes (Figma, Flutter & Firebase).
                  </S.Work>
                  </div>
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
                  <S.Date>February 2019 - December 2021</S.Date>
                  <div>
                  <S.Work>
                    Freelance journalism in Sweden, Algeria and France. </S.Work>
                   <S.Work> Reportages during the Algerian revolution in 2019 and the
                    yellow vest protests in France in 2019.</S.Work>
                 
                  </div>
                </S.DateMission>
                <S.DateMission>
                  <S.Date>June 2019 - August 2019</S.Date>
                  <S.Work>
                    Journalist at the Swedish radio P4 Västmanland
                  </S.Work>
                </S.DateMission>

                <S.DateMission>
                  <S.Date>August 2018 - February 2019</S.Date>
                  <div>
                  <S.Work>
                    Journalist at the Swedish newspaper Eskilstuna-Kuriren.</S.Work><S.Work>
                    Investigation on the culture of honor.</S.Work>
                    </div>

                </S.DateMission>

                <S.DateMission>
                  <S.Date>July 2018 - August 2018</S.Date>
                  <S.Work>
                    Journalist at the Swedish newspaper Göteborgs-Posten
                  </S.Work>
                </S.DateMission>
                <S.DateMission>
                  <S.Date>January 2018 - May 2018</S.Date>
                  <S.Work>Journalist intern at Svenska Dagbladet</S.Work>
                </S.DateMission>
                <S.DateMission>
                  <S.Date>October 2017 - October 2019</S.Date>
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
                  <div>
                  <S.Work>
                    Frontend Development. </S.Work> 
                   <S.Work> HTML, CSS, JavaScript, TypeScript,
                    ReactJS, React Native, NodeJS, MongoDB, Firebase, Wordpress,
                    Strapi, UX, Figma, Agile methodology.
                  </S.Work>
                  </div>
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
                  <div><S.Work>
                    Bachelor Degree in film studies.
                  </S.Work>
                  <S.Work>Film history of the moving
                    image, screen cultures and genres, cultural studies,
                    ecocriticism, archival studies. Bachelor thesis on the
                    fictional memory of the French colonial period in Algeria.</S.Work></div>
                  
                </S.DateMission>
                <S.MissionTitle>Journalism Studies</S.MissionTitle>

                <S.DateMission>
                  <S.Date>September 2015 - June 2018</S.Date>
                  <div> <S.Work>
                    Bachelor Degree in journalism and multimedia. 
                  </S.Work>
                  <S.Work>Writing
                    journalism, video, radio, photo, HTML, CSS, JS, graphic
                    design. Thesis on press freedom in Algerian online media.</S.Work></div>
                </S.DateMission>
                
                
              </S.ColumnContainer>
            
              <S.ColumnContainer>
              <S.MissionTitle>Swedish Studies</S.MissionTitle>

<S.DateMission>
  <S.Date>September 2014 - June 2015</S.Date>
  <S.Work>
    Intensive year in Swedish (C1 achieved, TISUS) before
    studies in journalism.
  </S.Work>
</S.DateMission>
<S.MissionTitle>Sociology Studies</S.MissionTitle>

<S.DateMission>
  <S.Date>September 2014 - June 2015</S.Date>
  <div><S.Work>
    Bachelor Degree in Sociology and Anthropology.</S.Work><S.Work>
    Two years of
    credited studies and one additional year in sociology.
    Sociology in politics, religion, culture, agriculture,
    family. Anthropology. Qualitative and quantitative methods.
  </S.Work></div>
</S.DateMission>
              <S.MissionTitle>Political Science Studies</S.MissionTitle>

              <S.DateMission>
                  <S.Date>September 2011 - June 2014</S.Date>
                  <div> <S.Work>
                    Bachelor Degree in Political Science.</S.Work>
                    <S.Work>
                    Subjects: Political
                    science, sociology, law, history, languages. Erasmus at Umeå
                    University.
                  </S.Work></div>
                 
                </S.DateMission>
              <S.CVTitle style={{marginTop:25, marginLeft:0, alignSelf:'flex-start'}}>💻 TECHNICAL SKILLS</S.CVTitle>
<ul><li> JavaScript, TypeScript, React Native, ReactJS, Flutter</li>
<li>NodeJS, MongoDB, Firebase, Strapi, Postman</li>
<li>Webflow, Wordpress</li>
<li>Git, Scrum, Agile, Mob programming</li>
<li> Adobe Premiere Pro, After Effects, Audition, Photoshop,
                  Lightroom, inDesign, Figma</li>
<li>Google Analytics, Google Search Console</li>

</ul>
                
               
               
             
              </S.ColumnContainer>
            </S.Container>
          </Section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Contact;
