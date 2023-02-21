import { Column, ColumnLinks, Container, Image, IntroContainer, LinkContainer, LinkList, Links, Paragraph, Space, TextContainer, Title } from '../../components/common/styled'
import * as S from './styled'
import profilepic from '../../assets/images/elodie.jpg'
import movies from '../../assets/images/movies.png'
import theater from '../../assets/images/theater.png'
import maps from '../../assets/images/maps.png'
import computer from '../../assets/images/computer.png'
import tomat from '../../assets/images/tomat.png'
import book from '../../assets/images/book.png'
import ReactFlipCard from 'reactjs-flip-card'
import ReactFullpage from '@fullpage/react-fullpage';
import { Typewriter } from "react-simple-typewriter";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
type Props = {
}

const About = ({ }: Props) => (
    
    <ReactFullpage
        scrollingSpeed={1000}
        
        render={({ state, fullpageApi }) => {
            Aos.init();
            const styles = {
                card: { height: '200px', width:'200px', borderRadius: 30,},
            }

            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <Container>
                            <IntroContainer>
                                <Title>Elodie Pradet</Title>
                                <Title>Front-end Developer</Title>
                                <LinkContainer><LinkList><Links href="https://www.linkedin.com/in/elodie-pradet" rel="noopenner noreferrer"><FaLinkedin /></Links></LinkList>
                                    <LinkList><Links href="https://github.com/hellodit33" rel="noopenner noreferrer"><FaGithub /></Links></LinkList>

                                </LinkContainer>
                                <Typewriter words={["Scroll to get to know more about me"]}
                                    loop={true}
                                    typeSpeed={100} />

                            </IntroContainer>

                        </Container>

                    </div>
                    <div className="section">
                        <Container>
                            <TextContainer>
                                <Column>
                                    <Title>Hello 👋 </Title>
                                    <Title>I'm Élodie</Title>
                                    <Paragraph>I'm a front-end developer with a background in journalism. I'm working as a Software Developer at Redmind, a technology and venture studio based in Stockholm. Efficient, creative and passionate about film and sustainability, I love tech that improves the world.</Paragraph>
                                    <S.Linkedin><S.Link href="https://www.linkedin.com/in/elodie-pradet/" target="_blank" rel="noopener"> 👩🏻‍💻  {'  '}https://www.linkedin.com/in/elodie-pradet/</S.Link></S.Linkedin>
                                </Column>
                                <ColumnLinks>
                                    <Image src={profilepic} />
                                    <LinkContainer><LinkList><Links href="https://www.linkedin.com/in/elodie-pradet" rel="noopenner noreferrer"><FaLinkedin /></Links></LinkList>
                                        <LinkList><Links href="https://github.com/hellodit33" rel="noopenner noreferrer"><FaGithub /></Links></LinkList>

                                    </LinkContainer>
                                </ColumnLinks>
                            </TextContainer>

                        </Container>

                    </div>
                    <div className="section" >
                        <S.SecondContainer>
                          
                            <S.SubTitle>Work experience</S.SubTitle>
                            <S.WorkContainer>

                                <S.WorkParagraph style={{ justifySelf: 'flex-end' }}>I first worked as a journalist in Swedish media after my journalism studies, between 2017 and 2021. I mostly worked on social and political issues, as well as on culture subjects. I wrote an investigation piece on the culture of honor. Later on I wrote reportages from Algeria during the revolution, and from France during the Yellow Vests protests.</S.WorkParagraph>
                                <S.WorkParagraph style={{ justifySelf: 'flex-start' }}>After that I worked as an Editorial and Marketing Manager for the film recommendation startup Hint in Stockholm. There I used my knowledge in film and journalism. Later on I also worked with front-end development and UX at the same startup (2021-2022).</S.WorkParagraph>
                                <S.WorkParagraph style={{ justifySelf: 'flex-end' }}>Nowadays, since November 2022, I work as a Front-end developer at Redmind where I work with website and app development for the client Moveat (React, React Native, TypeScript, NodeJS, Firebase). I collaborate with the team and the client on an iterative process.</S.WorkParagraph>
                                <S.WorkParagraph style={{ justifySelf: 'flex-start' }}>What I love the most in Front-end development is to make impactful ideas alive, through websites and apps. I love that I can see the results of my job more or less right away.</S.WorkParagraph>

                            </S.WorkContainer>

                        </S.SecondContainer>
                    </div>

                    <div className="section" style={{ justifyContent:'flex-start'}}>
                   
                        <S.ThirdContainer>
                       
                        <S.SubTitle style={{display: 'flex', order:2, width:'40%', placeSelf:'center', justifyContent:'flex-start', alignItems: 'center', marginLeft:'-100px'}}>Studies</S.SubTitle>
                        <S.StudiesContainer>
                                <S.StudiesParagraph>🎓 I have four bachelor degrees: in Political Science, Sociology, Journalism & Film Studies. </S.StudiesParagraph>
                                <S.StudiesParagraph style={{marginTop:'140px'}}>👩🏻‍💻 Since 2021 I study Front-End development at the professional school KYH in Stockholm. I will graduate in May 2023.</S.StudiesParagraph>
                                <S.StudiesParagraph style={{marginTop:'240px' }}>❤️ I love studying languages, both coding ones and human ones.</S.StudiesParagraph>
                                <S.StudiesParagraph style={{marginTop:'340px'}}>🇫🇷 🇸🇪 🇬🇧 🇮🇹 🇩🇪 My mother tongue is French and I speak Swedish & English fluently. I have a good level in Italian and German while I'm at beginner level in Arabic and Icelandic.</S.StudiesParagraph>
                                </S.StudiesContainer>

                        </S.ThirdContainer>
                    </div>

                    <S.Section className="section">
                    <S.SubTitle style={{width:'20%'}}>Leisure time</S.SubTitle>
                        <S.FourthContainer>
                          
            
               <ReactFlipCard
            frontStyle={styles.card}
            backStyle={styles.card}
            flipTrigger="onClick"

            frontComponent={<S.LeisureImage src={movies} />}
            backComponent={<S.LeisureText>When I have free time I watch films, and I continue writing on a scenario.</S.LeisureText>}
        />
          <ReactFlipCard
            frontStyle={styles.card}
            backStyle={styles.card}
            flipTrigger="onClick"

            frontComponent={  <S.LeisureImage src={theater} />}
            backComponent={<S.LeisureText>I also play theater every week with a French-speaking Theater organization that I started back in January 2020. We have public representations twice a year (in French with Swedish subtitles).</S.LeisureText>}
            />
          <ReactFlipCard
            frontStyle={styles.card}
            backStyle={styles.card}
            flipTrigger="onClick"

            frontComponent={  <S.LeisureImage src={computer} />}
            backComponent={<S.LeisureText>I do some front-end development to help friends with their projects, and to work on some startup ideas I have.</S.LeisureText>}
        />
                <ReactFlipCard
            frontStyle={styles.card}
            backStyle={styles.card}
            flipTrigger="onClick"

            frontComponent={  <S.LeisureImage src={tomat} />}
            backComponent={ <S.LeisureText>I do a lot of organic growing (vegetables and flowers) in a shared garden as soon as the weather permits it in Stockholm.</S.LeisureText>}
        />
        <ReactFlipCard
            frontStyle={styles.card}
            backStyle={styles.card}
            flipTrigger="onClick"

            frontComponent={  <S.LeisureImage src={book} />}
            backComponent={                                <S.LeisureText>I'm often busy reading books, and I also discuss literature with two bookclubs. I often go to the theater and opera.</S.LeisureText>
        }
        />
        <ReactFlipCard
            frontStyle={styles.card}
            backStyle={styles.card}
            flipTrigger="onClick"
            frontComponent={  <S.LeisureImage src={maps} />}
            backComponent={            <S.LeisureText>From time to time I travel abroad by train, often to France and Italy.</S.LeisureText>}
        />
        
              
              


                          
                               {/* <Paragraph>When I have free time I watch films, and I continue writing on a scenario.</Paragraph>
                                <Paragraph>I also play theater every week with a French-speaking Theater organization that I started back in January 2020. We have public representations twice a year (in French with Swedish subtitles).</Paragraph>
                                <Paragraph>I do some front-end development to help friends with their projects, and to work on some startup ideas I have.</Paragraph>
                                <Paragraph>I do a lot of organic growing (vegetables and flowers) in a shared garden as soon as the weather permits it in Stockholm.</Paragraph>
                                <Paragraph>I'm often busy reading books, and I also discuss literature with two bookclubs. I often go to the theater and opera.</Paragraph>
            <Paragraph>From time to time I travel abroad by train, often to France and Italy.</Paragraph>*/}
                          

                        </S.FourthContainer>
                    </S.Section>
                </ReactFullpage.Wrapper >
            );
        }}
    />
);
export default About