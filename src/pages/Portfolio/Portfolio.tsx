import { useEffect, useRef, useState } from "react";
import {
  Center,
  FrontParagraph,
  Paragraph,
  SectionTitle,
  Space,
  Subtitle,
} from "../../components/common/styled";
import * as S from "./styled";
import "animate.css";
import colors from "../../theme/colors";
import fridgeease from "../../assets/images/fridgeease.png";
import hintonboarding from "../../assets/images/hintonboarding.png";
import bookclub from "../../assets/images/bookclub.png";
import lillaateljen from "../../assets/images/lillaateljen.png";
import dagsforfranska from "../../assets/images/dagsforfranska.png";
import moveat from "../../assets/images/moveat.webp";
import moveat2 from "../../assets/images/moveat.png";
import multisoft from "../../assets/images/multisoft.png";
import multisoftlogo from "../../assets/images/multisoftlogo.png";
import multisoftmain from "../../assets/images/multisoftmain.png";
import klimatologo from "../../assets/images/klimatologo.png";
import klimatomain from "../../assets/images/klimatomain.png";
import klimato from "../../assets/images/klimato.png";
import fridgeease2 from "../../assets/images/fridgeease2.png";
import bookclub2 from "../../assets/images/bookclub2.png";
import lillaateljen2 from "../../assets/images/lillaateljen2.png";
import dagsforfranska2 from "../../assets/images/dagsforfranska2.png";
import hintonboarding2 from "../../assets/images/hintonboarding2.png";
import firstprojects from "../../assets/images/firstprojects.png";
import firstprojects2 from "../../assets/images/firstprojects2.png";
import appstore from "../../assets/images/app.png";
import playstore from "../../assets/images/googleplay.png";
import moveatlogo from "../../assets/images/moveatLogo.png";
import expo from "../../assets/images/expo.png";
import github from "../../assets/images/github.png";
import figma from "../../assets/images/figma.png";
import hint from "../../assets/images/hint.png";
import lillaateljenlogo from "../../assets/images/lillaateljenlogo.png";
import dags from "../../assets/images/dags.png";

