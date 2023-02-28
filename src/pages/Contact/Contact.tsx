import {
  FullSection,
  Image,
  LinkContainer,
  LinkList,
  Links,
  Paragraph,
  ScrollContainer,
  Space,
  Title,
} from "../../components/common/styled";
import { Typewriter } from "react-simple-typewriter";
import profilepic from "../../assets/images/elodie.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import * as S from "./styled";
import colors from "../../theme/colors";

const Contact = () => {
  
      return (
      <ScrollContainer>
          <FullSection style={{backgroundColor: colors.green_highlight}}>
            <S.WrapperContainer>
              <div>
                <Title>Get in<br></br>touch with me!</Title>
                <Space />
                <Paragraph>Would you like to get in contact with me?</Paragraph>
                <Space />
                <Paragraph>Contact me at pradetelodie[at]gmail.com</Paragraph>
                <Space />

                <Typewriter
                  words={["Check out my socials:"]}
                  loop={2}
                  typeSpeed={100}
                />
                <LinkContainer>
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
              </div>
              <Image src={profilepic} />
            </S.WrapperContainer>
            </FullSection>
            </ScrollContainer>
       
      );
      }
export default Contact;
