import ReactFullpage from '@fullpage/react-fullpage';
import { Image, LinkContainer, LinkList, Links, Paragraph, Section } from '../../components/common/styled';
import { Typewriter } from 'react-simple-typewriter';
import profilepic from '../../assets/images/elodie.jpg'
import {  FaGithub, FaLinkedin } from "react-icons/fa";
import * as S from './styled'


const Contact = () => (
    <ReactFullpage
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {

            return (
                <ReactFullpage.Wrapper>

                    <Section className="section" >
                        <S.WrapperContainer>
                           <div>
                                <h2>Get in touch!</h2>
                                <Paragraph>Would you like to get in contact with me?</Paragraph>
                                <Paragraph>Contact me at pradetelodie[at]gmail.com</Paragraph>

                                <Typewriter words={["Check out my socials:"]}
                                    loop={true}
                                    typeSpeed={100} />
                                <LinkContainer><LinkList><Links href="https://www.linkedin.com/in/elodie-pradet" rel="noopenner noreferrer"><FaLinkedin /></Links></LinkList>
                                    <LinkList><Links href="https://github.com/hellodit33" rel="noopenner noreferrer"><FaGithub /></Links></LinkList>


                                </LinkContainer>
                                </div>
                            <Image src={profilepic} />
                           
                        </S.WrapperContainer>
                       
                    </Section>

                </ReactFullpage.Wrapper >
            );
        }}
    />
);
export default Contact