const Portfolio = () => {
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 365) {
      setIsSmallMobile(true);
    } else {
      setIsSmallMobile(false);
    }
  };

  const handleArrowClick = () => {
    const nextSlide = document.getElementById("next-slide");
    if(nextSlide !== null) {
    nextSlide.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSectionButtonClick = (section: number) => {
    if (containerRef.current) {
      const sections =
        containerRef.current.querySelectorAll<HTMLElement>(".full-section");
      const sectionWidth = sections[0].offsetWidth;
      if (section >= 0 && section < sections.length) {
        containerRef.current.scrollTo({
          left: section * sectionWidth,
          behavior: "smooth",
        });
      }
    }
  };

  let content = [
    {
      title: "My works",
      color: colors.green_highlight,
      section: 0,
      body: (
        <S.MainWrapper>
          <SectionTitle>Portfolio</SectionTitle>
          <Space />
          <S.First>
            <S.WorkContainer>
              <S.Works>
              <Subtitle>Work</Subtitle>
              {!isSmallMobile && <Space />}
              <S.MobileWorks>
              <Center>
              <S.WorkImage
                onClick={() => handleSectionButtonClick(1)}
                src={multisoft}
              ></S.WorkImage>
              <Space />
              <S.WorkHeader>
                Right now: Front-end Developer at Multisoft.
              </S.WorkHeader>
              </Center>
              <Space x={2} />
              <S.PreviousWork>
              <Center>
              <S.WorkImage
                onClick={() => handleSectionButtonClick(2)}
                src={moveat2}
              ></S.WorkImage>
                <Space/>
              <S.WorkHeader>
                Previously: Software Developer at Redmind for Moveat.
              </S.WorkHeader>
              
              </Center>
           <Center>
              <S.WorkImage
                onClick={() => handleSectionButtonClick(3)}
                src={klimato}
              ></S.WorkImage>
                <Space/>
              <S.WorkHeader>
                Previously: Front-end Developer for Klimato.
              </S.WorkHeader>
              </Center>
              </S.PreviousWork>
              </S.MobileWorks>
              </S.Works>
            </S.WorkContainer>
            <div>
              <Subtitle>Personal Projects</Subtitle>
              {!isSmallMobile && <Space />}
              <S.ProjectsContainer>
                <S.ProjectContainer>
                  <S.ProjectImage
                    onClick={() => handleSectionButtonClick(4)}
                    src={fridgeease2}
                  ></S.ProjectImage>
                  <S.ProjectHeader>
                    FridgeEase - React Native app with MongoDB and NodeJS
                  </S.ProjectHeader>
                </S.ProjectContainer>
                <S.ProjectContainer>
                  <S.ProjectImage
                    onClick={() => handleSectionButtonClick(5)}
                    src={bookclub2}
                  ></S.ProjectImage>
                  <S.ProjectHeader>
                    The Bookclub app - React Native app with MongoDB and NodeJS
                  </S.ProjectHeader>
                </S.ProjectContainer>
                <S.ProjectContainer>
                  <S.ProjectImage
                    onClick={() => handleSectionButtonClick(6)}
                    src={hintonboarding2}
                  ></S.ProjectImage>
                  <S.ProjectHeader>
                    Hint Onboarding - React app with MongoDB and NodeJS
                  </S.ProjectHeader>
                </S.ProjectContainer>
                <S.ProjectContainer>
                  <S.ProjectImage
                    onClick={() => handleSectionButtonClick(7)}
                    src={lillaateljen2}
                  ></S.ProjectImage>
                  <S.ProjectHeader>
                    Lilla Ateljen - website in vanilla JavaScript and SCSS
                  </S.ProjectHeader>
                </S.ProjectContainer>
                <S.ProjectContainer>
                  <S.ProjectImage
                    onClick={() => handleSectionButtonClick(8)}
                    src={dagsforfranska2}
                  ></S.ProjectImage>
                  <S.ProjectHeader>
                    Dags för franska - website in vanilla JavaScript and CSS
                  </S.ProjectHeader>
                </S.ProjectContainer>
                <S.ProjectContainer>
                  <S.ProjectImage
                    onClick={() => handleSectionButtonClick(9)}
                    src={firstprojects2}
                  ></S.ProjectImage>
                  <S.ProjectHeader>First front-end projects</S.ProjectHeader>
                </S.ProjectContainer>
              </S.ProjectsContainer>
            </div>
          </S.First>
          {isVisible && (
            <S.ArrowIcon onClick={handleArrowClick}>
              <S.ArrowIconTop></S.ArrowIconTop>
              <S.ArrowIconBottom></S.ArrowIconBottom>
            </S.ArrowIcon>
          )}
        </S.MainWrapper>
      ),
    },
    {
      title: "Multisoft",
      color: colors.dags,
      section: 1,
      body: (
        <S.WrapperContainer  id="next-slide">
          <S.FirstWrapper>
            <div>
              <S.ProjectTitle>Multisoft</S.ProjectTitle>
              <S.Image src={multisoftmain}></S.Image>
            </div>
            <div>
              <Paragraph>
                Today I work as a Front-end Developer in the R&D team at Multisoft. I further develop the low-code platform
                Softadmin. It uses standard components enabling great flexibility and scalability, 
                and is used by clients such as Volvo, Ica, Scania, Samhall, Länsförsäkringar and Swedbank.
              </Paragraph>
              <Space />
              <Paragraph>
                In my everyday work I use TypeScript and Less, together with C# and T-SQL.
              </Paragraph>
            </div>
          </S.FirstWrapper>

          <S.SecondWrapper>
            <S.LinkContainer>
             
          

              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://multisoft.com/"
              >
                <S.LinkImage src={multisoftlogo} />
              </S.Link>
            </S.LinkContainer>
            <S.NotesWrapper>
              <S.TechStackList>
                <S.TechListTitle>Tech Stack:</S.TechListTitle>
                <S.TechListItem>TypeScript</S.TechListItem>
                <S.TechListItem>Less (CSS)</S.TechListItem>
                <S.TechListItem>C#</S.TechListItem>
                <S.TechListItem>T-SQL</S.TechListItem>
              </S.TechStackList>
            </S.NotesWrapper>
          </S.SecondWrapper>
        </S.WrapperContainer>
      ),
    },
    {
      title: "Moveat",
      color: colors.moveat,
      section: 2,
      body: (
        <S.WrapperContainer  id="next-slide">
          <S.FirstWrapper>
            <div>
              <S.ProjectTitle>Moveat</S.ProjectTitle>
              <S.Image src={moveat}></S.Image>
            </div>
            <div>
              <Paragraph>
                Previously, I worked at Redmind for the client Moveat, a total food
                experience that helps users to capture, share, and discover food
                experience with their family and friends.
              </Paragraph>
              <Space />
              <Paragraph>
                I worked on the app (React Native), the website and the dashboard
                (React), developing new functions together with the client and
                the team on an iterative process. I worked on the redesign of
                the dashboard and the queue line function.
              </Paragraph>
            </div>
          </S.FirstWrapper>

          <S.SecondWrapper>
            <S.LinkContainer>
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://apps.apple.com/us/app/moveat/id1478405704"
              >
                <S.LinkImage src={appstore} />
              </S.Link>
              <Space />
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.letsmoveat.app"
              >
                <S.LinkImage src={playstore} />
              </S.Link>
              <Space />

              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://moveat.co/om-moveat/"
              >
                <S.LinkImage src={moveatlogo} />
              </S.Link>
            </S.LinkContainer>
            <S.NotesWrapper>
              <S.TechStackList>
                <S.TechListTitle>Tech Stack:</S.TechListTitle>
                <S.TechListItem>React </S.TechListItem>
                <S.TechListItem>React Native</S.TechListItem>
                <S.TechListItem>TypeScript</S.TechListItem>
                <S.TechListItem>NodeJS</S.TechListItem>
                <S.TechListItem>Firebase</S.TechListItem>
                <S.TechListItem>Figma</S.TechListItem>
                <S.TechListItem>Shortcut</S.TechListItem>
              </S.TechStackList>
            </S.NotesWrapper>
          </S.SecondWrapper>
        </S.WrapperContainer>
      ),
    },
    {
      title: "Klimato",
      color: colors.klimato,
      section: 3,
      body: (
        <S.WrapperContainer  id="next-slide">
          <S.FirstWrapper>
            <div>
              <S.ProjectTitle>Klimato</S.ProjectTitle>
              <S.Image src={klimatomain}></S.Image>
            </div>
            <div>
              <Paragraph>
                Previously, I worked as a Front-end Developer for Klimato's Life Cycle Analysis prototype. 
                It is a fullstack application, and it makes it possible to calculate the carbon footprint of different food products.
              </Paragraph>
              <Space />
              <Paragraph>
                I developed the app on my own with React and Typescript, as well as styled components for the styling and Node.js and MongoDB for the back-end.
                I also produced the UX and UI work on my own before developing the app. I worked in collaboration with the LCA expert at Klimato and the CTO.
              </Paragraph>
            </div>
          </S.FirstWrapper>

          <S.SecondWrapper>
            <S.LinkContainer>
             
              <Space />

              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.klimato.co/"
              >
                <S.LinkImage src={klimatologo} />
              </S.Link>
            </S.LinkContainer>
            <S.NotesWrapper>
              <S.TechStackList>
                <S.TechListTitle>Tech Stack:</S.TechListTitle>
                <S.TechListItem>React </S.TechListItem>
                <S.TechListItem>TypeScript</S.TechListItem>
                <S.TechListItem>NodeJS</S.TechListItem>
                <S.TechListItem>MongoDB</S.TechListItem>
                <S.TechListItem>Figma</S.TechListItem>
                <S.TechListItem>Trello</S.TechListItem>
              </S.TechStackList>
            </S.NotesWrapper>
          </S.SecondWrapper>
        </S.WrapperContainer>
      ),
    },
    {
      title: "FridgeEase",
      color: colors.fridge,

      section: 4,

      body: (
        <S.WrapperContainer>
          <S.FirstWrapper>
            <div>
              <S.ProjectTitle>FridgeEase</S.ProjectTitle>
              <S.Image src={fridgeease}></S.Image>
            </div>

            <Paragraph>
              My latest personal project is a React Native fullstack app. It
              helps users to empty their fridges. They can log what food they
              have left at home, and find recipes that match their fridge
              content.
              <Space />
              There is also a shopping list function so that the user can add
              missing ingredients and go shopping. One can also save favorite
              recipes, and filter recipes upon allergies, diets, occasions and
              type of meal.
              <Space />
              The UX was a group work at school, and I developed the app's
              backend and frontend on my own.
            </Paragraph>
          </S.FirstWrapper>
          <S.SecondWrapper>
            <S.LinkContainer>
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://expo.dev/@hellodit33/FridgeEase?serviceType=classic&distribution=expo-go"
              >
                <S.LinkImage src={expo} />
              </S.Link>
              <Space />
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/hellodit33/FridgeEase"
              >
                <S.LinkImage src={github} />
              </S.Link>
              <Space />

              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.figma.com/file/6d50XZEt16kwW6hdGGaTSn/UX-Grupp?node-id=0%3A1"
              >
                <S.LinkImage src={figma} />
              </S.Link>
            </S.LinkContainer>

            <S.NotesWrapper>
              <S.TechStackList>
                <S.TechListTitle>Tech Stack: </S.TechListTitle>

                <S.TechListItem>React Native</S.TechListItem>
                <S.TechListItem>TypeScript</S.TechListItem>
                <S.TechListItem>NodeJS</S.TechListItem>
                <S.TechListItem>MongoDB</S.TechListItem>
                <S.TechListItem>Expo</S.TechListItem>

                <S.TechListItem>Figma</S.TechListItem>
              </S.TechStackList>
            </S.NotesWrapper>
          </S.SecondWrapper>
        </S.WrapperContainer>
      ),
    },
    {
      title: "Bookclub",
      color: colors.bookclub,
      section: 5,
      body: (
        <S.WrapperContainer>
          <S.FirstWrapper>
            <div>
              <S.ProjectTitle>The Bookclub</S.ProjectTitle>
              <S.Image src={bookclub}></S.Image>
            </div>
            <div>
              <Paragraph style={{ color: "white" }}>
                I'm developing an app for my two different bookclubs (React
                Native, NodeJS, MongoDB).
                <Space />
                It will be possible to log the next bookclub book and rate it,
                create the bookclub event with maps and time, chat between
                bookclub members and add book suggestions for the next bookclub
                book.
              </Paragraph>
            </div>
          </S.FirstWrapper>
          <S.SecondWrapper>
            <S.LinkContainer>
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/hellodit33/BookClub-App"
              >
                <S.LinkImage src={github} />
              </S.Link>
              <Space />

              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.figma.com/file/FDLqBtnRFrVVJSQboqTPAs/Bookclub-app?node-id=0%3A1&t=YiihhYygk1gjKTwM-1"
              >
                <S.LinkImage src={figma} />
              </S.Link>
            </S.LinkContainer>

            <S.NotesWrapper>
              <S.TechStackList>
                <S.TechListTitle>Tech Stack: </S.TechListTitle>
                <S.TechListItem>React Native</S.TechListItem>
                <S.TechListItem>JavaScript</S.TechListItem>
                <S.TechListItem>NodeJS</S.TechListItem>
                <S.TechListItem>MongoDB</S.TechListItem>
                <S.TechListItem>Figma</S.TechListItem>
              </S.TechStackList>
            </S.NotesWrapper>
          </S.SecondWrapper>
        </S.WrapperContainer>
      ),
    },
    {
      title: "Hint Onboarding",
      color: colors.hint,
      section: 6,
      body: (
        <S.WrapperContainer>
          <S.FirstWrapper>
            <div>
              <S.ProjectTitle>Hint Onboarding</S.ProjectTitle>
              <S.Image src={hintonboarding}></S.Image>
            </div>
            <div>
              <Paragraph>
                As I worked for the streaming recommendation startup Hint and
                studied Frontend, I developed a{" "}
                <S.Link
                  href="https://hint-onboarding-app.herokuapp.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  website
                </S.Link>{" "}
                (React, MongoDB, NodeJS) to onboard people on the streaming
                discovery platform.
                <Space />
                The users can share their streaming recommendations to their
                friends on a feed, add pictures and links, edit their profile,
                go through the onboarding questions process, and get streaming
                recommendations.
              </Paragraph>
            </div>
          </S.FirstWrapper>
          <S.SecondWrapper>
            <S.LinkContainer>
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://hint-onboarding-app.herokuapp.com"
              >
                <S.LinkImage src={hint} />
              </S.Link>
              <Space />
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/hellodit33/fullstack-mern"
              >
                <S.LinkImage src={github} />
              </S.Link>
            </S.LinkContainer>

            <S.NotesWrapper>
              <S.TechStackList>
                <S.TechListTitle>Tech Stack: </S.TechListTitle>

                <S.TechListItem>React</S.TechListItem>
                <S.TechListItem>JavaScript</S.TechListItem>
                <S.TechListItem>NodeJS</S.TechListItem>
                <S.TechListItem>MongoDB</S.TechListItem>
              </S.TechStackList>
            </S.NotesWrapper>
          </S.SecondWrapper>
        </S.WrapperContainer>
      ),
    },
    {
      title: "Lilla Ateljen",
      color: colors.dark_beige,
      section: 7,
      body: (
        <S.WrapperContainer>
          <S.FirstWrapper>
            <div>
              <S.ProjectTitle>Lilla Ateljen</S.ProjectTitle>
              <S.Image src={lillaateljen}></S.Image>
            </div>
            <div>
              <Paragraph>
                This{" "}
                <S.Link
                  rel="noopener noreferrer"
                  href="https://lilla-ateljen.netlify.app/"
                >
                  website
                </S.Link>{" "}
                is a first webshop draft for a friend who makes ceramic pottery.
                The user can find ceramics to buy with detailed pages for each
                article and a zoom function on the pictures, info to contact the
                seller and social media links.
                <Space />
                When hovering over each ceramic article's picture, the user can
                also see the other side of it.
              </Paragraph>
            </div>
          </S.FirstWrapper>

          <S.SecondWrapper>
            <S.LinkContainer>
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://lilla-ateljen.netlify.app/"
              >
                <S.LinkImage src={lillaateljenlogo} />
              </S.Link>
              <Space />
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/hellodit33/Lilla-Ateljen"
              >
                <S.LinkImage src={github} />
              </S.Link>
            </S.LinkContainer>

            <S.NotesWrapper>
              <S.TechStackList>
                <S.TechListTitle>Tech Stack: </S.TechListTitle>

                <S.TechListItem>HTML</S.TechListItem>
                <S.TechListItem>SCSS</S.TechListItem>
                <S.TechListItem>JavaScript</S.TechListItem>
              </S.TechStackList>
            </S.NotesWrapper>
          </S.SecondWrapper>
        </S.WrapperContainer>
      ),
    },
    {
      title: "Dags för franska",
      color: colors.dags,
      section: 8,
      body: (
        <S.WrapperContainer>
          <S.FirstWrapper>
            <div>
              <S.ProjectTitle>Dags för franska</S.ProjectTitle>
              <S.Image src={dagsforfranska}></S.Image>
            </div>
            <div>
              <Paragraph>
                I developed a website for my podcast{" "}
                <S.Link
                  rel="noopener noreferrer"
                  href="https://www.dagsforfranska.com"
                >
                  Dags för franska
                </S.Link>{" "}
                so that the audience can find the vocabulary lists in French and
                the scripts.
                <Space />
                The podcast aims at helping Swedes to learn French. I produced
                it with my friend Christian Bardeau and we had episodes for
                every level: beginner, intermediary and fluent. It was up and
                running from 2016 to 2018 and from 2021 to 2022.
              </Paragraph>
            </div>
          </S.FirstWrapper>
          <S.SecondWrapper>
            <S.LinkContainer>
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.dagsforfranska.com"
              >
                <S.LinkImage src={dags} />
              </S.Link>
              <Space />
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/hellodit33/Dags-for-franska"
              >
                <S.LinkImage src={github} />
              </S.Link>
            </S.LinkContainer>

            <S.NotesWrapper>
              <S.TechStackList>
                <S.TechListTitle>Tech Stack: </S.TechListTitle>

                <S.TechListItem>HTML</S.TechListItem>
                <S.TechListItem>CSS</S.TechListItem>
                <S.TechListItem>JavaScript</S.TechListItem>
              </S.TechStackList>
            </S.NotesWrapper>
          </S.SecondWrapper>
        </S.WrapperContainer>
      ),
    },
    {
      title: "First Front-end Projects",
      color: "white",
      section: 9,
      body: (
        <S.WrapperFrontContainer>
          <S.FirstFrontWrapper>
            <div>
              <S.ProjectTitle>First Front-end Projects</S.ProjectTitle>
              <S.FrontImage src={firstprojects}></S.FrontImage>
            </div>
            <S.FrontGrid>
              <FrontParagraph>
                In a group work, I worked on the backend of a CRUD app called
                Tripshare. The idea behind Tripshare is an idea I've had for a
                startup project. This website lets tourists post and find shared
                car trips in Iceland. The API is built on Strapi and the CMS
                used for writers is Wordpress.
                <S.Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/hellodit33/Tripshare-Wordpress-Strapi-API"
                >
                  <S.LinkImage src={github} />
                </S.Link>
              </FrontParagraph>
            </S.FrontGrid>
          </S.FirstFrontWrapper>
          <S.SecondFrontWrapper>
            <FrontParagraph>
              I learnt Flutter through a Freecodecamp's course.
              {!isSmallMobile && <Space />}
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/hellodit33/flutter-course"
              >
                <S.LinkImage src={github} />
              </S.Link>
              {!isSmallMobile && <Space />}I finished Colt Steele's course The
              Web Development Bootcamp on Udemy with the YelpCamp project.
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/hellodit33?tab=repositories"
              >
                <S.LinkImage src={github} />
              </S.Link>
              <Space />
              In group work, I worked on a React E-commerce website (with SASS).
              The fictional goal was to sell giftcards.
              <Space />
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Nabizadehse/Gifted.com"
              >
                <S.LinkImage alt="github" src={github} />
              </S.Link>
              {!isSmallMobile && <Space />}
              For a UX course I made a
              <S.Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.figma.com/proto/t16uDNox64VgMqKvGYPU0n/Prototype?node-id=2%3A8&starting-point-node-id=2%3A8"
              >
                <S.LinkImage alt="figma" src={figma} />
              </S.Link>
              prototype after user research. The fictional client was a dark
              kitchen so every meal would come from one restaurant. I chose to
              focus on a healthy food app because user research proved needs in
              this area.
            </FrontParagraph>
          </S.SecondFrontWrapper>
        </S.WrapperFrontContainer>
      ),
    },
  ];

  return (
    <S.ScrollContainer
      className="section animate__animated animate__fadeInDown"
      ref={containerRef}
    >
      {[...Array(content.length)].map((_, index) => (
        <S.FullSection
          key={index}
          className="full-section"
          style={{ backgroundColor: content[index].color }}
        >
          <div>{content[index].body}</div>
        </S.FullSection>
      ))}
    </S.ScrollContainer>
  );
};

export default Portfolio;
