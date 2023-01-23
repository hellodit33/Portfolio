import ReactFullpage from '@fullpage/react-fullpage';
import { Container, Paragraph, TextContainer, Title } from '../../components/common/styled';
import { Typewriter } from 'react-simple-typewriter';
import fridgeease from '../../assets/images/fridgeease.png'
import * as S from './styled'
type Props = {

}

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
                                <Paragraph>My latest project is a React Native fullstack app. It helps users to empty their fridges. They can log what food they have left at home, and find recipes that match their fridge content. There is also a shopping list function so that the user can add missing ingredients from recipes, and from the general food database. Finally, one can also save favorite recipes, and filter recipes upon allergies, diets, occasions and type of meal.</Paragraph>
                                <Paragraph>The UX was made in group at school, and I coded the app's backend and frontend on my own.</Paragraph>
                                <Paragraph>You can download the app on your Android phone here</Paragraph>
                                <Paragraph>Github repository</Paragraph>
                                <Paragraph>Figma prototype (group work)</Paragraph>
                                <Typewriter words={["Scroll to find out about more projects"]}
                                    loop={true}
                                    typeSpeed={100} />

                            </TextContainer>
                            <S.Image src={fridgeease} />
                        </Container>

                    </div>
                    <div className="section" style={{ backgroundColor: '#292929' }}>
                        <Container>

                            <TextContainer>
                                <Title>Hint Onboarding</Title>
                                <Paragraph>As I worked for the streaming recommendation startup Hint and studied Frontend, I developed a MERN CRUD website to onboard people on the streaming discovery platform.</Paragraph>
                                <Paragraph>The users can share their streaming recommendations to their friends on a feed, add pictures and links, edit their profile, go through the onboarding questions process, and get streaming recommendations.</Paragraph>

                                <Paragraph>Here is the website https://hint-onboarding-app.herokuapp.com/</Paragraph>
                                <Paragraph>Github repository https://github.com/hellodit33/fullstack-mern</Paragraph>
                            </TextContainer>

                        </Container>
                    </div>

                    <div className="section" style={{ backgroundColor: '#6fa037' }}>
                        <Container>
                            <TextContainer>
                                <Title>Bookclub App</Title>
                                <Paragraph>I first worked as a journalist after my journalism studies, between 2017 and 2021.</Paragraph>
                                <Paragraph>After that I worked as an Editorial and Marketing Manager for the film recommendation startup Hint in Stockholm. There I used my knowledge in film and journalism. Later on I also worked with front-end development and UX at the same startup.</Paragraph>
                                <Paragraph>Nowadays I work as a Front-end developer at Redmind where I work with website and app development (React + React Native).</Paragraph>
                                <Paragraph>What I love most in Front-end development is to build real-life projects that have impact on people. I love using my creativity to make sure UX will be great for users, and I love that I can see the results of my job more of less right away.</Paragraph>
                            </TextContainer>

                        </Container>
                    </div>

                    <div className="section" style={{ backgroundColor: '#44703b' }}>
                        <Container>

                            <TextContainer>
                                <Title>What do I do during my free time?</Title>
                                <Paragraph>When I have free time I watch films, and I continue writing on a scenario.</Paragraph>
                                <Paragraph>I also play theater every week with a French-speaking Theater organization that I started back in January 2020. We have public representations twice a year (in French with Swedish subtitles).</Paragraph>
                                <Paragraph>I do some front-end development to help friends with their projects, and to work on some startup ideas I have.</Paragraph>
                                <Paragraph>I do a lot of organic growing (vegetables and flowers) in a shared garden as soon as the weather permits it in Stockholm.</Paragraph>
                                <Paragraph>I'm often busy reading books, and I also discuss literature with two bookclubs. I often go to the theater and opera.</Paragraph>
                                <Paragraph>From time to time I travel abroad by train, often to France and Italy.</Paragraph>
                            </TextContainer>

                        </Container>
                    </div>
                </ReactFullpage.Wrapper >
            );
        }}
    />
);
export default Portfolio