import ReactFullpage from '@fullpage/react-fullpage';
import { Container, Image, Paragraph, TextContainer, Title } from '../../components/common/styled';
import { Typewriter } from 'react-simple-typewriter';
import profilepic from '../../assets/images/elodie.jpg'
import { LinkContainer, LinkList, Links } from './styled';
import { FaTwitter, FaGithub, FaPodcast, FaLinkedin } from "react-icons/fa";

type Props = {

}

const Contact = ({ }: Props) => (
    <ReactFullpage
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {

            return (
                <ReactFullpage.Wrapper>

                    <div className="section" style={{ backgroundColor: '#44703b' }}>
                        <Container>
                            <TextContainer>
                                <Title>Get in touch!</Title>
                                <Paragraph>Would you like to get in contact with me?</Paragraph>
                                <Paragraph>Contact me at pradetelodie[at]gmail.com</Paragraph>

                                <Typewriter words={["Check out my socials:"]}
                                    loop={true}
                                    typeSpeed={100} />
                                <LinkContainer><LinkList><Links href="https://www.linkedin.com/in/elodie-pradet" rel="noopenner noreferrer"><FaLinkedin /></Links></LinkList>
                                    <LinkList><Links href="https://github.com/hellodit33" rel="noopenner noreferrer"><FaGithub /></Links></LinkList>

                                    <LinkList><Links href="https://www.dagsforfranska.com" rel="noopenner noreferrer"><FaPodcast /></Links></LinkList>

                                    <LinkList><Links href="https://twitter.com/elodiepradet" rel="noopenner noreferrer"><FaTwitter /></Links></LinkList>
                                </LinkContainer>
                            </TextContainer>
                            <Image src={profilepic} />
                        </Container>

                    </div>

                </ReactFullpage.Wrapper >
            );
        }}
    />
);
export default Contact