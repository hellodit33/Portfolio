import ReactFullpage from '@fullpage/react-fullpage';
import { Container, Paragraph, TextContainer, Title } from '../../components/common/styled';
import * as S from './styled'
type Props = {

}
let links = ["https://i.imgur.com/n7l3N96.jpg", "https://i.postimg.cc/q7xjTLT1/hint2.png", "https://i.imgur.com/SMExvWy.png", "https://i.postimg.cc/Df6L6LJn/Ska-rmavbild-2022-07-06-kl-19-54-41.png"]

const Portfolio = ({ }: Props) => (

    <ReactFullpage
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {

            return (
                <ReactFullpage.Wrapper>

                    <div className="section" style={{ backgroundColor: '#A0C4FF' }}>
                        <Container>
                            <TextContainer>
                                <Title>Here are some projects</Title>
                                <Paragraph>My latest project is a React Native fullstack app. It helps users to empty their fridges. They can log what food they have left at home, and find recipes that match their fridge content. There is also a shopping list function so that the user can add missing ingredients and go shopping. One can also save favorite recipes, and filter recipes upon allergies, diets, occasions and type of meal.</Paragraph>
                                <Paragraph>The UX was made in group at school, and I coded the app's backend and frontend on my own.</Paragraph>
                                <Paragraph>Download the app on your Android phone <S.Link href="https://expo.dev/@hellodit33/FridgeEase?serviceType=classic&distribution=expo-go">here</S.Link></Paragraph>
                                <S.Link href="https://github.com/hellodit33/FridgeEase">Github Repository</S.Link>

                                <S.Link href="https://www.figma.com/file/6d50XZEt16kwW6hdGGaTSn/UX-Grupp?node-id=0%3A1">Figma prototype (group work)</S.Link>

                            </TextContainer>
                            <S.Image src={links[0]} />


                        </Container>

                    </div>
                    <div className="section" style={{ backgroundColor: '#292929' }}>
                        <Container>

                            <TextContainer>
                                <Title>Hint Onboarding</Title>
                                <Paragraph>As I worked for the streaming recommendation startup Hint and studied Frontend, I developed a <S.Link href="https://hint-onboarding-app.herokuapp.com">MERN CRUD website</S.Link> to onboard people on the streaming discovery platform.</Paragraph>
                                <Paragraph>The users can share their streaming recommendations to their friends on a feed, add pictures and links, edit their profile, go through the onboarding questions process, and get streaming recommendations.</Paragraph>
                                <S.Link href="https://github.com/hellodit33/fullstack-mern">Github Repository</S.Link>

                            </TextContainer>
                            <S.Image src={links[1]} />
                        </Container>
                    </div>

                    <div className="section" style={{ backgroundColor: '#9D5C63' }}>
                        <Container>
                            <TextContainer>
                                <Title>WIP - Bookclub App</Title>
                                <Paragraph>I'm developing an app for my two different bookclubs (React Native).</Paragraph>
                                <Paragraph>It will be possible to log the next bookclub book and rate it, create the bookclub event with maps and time, chat between bookclub members and add book suggestions for the next bookclub book.</Paragraph>
                                <S.Link href="https://github.com/hellodit33/BookClub-App">Github repository</S.Link>
                                <S.Link href="https://www.figma.com/file/FDLqBtnRFrVVJSQboqTPAs/Bookclub-app?node-id=0%3A1&t=YiihhYygk1gjKTwM-1">Figma</S.Link>
                            </TextContainer>
                            <S.Image src={links[2]} />

                        </Container>
                    </div>

                    <div className="section" style={{ backgroundColor: '#44703b' }}>
                        <Container>
                            <TextContainer>
                                <Title>First projects:</Title>
                                <Paragraph>I learnt Flutter through a Freecodecamp's course. <S.Link href="https://github.com/hellodit33/flutter-course">Github repository</S.Link></Paragraph>
                                <Paragraph>I finished Colt Steele's course The Web Development Bootcamp on Udemy with the YelpCamp project. <S.Link href="https://github.com/hellodit33?tab=repositories">Github repository</S.Link></Paragraph>
                                <Paragraph>In a group work, I worked on the backend of a CRUD app called Tripshare. The idea behind Tripshare is an idea I've had for a startup project. This website lets tourists post and find shared car trips in Iceland. The API is built on Strapi and the CMS used for writers is Wordpress. <S.Link href="https://github.com/hellodit33/Tripshare-Wordpress-Strapi-API">Github repository</S.Link> </Paragraph>
                                <Paragraph>In group work, I worked on a React E-commerce website (with SASS). The fictional goal was to sell giftcards.<S.Link href="https://github.com/Nabizadehse/Gifted.com">Github repository</S.Link> </Paragraph>
                                <Paragraph>I coded <S.Link href="https://dagsforfranska.com">a homepage</S.Link> for my podcast Dags för franska, a language podcast I make with my friend Christian Bardeau to help Swedes learn French. <S.Link href="https://github.com/hellodit33/Dags-for-franska">Github repository</S.Link></Paragraph>
                                <Paragraph>I coded <S.Link href="https://lilla-ateljen.netlify.app/">the homepage Lilla Ateljén</S.Link> for my friend Clémence's ceramic pottery shop, in a group work done for a course in HTML & SASS. <S.Link href="https://github.com/hellodit33/Lilla-Ateljen">Github repository</S.Link> <S.Link href="https://www.figma.com/file/VKI7o0XaxM7bg2iWVN2lED/Lilla-Atelj%C3%A9n?node-id=0%3A1">Figma</S.Link></Paragraph>
                                <Paragraph>For a UX course I made <S.Link href="https://www.figma.com/proto/t16uDNox64VgMqKvGYPU0n/Prototype?node-id=2%3A8&starting-point-node-id=2%3A8">a Figma prototype </S.Link>after user research. The fictional client was a dark kitchen so every meal would come from one restaurant. I chose to focus on a healthy food app because user research proved needs in this area.</Paragraph>
                            </TextContainer>
                            <S.Image src={links[3]} />
                        </Container>
                    </div>
                </ReactFullpage.Wrapper >
            );
        }}
    />
);
export default Portfolio