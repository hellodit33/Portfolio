import { Container, Image, Paragraph, TextContainer, Title } from '../../components/common/styled'
import profilepic from '../../assets/images/elodie.jpg'
import books from '../../assets/images/books.png'
import computer from '../../assets/images/computer.png'
import watch from '../../assets/images/watch.png'
import ReactFullpage from '@fullpage/react-fullpage';
import { Typewriter } from "react-simple-typewriter";

type Props = {
}

const About = ({ }: Props) => (
    <ReactFullpage
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {

            return (
                <ReactFullpage.Wrapper>

                    <div className="section" style={{ backgroundColor: '#00ab55' }}>
                        <Container>
                            <TextContainer>
                                <Title>Hi!</Title>
                                <Paragraph>My name is Elodie Pradet and I'm 28.</Paragraph>
                                <Paragraph>I'm a front-end developer, currently working at the design and technology venture studio Redmind based in Stockholm.</Paragraph>

                                <Typewriter words={["Scroll to get to know more about me"]}
                                    loop={true}
                                    typeSpeed={100} />

                            </TextContainer>
                            <Image src={profilepic} />
                        </Container>

                    </div>
                    <div className="section" style={{ backgroundColor: '#b455b0' }}>
                        <Container>
                            <Image src={books} />
                            <TextContainer>
                                <Title>What did I study?</Title>
                                <Paragraph>I have four bachelor degrees: in Political Science, Sociology, Journalism & Film Studies. </Paragraph>
                                <Paragraph>Since 2021 I study Front-End development at the professional school KYH in Stockholm. I will graduate in May 2023.</Paragraph>
                                <Paragraph>I love studying languages and have therefore also studied Italian, Icelandic and Arabic.</Paragraph>
                                <Paragraph>My mother tongue is French and I speak Swedish & English fluently. I have a good level in Italian and German while I'm at beginner level in Arabic and Icelandic</Paragraph>
                            </TextContainer>

                        </Container>
                    </div>

                    <div className="section" style={{ backgroundColor: '#3fa7ca' }}>
                        <Container>
                            <TextContainer>
                                <Title>Where did I work?</Title>
                                <Paragraph>I first worked as a journalist after my journalism studies, between 2017 and 2021.</Paragraph>
                                <Paragraph>After that I worked as an Editorial and Marketing Manager for the film recommendation startup Hint in Stockholm. There I used my knowledge in film and journalism. Later on I also worked with front-end development and UX at the same startup.</Paragraph>
                                <Paragraph>Nowadays I work as a Front-end developer at Redmind where I work with website and app development (React and React Native).</Paragraph>
                                <Paragraph>What I love most in Front-end development is to build real-life projects that have impact on people. I love using my creativity to make sure UX will be great for users, and I love that I can see the results of my job more of less right away.</Paragraph>
                            </TextContainer>
                            <Image src={computer} />
                        </Container>
                    </div>

                    <div className="section" style={{ backgroundColor: '#20bf55' }}>
                        <Container>
                            <Image src={watch} />
                            <TextContainer>
                                <Title>What do I do during my free time?</Title>
                                <Paragraph>When I have free time I watch films, and I continue writing on a scenario.</Paragraph>
                                <Paragraph>I also play theater every week with a French-speaking Theater organization that I started back in January 2020. We have public representations twice a year (in French with Swedish subtitles).</Paragraph>
                                <Paragraph>I do some front-end development to help friends with their projects, and to work on some startup ideas I have.</Paragraph>
                                <Paragraph>I do a lot of organic growing (vegetables and flowers) in a shared garden as soon as the weather permits it in Stockholm.</Paragraph>
                                <Paragraph>I'm often busy reading books, and I also discuss literature with two book clubs. I often go to the theater and opera.</Paragraph>
                                <Paragraph>From time to time I travel abroad by train, often to France and Italy.</Paragraph>
                            </TextContainer>

                        </Container>
                    </div>
                </ReactFullpage.Wrapper >
            );
        }}
    />
);
export default About