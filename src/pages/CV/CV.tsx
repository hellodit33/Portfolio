import React from 'react'
import * as S from './styled'
import ReactFullpage from '@fullpage/react-fullpage';
import { Section, Title } from '../../components/common/styled';

type Props = {

}

const Contact = ({ }: Props) => (
    <ReactFullpage
        scrollingSpeed={1000}

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <Section className="section">
                        <S.Container>
                        <S.ColumnContainer>

                    <S.CVTitle>💼 EXPERIENCES</S.CVTitle>
<S.MissionTitle>Frontend Developer</S.MissionTitle>
<S.DateMission>
<S.Date>November 2022 - Present </S.Date>
<S.Work>Frontend Developer</S.Work>

</S.DateMission>

<S.MissionTitle>Frontend Developer, Marketing & Editorial Manager</S.MissionTitle>
<S.DateMission>
<S.Date>April 2022 - July 2022</S.Date>
<S.Work>Frontend Developer & Marketing</S.Work>

</S.DateMission>
<S.DateMission>
<S.Date>February 2022 - April 2022</S.Date>
<S.Work>Marketing & Editorial Manager</S.Work>

</S.DateMission>
<S.DateMission>
<S.Date>August 2021 - February 2022</S.Date>
<S.Work>Editorial & Content Manager</S.Work>

</S.DateMission>

<S.DateMission>
<S.Date>June 2021 - August 2021</S.Date>
<S.Work>Editorial & Content Summer Intern</S.Work>

</S.DateMission>

<S.MissionTitle>Journalist</S.MissionTitle>
<S.DateMission>
<S.Date>2019 - 2021</S.Date>
<S.Work>Freelance journalism in Sweden, Algeria and France</S.Work>

</S.DateMission>
<S.DateMission>
<S.Date>2019</S.Date>
<S.Work>Journalist at the Swedish radio P4 Västmanland</S.Work>

</S.DateMission>

<S.DateMission>
<S.Date>2018-2019</S.Date>
<S.Work>Journalist at the Swedish newspaper Eskilstuna-Kuriren</S.Work>

</S.DateMission>

<S.DateMission>
<S.Date>2018</S.Date>
<S.Work>Journalist at the Swedish newspaper Göteborgs-Posten</S.Work>

</S.DateMission>
<S.DateMission>
<S.Date>2018</S.Date>
<S.Work>Journalist intern at Svenska Dagbladet</S.Work>

</S.DateMission>
<S.DateMission>
<S.Date>2017-2019</S.Date>
<S.Work>Nordics correspondent at the French newspaper La Croix</S.Work>

</S.DateMission>
                        </S.ColumnContainer>

<S.ColumnContainer><S.CVTitle>🏫 EDUCATION</S.CVTitle>

<S.MissionTitle>Frontend Developer</S.MissionTitle>
<S.DateMission>
<S.Date>September 2021 - May 2023 </S.Date>
<S.Work>Frontend Developer</S.Work>

</S.DateMission>
<S.MissionTitle>Free standing courses</S.MissionTitle>
<S.DateMission>
<S.Date>September 2018 - June 2022</S.Date>
<S.Work>Film musicology, Innovation and sustainable development, Introduction to tourism studies, Italian for beginners, Arabic for beginners, Icelandic for beginners, Rhetoric and Climate Transition, Climate Change and Geology, Italian A and Italian B.
</S.Work>
</S.DateMission>
<S.MissionTitle>Cinema Studies
</S.MissionTitle>
<S.DateMission>
<S.Date>September 2019 - June 2021</S.Date>
<S.Work>Bachelor Degree in film studies. Film history of the moving image, screen cultures and genres, cultural studies, ecocriticism, archival studies. Bachelor  thesis on the fictional memory of the French colonial period in Algeria.

</S.Work>

</S.DateMission></S.ColumnContainer>
                        </S.Container>
                    </Section>

                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Contact