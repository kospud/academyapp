import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { ButtonContainer, UserProfileBlockDescription, UserProfileBlockHeader, UserProfileBlockStyle } from './Blocks'
import { marginBottom, marginTop } from '../Gaps'
import { textstyle } from './UserInfo'
import { PageBlockHeader, RedButton, responsiveText } from '../PageBlocks'
import { isMobile, isMobileOnly } from 'react-device-detect'
import Popup from '../Popup'
import { MobileBreakPoint } from '../../utils/consts'

const UserBonusesContainer = styled.div`
    ${UserProfileBlockStyle}
`

const Bonuses = styled.div`
    display: flex;
    ${marginBottom(24)}
    align-items: end;
`
const Points = styled.a`
    user-select: none;
    display: block;
    color: ${props => props.theme.colors.text};
    ${responsiveText(64, 64, 36)}
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    margin-right: 10px;
`

const Info = styled.a`
    ${textstyle}
    cursor: pointer;
`

const UserBonusContainer = styled.div`
    width: 80%;
    ${marginBottom(90)}
    

    @media (max-width: ${MobileBreakPoint}){
        width: 100%;
    }
`

const UserBonusContent = styled.div`
    display: flex;
    
    @media (max-width: ${MobileBreakPoint}) {
        ${marginBottom(45)}
    }
`
const BonusImage = styled.img`
width: 60%;
aspect-ratio: 257/144;
object-fit: cover;
background-color: white;
margin-right: 2%;

@media (max-width: ${MobileBreakPoint}){
    aspect-ratio: 1/1;
    width: 43%;
}
`

const BonusInfo = styled.div`
    width: 38%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${MobileBreakPoint}){
    width: 52%;
    }
`

const BaseTextStyle = css`
    display: block;

    color: ${props => props.theme.colors.text};
`
const Amount = styled.a`
    ${BaseTextStyle}
    ${responsiveText(64, 64, 36)}
    font-weight: 700;
    ${marginBottom(24)}
    line-height: 1;
`

const Date = styled.a`
    ${BaseTextStyle}
    ${responsiveText(18, 18, 12)}
    font-weight: 600;
    ${marginBottom(45)}
`

const Description = styled.div`
    ${BaseTextStyle}
    ${responsiveText(18, 18, 12)}
`

interface UserBonusProps {
    bonus: UserBonus
}

function UserBonus({ bonus }: UserBonusProps) {

    const { date, amount, description } = bonus
    const button = <RedButton style={{width: isMobileOnly? '90%' : undefined}} hover onClick={() => alert('как-то делимся')}>Поделиться</RedButton>
    return <UserBonusContainer>
        <UserBonusContent>
            <BonusImage alt='image' />
            <BonusInfo>
                <div style={{ flexGrow: 1 }}>
                    <Amount>+{amount}</Amount>
                    <Date>{date}</Date>
                    <Description>{description}</Description>
                </div>
                {!isMobileOnly && button}
            </BonusInfo>
        </UserBonusContent>
        {isMobileOnly && button}
    </UserBonusContainer>
}


interface UserBonus {
    date: string,
    amount: number,
    description: string
}

const mockBonuses: UserBonus[] = [
    {
        date: '22.12.2023',
        amount: 100,
        description: 'Начисление за отлично пройденный курс "КАК НАПИСАТЬ ПЕСНЮ"'
    },
    {
        date: '22.12.2023',
        amount: 50,
        description: 'Еще за что-то начислили 50 баллов'
    },
    {
        date: '22.12.2023',
        amount: 100,
        description: 'Начисление за отлично пройденный курс "КАК НАПИСАТЬ ПЕСНЮ"'
    },
    {
        date: '22.12.2023',
        amount: 50,
        description: 'Еще за что-то начислили 50 баллов'
    },
]

const BonusesList = styled.div`
    ${marginTop(90)}
`
function UserBonusesPopup() {

    const bonuses = mockBonuses

    return <>
        <PageBlockHeader>Мои бонусные баллы</PageBlockHeader>
        <BonusesList>
            {
                bonuses.map(bonus => <UserBonus bonus={bonus} />)
            }
        </BonusesList>
    </>
}

function UserBonuses() {

    const [isPopupOpen, setPopupOpen] = useState(false)

    return (
        <>
            {isPopupOpen && <Popup closeHandler={() => setPopupOpen(false)}>
                <UserBonusesPopup />
            </Popup>}
            <UserBonusesContainer>
                <UserProfileBlockHeader>Мои бонусные баллы:</UserProfileBlockHeader>
                <Bonuses>
                    <Points>100</Points>
                    <Info onClick={(e) => { e.stopPropagation(); setPopupOpen(true) }}>Подробнее</Info>
                </Bonuses>
                <UserProfileBlockDescription>Бонусные баллы зачисляются за вашу активность в приложении. Вы можете поделиться ссылкой с друзьями и получить дополнительные 50 баллов.</UserProfileBlockDescription>
                <ButtonContainer>
                    <RedButton style={{ width: isMobile ? '100%' : undefined, textAlign: 'center' }} hover onClick={() => alert('Как-то делимся ссылкой')}>Поделиться ссылкой</RedButton>
                </ButtonContainer>

            </UserBonusesContainer>
        </>
    )
}

export default UserBonuses