import React from 'react'
import { Paragraph, Title } from '../../components/common/styled'
import * as S from './styled'
import profilepic from '../../assets/images/elodie.jpg'
import ReactFullpage from '@fullpage/react-fullpage';

type Props = {
}

const About = ({ }: Props) => (
    <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <S.Container>
                            <Title>Hi</Title>
                            <S.Image src={profilepic} />
                        </S.Container>
                    </div>
                    <div className="section">
                        <p>Section 2</p>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);
export default About