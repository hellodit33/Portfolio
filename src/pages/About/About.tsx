import {
  Column,
  ColumnLinks,
  Container,
  Image, Title, LinkContainer,
  LinkList,
  Links,
  Paragraph,
  TextContainer,
  Section
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
import 'animate.css';


type Props = {column?:boolean};

const About = ({column}:Props) => (
  <ReactFullpage
    scrollingSpeed={1000}
    render={({ state, fullpageApi }) => {
      Aos.init();
      const styles = {
        card: {},
      };

      return (
        <ReactFullpage.Wrapper>
          
          <Section className="section">
            <Container>
              <TextContainer>
                <Column>
                  <Title className="animate__animated animate__backInUp">Hello 👋 </Title>
                  <Title className="animate__animated animate__backInDown">I'm Élodie</Title>
                  <Paragraph>
                    I'm a front-end developer with a background in journalism.
                    I'm working as a Frontend Developer at Redmind, a technology
                    and venture studio based in Stockholm. Efficient, creative
                    and passionate about film and sustainability, I love tech
                    that improves the world.
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
                  <S.WorkTag className="animate__animated animate__backInDown animate__delay-1s" >
               Work with me!
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
          </Section>
          <Section className="section">
            <S.SecondContainer>
              <S.SubTitle className="animate__animated animate__backInUp animate__delay-2s">Work experience</S.SubTitle>
              <S.WorkContainer  >
                <S.WorkParagraph className="animate__animated animate__backInDown animate__delay-2s"style={{ justifySelf: "flex-end" }}>
                <S.BoxTitle>✍️ First: journalism</S.BoxTitle>
                  I first worked as a journalist in Swedish media after my
                  journalism studies, between 2017 and 2021. I mostly worked on
                  social and political issues, as well as on culture subjects. I
                  wrote an investigation piece on the culture of honor. Later on
                  I wrote reportages from Algeria during the revolution, and
                  from France during the Yellow Vests protests.
                </S.WorkParagraph>
                <S.WorkParagraph className="animate__animated animate__backInDown animate__delay-3s" style={{ justifySelf: "flex-start" }}>
                <S.BoxTitle>💡 Then: a startup journey</S.BoxTitle>
                  After that I worked as an Editorial and Marketing Manager for
                  the film recommendation startup Hint in Stockholm. There I
                  used my knowledge in film and journalism. Later on I also
                  worked with front-end development and UX at the same startup
                  (2021-2022).
                </S.WorkParagraph>
                <S.WorkParagraph className="animate__animated animate__backInDown animate__delay-4s" style={{ justifySelf: "flex-end" }}>
                <S.BoxTitle>👩🏻‍💻 Now: full time developer</S.BoxTitle>
                  Nowadays, since November 2022, I work as a Front-end developer
                  at Redmind where I work with website and app development for
                  the client Moveat (React, React Native, TypeScript, NodeJS,
                  Firebase). I collaborate with the team and the client on an
                  iterative process.
                </S.WorkParagraph>
                <S.WorkParagraph  className="animate__animated animate__backInDown animate__delay-5s"style={{ justifySelf: "flex-start" }}>
                <S.BoxTitle>🚀 Building up great ideas</S.BoxTitle>
                  What I love the most in Front-end development is to make
                  impactful ideas alive, through websites and apps. I love that
                  I can see the results of my job more or less right away.
                </S.WorkParagraph>
              </S.WorkContainer>
            </S.SecondContainer>
          </Section>

          <Section className="section" style={{ justifyContent: "flex-start" }}>
            <S.ThirdContainer>
              <S.SubTitle className="animate__animated animate__backInUp animate__delay-4s"
                style={{
                  display: "flex",
                  order: 2,
                  width: "40%",
                  placeSelf: "center",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginLeft: "-100px",
                }}
              >
                Studies
              </S.SubTitle>
              <S.StudiesContainer>
                <S.StudiesParagraph>
                  🎓 I have four bachelor degrees: in Political Science,
                  Sociology, Journalism & Film Studies.{" "}
                </S.StudiesParagraph>
                <S.StudiesParagraph style={{ marginTop: "140px" }}>
                  👩🏻‍💻 Since 2021 I study Front-End development at the
                  professional school KYH in Stockholm. I will graduate in May
                  2023.
                </S.StudiesParagraph>
                <S.StudiesParagraph style={{ marginTop: "240px" }}>
                  ❤️ I love studying languages, both coding ones and human ones.
                </S.StudiesParagraph>
                <S.StudiesParagraph style={{ marginTop: "340px" }}>
                  🇫🇷 🇸🇪 🇬🇧 🇮🇹 🇩🇪 My mother tongue is French and I speak Swedish
                  & English fluently. I have a good level in Italian and German
                  while I'm at beginner level in Arabic and Icelandic.
                </S.StudiesParagraph>
              </S.StudiesContainer>
            </S.ThirdContainer>
          </Section>

          <Section className="section">
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', }}>
            <S.SubTitle style={{ width: "15%", marginTop:'100px', marginLeft:'100px' }} className="animate__animated animate__backInUp animate__delay-7s">Leisure time</S.SubTitle>
            <div style={{ marginLeft:'100px', marginTop:'120px'}}><Typewriter 
                  words={["Click on each card to get to know what I do on my free time."]}
                  loop={1}
                  typeSpeed={100}
                />
                </div>
            <S.FourthContainer>
              <ReactFlipCard
                frontStyle={styles.card}
                backStyle={styles.card}
                flipTrigger="onClick"
                frontComponent={<S.LeisureImage src={movies} />}
                backComponent={
                  <S.LeisureText>
                    When I have free time I watch films, and I continue writing
                    on a scenario.
                  </S.LeisureText>
                }
              />
              <ReactFlipCard
                frontStyle={styles.card}
                backStyle={styles.card}
                flipTrigger="onClick"
                frontComponent={<S.LeisureImage src={theater} />}
                backComponent={
                  <S.LeisureText>
                    I also play theater every week with a French-speaking
                    Theater organization that I started back in January 2020. We
                    have public representations twice a year (in French with
                    Swedish subtitles).
                  </S.LeisureText>
                }
              />
              <ReactFlipCard
                frontStyle={styles.card}
                backStyle={styles.card}
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
                frontStyle={styles.card}
                backStyle={styles.card}
                flipTrigger="onClick"
                frontComponent={<S.LeisureImage src={tomat} />}
                backComponent={
                  <S.LeisureText>
                    I do a lot of organic growing (vegetables and flowers) in a
                    shared garden as soon as the weather permits it in
                    Stockholm.
                  </S.LeisureText>
                }
              />
              <ReactFlipCard
                frontStyle={styles.card}
                backStyle={styles.card}
                flipTrigger="onClick"
                frontComponent={<S.LeisureImage src={book} />}
                backComponent={
                  <S.LeisureText>
                    I'm often busy reading books, and I also discuss literature
                    with two bookclubs. I often go to the theater and opera.
                  </S.LeisureText>
                }
              />
              <ReactFlipCard
                frontStyle={styles.card}
                backStyle={styles.card}
                flipTrigger="onClick"
                frontComponent={<S.LeisureImage src={maps} />}
                backComponent={
                  <S.LeisureText>
                    From time to time I travel abroad by train, often to France
                    and Italy.
                  </S.LeisureText>
                }
              />
            </S.FourthContainer>
            </div>
          </Section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default About;
