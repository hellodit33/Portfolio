import  { useRef, useState } from 'react';
import { Paragraph, SectionTitle } from "../../components/common/styled";
import * as S from "./styled";
import "animate.css";
import colors from '../../theme/colors';
import fridgeease from "../../assets/images/fridgeease.png";
import hintonboarding from "../../assets/images/hintonboarding.png";
import bookclub from "../../assets/images/bookclub.png";
import lillaateljen from "../../assets/images/lillaateljen.png";
import dagsforfranska from "../../assets/images/dagsforfranska.png";
import moveat from "../../assets/images/moveat.webp";


let content = [
  {
    title: "My works",
    color: colors.purple,
    body: (
      <div>
        <SectionTitle>
          My works
        </SectionTitle>
        <S.CardsContainer>
        <S.Card>Moveat - React, React Native & TypeScript</S.Card>
          <S.Card>FridgeEase - React Native app</S.Card>
          <S.Card>Bookclub - React Native app</S.Card>
          <S.Card>Hint Onboarding - React app</S.Card>
          <S.Card>Lilla Ateljen -  HTML, CSS & JavaScript</S.Card>
          <S.Card>Dags för franska -  HTML, CSS & JavaScript</S.Card>
        </S.CardsContainer>
      </div>
    ),
  },
  { title: "Moveat",
  body: (
    <S.WrapperContainer>
      <S.FirstWrapper>
        <div>
          <S.ProjectTitle>Moveat</S.ProjectTitle>
          <S.Image src={moveat}></S.Image>

        </div>
        <div>
          <Paragraph>
            My latest project is a React Native fullstack app. It helps users
            to empty their fridges. They can log what food they have left at
            home, and find recipes that match their fridge content. There is
            also a shopping list function so that the user can add missing
            ingredients and go shopping. One can also save favorite recipes,
            and filter recipes upon allergies, diets, occasions and type of
            meal.
          </Paragraph>
          <Paragraph>
            The UX was made in group at school, and I coded the app's backend
            and frontend on my own.
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
  )},
  {
    title: "FridgeEase",
    body: (
      <S.WrapperContainer>
        <S.FirstWrapper>
          <div>
            <S.ProjectTitle>FridgeEase</S.ProjectTitle>
            <S.Image src={fridgeease}></S.Image>

          </div>
          <div>
            <Paragraph>
              My latest project is a React Native fullstack app. It helps users
              to empty their fridges. They can log what food they have left at
              home, and find recipes that match their fridge content. There is
              also a shopping list function so that the user can add missing
              ingredients and go shopping. One can also save favorite recipes,
              and filter recipes upon allergies, diets, occasions and type of
              meal.
            </Paragraph>
            <Paragraph>
              The UX was made in group at school, and I coded the app's backend
              and frontend on my own.
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
    title: "Hint Onboarding",
    body: (
      <S.WrapperContainer>
        <S.FirstWrapper>
          <div>
            <S.ProjectTitle>Hint Onboarding</S.ProjectTitle>
            <S.Image src={hintonboarding}></S.Image>

          </div>
          <div>
            <Paragraph >
              As I worked for the streaming recommendation startup Hint and
              studied Frontend, I developed a{" "}
              <S.Link
               
                href="https://hint-onboarding-app.herokuapp.com"
              >
                MERN CRUD website
              </S.Link>{" "}
              to onboard people on the streaming discovery platform.
            </Paragraph>
            <Paragraph >
                    The users can share their streaming recommendations to their
                    friends on a feed, add pictures and links, edit their
                    profile, go through the onboarding questions process, and
                    get streaming recommendations.
                  </Paragraph>
                </div>
              </S.FirstWrapper>

              <div>
                <S.Link
               
                  href="https://github.com/hellodit33/fullstack-mern"
                >
                  Github Repository
                </S.Link>
              </div>
            </S.WrapperContainer>)
  },
{
  title: 'Bookclub', 
  body: (
  <S.WrapperContainer>
    <S.FirstWrapper>
    <S.Image src={bookclub}></S.Image>

      <div>
        <Paragraph>
          I'm developing an app for my two different bookclubs (React
          Native).
        </Paragraph>
        <Paragraph>
          It will be possible to log the next bookclub book and rate
          it, create the bookclub event with maps and time, chat
          between bookclub members and add book suggestions for the
          next bookclub book.
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
    </div>
  </S.WrapperContainer>),

},
{title:'first projects', 
body: ( 
<S.WrapperContainer>
  <S.FirstWrapper>
  <S.Image src={lillaateljen}></S.Image>

  
    <div>
      <Paragraph>
        I learnt Flutter through a Freecodecamp's course.{" "}
        <S.Link href="https://github.com/hellodit33/flutter-course">
          Github repository
        </S.Link>
      </Paragraph>
      <Paragraph>
        I finished Colt Steele's course The Web Development Bootcamp
        on Udemy with the YelpCamp project.{" "}
        <S.Link href="https://github.com/hellodit33?tab=repositories">
          Github repository
        </S.Link>
      </Paragraph>
      <Paragraph>
        In a group work, I worked on the backend of a CRUD app
        called Tripshare. The idea behind Tripshare is an idea I've
        had for a startup project. This website lets tourists post
        and find shared car trips in Iceland. The API is built on
        Strapi and the CMS used for writers is Wordpress.{" "}
        <S.Link href="https://github.com/hellodit33/Tripshare-Wordpress-Strapi-API">
          Github repository
        </S.Link>{" "}
      </Paragraph>
    </div>
  </S.FirstWrapper>
  <div>
    <Paragraph>
      In group work, I worked on a React E-commerce website (with
      SASS). The fictional goal was to sell giftcards.
      <S.Link href="https://github.com/Nabizadehse/Gifted.com">
        Github repository
      </S.Link>{" "}
    </Paragraph>
    <Paragraph>
      I coded{" "}
      <S.Link href="https://dagsforfranska.com">a homepage</S.Link>{" "}
      for my podcast Dags för franska, a language podcast I make
      with my friend Christian Bardeau to help Swedes learn French.{" "}
      <S.Link href="https://github.com/hellodit33/Dags-for-franska">
        Github repository
      </S.Link>
    </Paragraph>
    <Paragraph>
      I coded{" "}
      <S.Link href="https://lilla-ateljen.netlify.app/">
        the homepage Lilla Ateljén
      </S.Link>{" "}
      for my friend Clémence's ceramic pottery shop, in a group work
      done for a course in HTML & SASS.{" "}
      <S.Link href="https://github.com/hellodit33/Lilla-Ateljen">
        Github repository
      </S.Link>{" "}
      <S.Link href="https://www.figma.com/file/VKI7o0XaxM7bg2iWVN2lED/Lilla-Atelj%C3%A9n?node-id=0%3A1">
        Figma
      </S.Link>
    </Paragraph>
    <Paragraph>
      For a UX course I made{" "}
      <S.Link href="https://www.figma.com/proto/t16uDNox64VgMqKvGYPU0n/Prototype?node-id=2%3A8&starting-point-node-id=2%3A8">
        a Figma prototype{" "}
      </S.Link>
      after user research. The fictional client was a dark kitchen
      so every meal would come from one restaurant. I chose to focus
      on a healthy food app because user research proved needs in
      this area.
    </Paragraph>
  </div>
</S.WrapperContainer>)},

]




const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(1);

  const handleSectionButtonClick = (index: number) => {
    if (containerRef.current) {
      const sections = containerRef.current.querySelectorAll<HTMLElement>('.full-section');
      const sectionWidth = sections[0].offsetWidth;
      if (index >= 0 && index < sections.length) {
        containerRef.current.scrollTo({
          left: index * sectionWidth,
          behavior: 'smooth'
        });
        sections[index].focus();
        setCurrentSection(index);
        console.log(index)
      }
    }
  };

  return (
    <S.ScrollContainer ref={containerRef}>
      {[...Array(content.length)].map((_, index) => (
        <S.FullSection key={index} className="full-section" style={{backgroundColor: content[index].color}}>
          <div>{content[index].body}</div>
          <button
            onClick={() => handleSectionButtonClick(index +1)}
          >
            Go to section {index + 1}
          </button>
        </S.FullSection>
      ))}
    </S.ScrollContainer>
  );
};

export default Portfolio;

        
         