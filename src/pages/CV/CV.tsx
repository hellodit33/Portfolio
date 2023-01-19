import React from 'react'
import * as S from './styled'
import ReactFullpage from '@fullpage/react-fullpage';
import { Title } from '../../components/common/styled';

type Props = {

}

const Contact = ({ }: Props) => (
    <ReactFullpage
        scrollingSpeed={1000}

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <S.Container>
                            <Title>CV</Title>

                        </S.Container>
                    </div>

                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Contact