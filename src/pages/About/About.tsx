import {
  Column,
  ColumnLinks,
  Container,
  Image,
  IntroContainer,
  LinkContainer,
  LinkList,
  Links,
  Paragraph,
  SectionTitle,
  Space,
  TextContainer,
  Title,
} from "../../components/common/styled";
import * as S from "./styled";
import profilepic from "../../assets/images/elodie.jpg";
import movies from "../../assets/images/movies.png";
import theater from "../../assets/images/theater.png";
import maps from "../../assets/images/maps.png";
import computer from "../../assets/images/computer.png";
import tomat from "../../assets/images/tomat.png";
import book from "../../assets/images/book.png";
import ReactFlipCard from "reactjs-flip-card";
import ReactFullpage from "@fullpage/react-fullpage";
import { Typewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "animate.css";
import colors from "../../theme/colors";
import StackedCards from "../../components/common/StackedCards";
import { useEffect, useState } from "react";

type Props = { column?: boolean };


const About = ({ column }: Props) =>{
 

  return (
  <ReactFullpage
    scrollingSpeed={1000}
    render={({ state, fullpageApi }) => {
     
      
      Aos.init();
     


      return (
        <ReactFullpage.Wrapper>
          <div className="section" style={{ backgroundColor: colors.green }}>
            <Container>
              <TextContainer>
                <Column>
                  <Title className="animate__animated animate__backInUp">
                    Hi 👋{" "}
                  </Title>
                  <Title className="animate__animated animate__backInDown">
                    I'm Élodie
                  </Title>
                  <Paragraph>
                    I'm a front-end developer with a background in journalism.
                    I'm working as a Frontend Developer at Redmind, a technology
                    and venture studio based in Stockholm.
                  </Paragraph>
                  <Paragraph>
                    Efficient, creative and passionate about film and
                    sustainability, I love tech that improves the world.
                  </Paragraph>
                  <S.Linkedin className="animate__animated animate__backInLeft">
                    <S.Link
                      href="https://www.linkedin.com/in/elodie-pradet/"
                      target="_blank"
                      rel="noopener"
                    >
                      {" "}
                      👩🏻‍💻 {"  "}https://www.linkedin.com/in/elodie-pradet/
                    </S.Link>
                  </S.Linkedin>
                </Column>
                <ColumnLinks>
                  <div>
                    <Image src={profilepic} />
                    <S.WorkTag className="animate__animated animate__backInDown animate__delay-1s">
                      Get in touch!
                    </S.WorkTag>
                  </div>
                  <LinkContainer column>
                    <LinkList>
                      <Links
                        href="https://www.linkedin.com/in/elodie-pradet"
                        rel="noopenner noreferrer"
                      >
                        <FaLinkedin />
                      </Links>
                    </LinkList>
                    <LinkList>
                      <Links
                        href="https://github.com/hellodit33"
                        rel="noopenner noreferrer"
                      >
                        <FaGithub />
                      </Links>
                    </LinkList>
                  </LinkContainer>
                </ColumnLinks>
              </TextContainer>
            </Container>
          </div>
          <div className="section" style={{ backgroundColor: colors.blue }}>
            <S.SecondContainer>
              <SectionTitle>Work Experience</SectionTitle>
              <S.WorkContainer>
                <S.WorkParagraph>
                  <S.BoxTitle>✍️ First: Journalism</S.BoxTitle>I first worked as
                  a journalist in Swedish media after my journalism studies,
                  between 2017 and 2021. I mostly worked on social and political
                  issues, as well as on cultural subjects. I wrote an
                  investigation piece on the culture of honor. Later on I wrote
                  reportages from Algeria during the revolution, and from France
                  during the Yellow Vests protests.
                </S.WorkParagraph>
                <S.WorkParagraph>
                  <S.BoxTitle>💡 Then: A Startup Journey</S.BoxTitle>
                  After that I worked as an Editorial and Marketing Manager for
                  the film recommendation startup Hint in Stockholm. There I
                  used my knowledge in film and journalism. Later on I also
                  worked with front-end development and UX at the same startup
                  (2021-2022).
                </S.WorkParagraph>
                <S.WorkParagraph>
                  <S.BoxTitle>👩🏻‍💻 Now: Front-End Developer</S.BoxTitle>
                  Nowadays, since November 2022, I work as a Front-end developer
                  at Redmind where I work with website and app development for
                  the client Moveat (React, React Native, TypeScript, NodeJS,
                  Firebase). I collaborate with the team and the client on an
                  iterative process.
                </S.WorkParagraph>
                <S.WorkParagraph>
                  <S.BoxTitle>🚀 Building Up Great Ideas</S.BoxTitle>
                  What I love the most in Front-end development is to make
                  impactful ideas alive, through websites and apps. I also enjoy that
                  I can see the results of my job more or less right away.
                </S.WorkParagraph>
              </S.WorkContainer>
            </S.SecondContainer>
          </div>

          <div
            className="section"
            style={{
              justifyContent: "flex-start",
              backgroundColor: colors.yellow,
            }}
          >
            <S.ThirdContainer>
         <SectionTitle>Studies</SectionTitle>
              <S.StudiesContainer>
                <S.StudiesParagraph >
                  🎓 I have four bachelor degrees: in Political Science,
                  Sociology, Journalism & Film Studies. My goal was at first to become a journalist, so I started with Political Science & Sociology to get a solid knowledge ground before studying journalism. After a few years in journalism, I changed direction and decided to study Film - the subject I'm most passionate about.
                </S.StudiesParagraph>
                <S.StudiesParagraph >
                  👩🏻‍💻 Since 2021 I study Front-End development at the
                  professional school KYH in Stockholm. I will graduate in May
                  2023. I had found out about Front-end during my journalism studies, and enjoyed the building, design and logic process behind it.
                </S.StudiesParagraph>
                <S.StudiesParagraph >
                🇫🇷 🇸🇪 🇬🇧 🇮🇹 🇩🇪 I've also studied languages. I became fluent in Swedish 2014, and I've also studied Italian and German so that I have a limited working proficiency. I've even studied Icelandic and Arabic, and I'm at beginner level.
                </S.StudiesParagraph>
                <S.StudiesParagraph >
                🌱 I have also a deep interest for sustainability. I'm engaged against climate change, and I've studied Climate change and Geology, as well as Innovation & Sustainability, and Rhetoric and Climate Transition.
                </S.StudiesParagraph>
              </S.StudiesContainer>
            </S.ThirdContainer>
          </div>

          <S.Section
            className="section"
            style={{ backgroundColor: colors.purple }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop:'100px'
              }}
            >
             <SectionTitle>Leisure time</SectionTitle>
              <div style={{ marginLeft: "100px", marginTop: "120px" }}>
                <Typewriter
                  words={[
                    "Click on each card to get to know what I do on my free time.",
                  ]}
                  loop={5}
                  typeSpeed={100}
                />
              </div>
              <S.FourthContainer>
                <ReactFlipCard
                  flipTrigger="onClick"
                  frontComponent={<S.LeisureImage src={movies} />}
                  backComponent={
                    <S.LeisureText>
                      When I have free time I watch films, and I continue
                      writing on a scenario.
                    </S.LeisureText>
                  }
                />
                <ReactFlipCard
                  flipTrigger="onClick"
                  frontComponent={<S.LeisureImage src={theater} />}
                  backComponent={
                    <S.LeisureText>
                      I also play theater every week with a French-speaking
                      Theater organization that I started back in January 2020.
                      We have public representations twice a year (in French
                      with Swedish subtitles).
                    </S.LeisureText>
                  }
                />
                <ReactFlipCard
                  flipTrigger="onClick"
                  frontComponent={<S.LeisureImage src={computer} />}
                  backComponent={
                    <S.LeisureText>
                      I do some front-end development to help friends with their
                      projects, and to work on some startup ideas I have.
                    </S.LeisureText>
                  }
                />
                <ReactFlipCard
                  flipTrigger="onClick"
                  frontComponent={<S.LeisureImage src={tomat} />}
                  backComponent={
                    <S.LeisureText>
                      I do a lot of organic growing (vegetables and flowers) in
                      a shared garden as soon as the weather permits it in
                      Stockholm.
                    </S.LeisureText>
                  }
                />
                <ReactFlipCard
                  flipTrigger="onClick"
                  frontComponent={<S.LeisureImage src={book} />}
                  backComponent={
                    <S.LeisureText>
                      I'm often busy reading books, and I also discuss
                      literature with two bookclubs. I often go to the theater
                      and opera.
                    </S.LeisureText>
                  }
                />
                <ReactFlipCard
                  flipTrigger="onClick"
                  frontComponent={<S.LeisureImage src={maps} />}
                  backComponent={
                    <S.LeisureText>
                      From time to time I travel abroad by train, often to
                      France and Italy.
                    </S.LeisureText>
                  }
                />
              </S.FourthContainer>
            </div>
          </S.Section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
)};
export default About;
