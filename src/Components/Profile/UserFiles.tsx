import React from 'react'
import styled from 'styled-components'
import { ButtonContainer, UserProfileBlockHeader, UserProfileBlockStyle } from './Blocks'
import { ContentTypes, LessonMaterial, Matertials } from '../Module/Lesson'
import { RedButton } from '../PageBlocks'
import { isMobile } from 'react-device-detect'
import { MobileBreakPoint } from '../../utils/consts'

const UserFilesContainer = styled.div`
    ${UserProfileBlockStyle}

    
`

const UserMaterials=styled(Matertials)`
    width: 40%;

    @media (max-width: ${MobileBreakPoint}){
        width: 100%;
    }
`
const userMaterials = [
    {
        title: 'Презентация урока',
        link: '/Презентация с уроками.pdf',
        materialType: ContentTypes.file
    },
    {
        title: 'Презентация урока',
        link: '/Презентация с уроками.pdf',
        materialType: ContentTypes.file
    },
    {
        title: 'Ссылка',
        link: 'https://www.awwwards.com',
        materialType: ContentTypes.link
    }
]

function UserFiles() {
    return (
        <UserFilesContainer>
            <UserProfileBlockHeader>Дополнительные<br />материалы:</UserProfileBlockHeader>
            <UserMaterials>
                {
                    userMaterials.map(material => <LessonMaterial {...material} />)
                }
            </UserMaterials>
            <ButtonContainer>
                <RedButton style={{width: isMobile? '100%' : undefined, textAlign: 'center'}} hover onClick={() => alert('Переход к файлам')}>Перейти к файлам</RedButton>
            </ButtonContainer>
        </UserFilesContainer>
    )
}

export default UserFiles