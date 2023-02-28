import { useRef, useState } from "react";
import { Paragraph, SectionTitle, Subtitle } from "../../components/common/styled";
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
import fridgeease2 from "../../assets/images/fridgeease2.png";
import bookclub2 from "../../assets/images/bookclub2.png";
import lillaateljen2 from "../../assets/images/lillaateljen2.png";
import dagsforfranska2 from "../../assets/images/dagsforfranska2.png";
import hintonboarding2 from "../../assets/images/hintonboarding2.png";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(1);
  const moveatRef = useRef<HTMLElement | null>(null);
  const fridgeeaseRef = useRef<HTMLElement | null>(null);
  const hintonboardingRef = useRef<HTMLElement | null>(null);
  const bookclubRef = useRef<HTMLElement | null>(null);
  const lillaateljenRef = useRef<HTMLElement | null>(null);
  const dagsforfranskaRef = useRef<HTMLElement | null>(null);

  const handleSectionButtonClick = (section: number) => {
    setActiveSection(section);
    setCurrentSection(section);
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




  const scrollToSection = (section: number) => {
    switch (section) {
      case 1:
        if (moveatRef.current) {
          moveatRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case 2:
        if (fridgeeaseRef.current) {
          fridgeeaseRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case 3:
        if (hintonboardingRef.current) {
          hintonboardingRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case 4:
        if (bookclubRef.current) {
          bookclubRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case 5:
        if (lillaateljenRef.current) {
          lillaateljenRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case 6:
        if (dagsforfranskaRef.current) {
          dagsforfranskaRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        break;
    }
  };

  let content = [
    {
      title: "My works",
      color: colors.beige,
      section: 0,
      next: 0,
      body: (
        <S.MainWrapper>
          <SectionTitle>Portfolio</SectionTitle>
          <S.First>
            <S.WorkContainer>
              <Subtitle>Work</Subtitle>
              <S.WorkImage
                onClick={() => handleSectionButtonClick(1)}
                src={moveat2}
              ></S.WorkImage>
              <S.WorkHeader>
                I'm working at Redmind for the client Moveat right now - on the
                React Native app and the React website with TypeScript and
                Firebase.
              </S.WorkHeader>
            </S.WorkContainer>
            <div>
            <Subtitle>Personal Projects</Subtitle>
            <S.ProjectsContainer>

              <S.ProjectContainer>
                <S.ProjectImage
                  onClick={() => handleSectionButtonClick(2)}
                  src={fridgeease2}
                ></S.ProjectImage>
                <S.ProjectHeader>
                  FridgeEase - React Native app with MongoDB and NodeJS
                </S.ProjectHeader>
              </S.ProjectContainer>
              <S.ProjectContainer>
                <S.ProjectImage
                  onClick={() => handleSectionButtonClick(3)}
                  src={bookclub2}
                ></S.ProjectImage>
                <S.ProjectHeader>
                  The Bookclub app - React Native app with MongoDB and NodeJS
                </S.ProjectHeader>
              </S.ProjectContainer>
              <S.ProjectContainer>
                <S.ProjectImage
                  onClick={() => handleSectionButtonClick(4)}
                  src={hintonboarding2}
                ></S.ProjectImage>
                <S.ProjectHeader>
                  Hint Onboarding - React app with MongoDB and NodeJS
                </S.ProjectHeader>
              </S.ProjectContainer>
              <S.ProjectContainer>
                <S.ProjectImage
                  onClick={() => handleSectionButtonClick(5)}
                  src={lillaateljen2}
                ></S.ProjectImage>
                <S.ProjectHeader>
                  Lilla Ateljen - website in vanilla JavaScript and CSS
                </S.ProjectHeader>
              </S.ProjectContainer>
              <S.ProjectContainer>
                <S.ProjectImage
                  onClick={() => handleSectionButtonClick(6)}
                  src={dagsforfranska2}
                ></S.ProjectImage>
                <S.ProjectHeader>
                  Dags för franska - website in vanilla JavaScript and CSS
                </S.ProjectHeader>
              </S.ProjectContainer>
            <S.ProjectContainer>
                <S.ProjectImage
                  onClick={() => handleSectionButtonClick(7)}
                  src={dagsforfranska2}
                ></S.ProjectImage>
                <S.ProjectHeader>
                 First projects - on Github
                </S.ProjectHeader>
              </S.ProjectContainer>
      
              </S.ProjectsContainer>
</div>
          </S.First>
        </S.MainWrapper>
      ),
    },
    {
      title: "Moveat",
      color: colors.moveat,

      section: 1,
      next: 1,
      body: (
        <S.WrapperContainer>
          <S.FirstWrapper>
            <div>
              <S.ProjectTitle>Moveat</S.ProjectTitle>
              <S.Image src={moveat}></S.Image>
            </div>
            <div>
              <Paragraph>
                My latest project is a React Native fullstack app. It helps
                users to empty their fridges. They can log what food they have
                left at home, and find recipes that match their fridge content.
                There is also a shopping list function so that the user can add
                missing ingredients and go shopping. One can also save favorite
                recipes, and filter recipes upon allergies, diets, occasions and
                type of meal.
              </Paragraph>
              <Paragraph>
                The UX was made in group at school, and I coded the app's
                backend and frontend on my own.
              </Paragraph>
            </div>
          </S.FirstWrapper>
          <S.WrapperLinks>
            <Paragraph>
              Download the app on your Android phone{" "}
              <S.Link href="https://expo.dev/@hellodit33/FridgeEase?serviceType=classic&distribution=expo-go">
                here
              </S.Link>
            </Paragraph>
            <S.Link href="https://github.com/hellodit33/FridgeEase">
              Github Repository
            </S.Link>
            <S.Link href="https://www.figma.com/file/6d50XZEt16kwW6hdGGaTSn/UX-Grupp?node-id=0%3A1">
              Figma prototype (group work)
            </S.Link>
            <S.TechStack>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Figma</li>
            </S.TechStack>
          </S.WrapperLinks>
        </S.WrapperContainer>
      ),
    },
    {
      title: "FridgeEase",
      color: colors.fridge,

      section: 2,
      next: 2,

      body: (
        <S.WrapperContainer>
          <S.FirstWrapper>
            <div>
              <S.ProjectTitle>FridgeEase</S.ProjectTitle>
              <S.Image src={fridgeease}></S.Image>
            </div>
            <div>
              <Paragraph>
                My latest project is a React Native fullstack app. It helps
                users to empty their fridges. They can log what food they have
                left at home, and find recipes that match their fridge content.
                There is also a shopping list function so that the user can add
                missing ingredients and go shopping. One can also save favorite
                recipes, and filter recipes upon allergies, diets, occasions and
                type of meal.
              </Paragraph>
              <Paragraph>
                The UX was made in group at school, and I coded the app's
                backend and frontend on my own.
              </Paragraph>
            </div>
          </S.FirstWrapper>
          <S.WrapperLinks>
            <Paragraph>
              Download the app on your Android phone{" "}
              <S.Link href="https://expo.dev/@hellodit33/FridgeEase?serviceType=classic&distribution=expo-go">
                here
              </S.Link>
            </Paragraph>
            <S.Link href="https://github.com/hellodit33/FridgeEase">
              Github Repository
            </S.Link>
            <S.Link href="https://www.figma.com/file/6d50XZEt16kwW6hdGGaTSn/UX-Grupp?node-id=0%3A1">
              Figma prototype (group work)
            </S.Link>
            <S.TechStack>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Figma</li>
            </S.TechStack>
          </S.WrapperLinks>
        </S.WrapperContainer>
      ),
    },
    {
      title: "Bookclub",
      color: colors.bookclub,

      section: 3,
      next: 3,

      body: (
        <S.WrapperContainer>
          <S.FirstWrapper>
            <div>
          <S.ProjectTitle>The Bookclub</S.ProjectTitle>
            <S.Image src={bookclub}></S.Image>
            </div>
            <div>
              <Paragraph>
                I'm developing an app for my two different bookclubs (React
                Native).
              </Paragraph>
              <Paragraph>
                It will be possible to log the next bookclub book and rate it,
                create the bookclub event with maps and time, chat between
                bookclub members and add book suggestions for the next bookclub
                book.
              </Paragraph>
            </div>
          </S.FirstWrapper>
          <div>
            <S.Link href="https://github.com/hellodit33/BookClub-App">
              Github repository
            </S.Link>
            <S.Link href="https://www.figma.com/file/FDLqBtnRFrVVJSQboqTPAs/Bookclub-app?node-id=0%3A1&t=YiihhYygk1gjKTwM-1">
              Figma
            </S.Link>
            <S.TechStack>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Figma</li>
            </S.TechStack>
          </div>
        </S.WrapperContainer>
      ),
    },
    {
      title: "Hint Onboarding",
      color: colors.hint,

      section: 4,
      next: 4,

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
                <S.Link href="https://hint-onboarding-app.herokuapp.com">
                  MERN CRUD website
                </S.Link>{" "}
                to onboard people on the streaming discovery platform.
              </Paragraph>
              <Paragraph>
                The users can share their streaming recommendations to their
                friends on a feed, add pictures and links, edit their profile,
                go through the onboarding questions process, and get streaming
                recommendations.
              </Paragraph>
            </div>
          </S.FirstWrapper>

          <div>
            <S.Link href="https://github.com/hellodit33/fullstack-mern">
              Github Repository
            </S.Link>
            <S.TechStack>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Figma</li>
            </S.TechStack>
          </div>
        </S.WrapperContainer>
      ),
    },
    {
      title: "Lilla Ateljen",
      color: colors.lilla,

      section: 5,
      next: 5,

      body: (
        <S.WrapperContainer>
          <S.FirstWrapper>
            <div>
              <S.ProjectTitle>Lilla Ateljen</S.ProjectTitle>
              <S.Image src={lillaateljen}></S.Image>
            </div>
            <div>
              <Paragraph>
                As I worked for the streaming recommendation startup Hint and
                studied Frontend, I developed a{" "}
                <S.Link href="https://hint-onboarding-app.herokuapp.com">
                  MERN CRUD website
                </S.Link>{" "}
                to onboard people on the streaming discovery platform.
              </Paragraph>
              <Paragraph>
                The users can share their streaming recommendations to their
                friends on a feed, add pictures and links, edit their profile,
                go through the onboarding questions process, and get streaming
                recommendations.
              </Paragraph>
            </div>
          </S.FirstWrapper>

          <div>
            <S.Link href="https://github.com/hellodit33/fullstack-mern">
              Github Repository
            </S.Link>
            <S.TechStack>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Figma</li>
            </S.TechStack>
          </div>
        </S.WrapperContainer>
      ),
    },
    {
      title: "Dags för franska",
      color: colors.dags,

      section: 6,
      next: 6,

      body: (
        <S.WrapperContainer>
          <S.FirstWrapper>
            <div>
              <S.ProjectTitle>Dags för franska</S.ProjectTitle>
              <S.Image src={dagsforfranska}></S.Image>
            </div>
            <div>
              <Paragraph>
                As I worked for the streaming recommendation startup Hint and
                studied Frontend, I developed a{" "}
                <S.Link href="https://hint-onboarding-app.herokuapp.com">
                  MERN CRUD website
                </S.Link>{" "}
                to onboard people on the streaming discovery platform.
              </Paragraph>
              <Paragraph>
                The users can share their streaming recommendations to their
                friends on a feed, add pictures and links, edit their profile,
                go through the onboarding questions process, and get streaming
                recommendations.
              </Paragraph>
            </div>
          </S.FirstWrapper>

          <div>
            <S.Link href="https://github.com/hellodit33/fullstack-mern">
              Github Repository
            </S.Link>
            <S.TechStack>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Figma</li>
            </S.TechStack>
          </div>
        </S.WrapperContainer>
      ),
    },

    {
      title: "first projects",
            color: colors.lilla,

      section: 7,
      next: 7,

      body: (
        <S.WrapperContainer>
          <S.FirstWrapper>
          <div>
          <S.ProjectTitle>First Projects</S.ProjectTitle>

            <S.Image src={lillaateljen}></S.Image>
</div>
            <div>
              <Paragraph>
                I learnt Flutter through a Freecodecamp's course.{" "}
                <S.Link href="https://github.com/hellodit33/flutter-course">
                  Github repository
                </S.Link>
              </Paragraph>
              <Paragraph>
                I finished Colt Steele's course The Web Development Bootcamp on
                Udemy with the YelpCamp project.{" "}
                <S.Link href="https://github.com/hellodit33?tab=repositories">
                  Github repository
                </S.Link>
              </Paragraph>
              <Paragraph>
                In a group work, I worked on the backend of a CRUD app called
                Tripshare. The idea behind Tripshare is an idea I've had for a
                startup project. This website lets tourists post and find shared
                car trips in Iceland. The API is built on Strapi and the CMS
                used for writers is Wordpress.{" "}
                <S.Link href="https://github.com/hellodit33/Tripshare-Wordpress-Strapi-API">
                  Github repository
                </S.Link>{" "}
              </Paragraph>
            </div>
          </S.FirstWrapper>
          <div>
            <Paragraph>
              In group work, I worked on a React E-commerce website (with SASS).
              The fictional goal was to sell giftcards.
              <S.Link href="https://github.com/Nabizadehse/Gifted.com">
                Github repository
              </S.Link>{" "}
            </Paragraph>
            <Paragraph>
              For a UX course I made{" "}
              <S.Link href="https://www.figma.com/proto/t16uDNox64VgMqKvGYPU0n/Prototype?node-id=2%3A8&starting-point-node-id=2%3A8">
                a Figma prototype{" "}
              </S.Link>
              after user research. The fictional client was a dark kitchen so
              every meal would come from one restaurant. I chose to focus on a
              healthy food app because user research proved needs in this area.
            </Paragraph>
          </div>
        </S.WrapperContainer>
      ),
    },
  ];

  return (
    <S.ScrollContainer ref={containerRef}>
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
