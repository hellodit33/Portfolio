import {
  Container,
  FullSection,
  Image,
  LinkContainer,
  LinkList,
  Links,
  Paragraph,
  ScrollContainer,
  Space,
  TextContainer,
  Title,
  Column,
} from "../../components/common/styled";
import profilepic from "../../assets/images/elodie.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import colors from "../../theme/colors";

const Contact = () => {
  return (
    <ScrollContainer className="section animate__animated animate__fadeInDown">
      <FullSection style={{ backgroundColor: colors.green_highlight }}>
        <Container>
          <TextContainer>
            <Column>
              <Title>Get in touch with me 📨</Title>
              <Space />
              <Paragraph>Would you like to get in contact with me?</Paragraph>
              <Space />
              <Paragraph>Contact me at `pradetelodie@gmail.com`</Paragraph>
              <Space />
              <div>Check out my socials:</div>
              <LinkContainer>
                <LinkList>
                  <Links
                    href="https://www.linkedin.com/in/elodie-pradet"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Links>
                </LinkList>
                <LinkList>
                  <Links
                    target="_blank"
                    href="https://github.com/hellodit33"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </Links>
                </LinkList>
              </LinkContainer>
            </Column>

            <Image src={profilepic} />
          </TextContainer>
        </Container>
      </FullSection>
    </ScrollContainer>
  );
};
export default Contact;
