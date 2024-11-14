import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { RedButton, RedLinkButton, responsiveText } from '../PageBlocks'
import { marginBottom } from '../Gaps'
import { MobileBreakPoint, TabletBreakPoint } from '../../utils/consts'
import { ButtonContainer, UserProfileBlockDescription, UserProfileBlockHeader, UserProfileBlockStyle } from './Blocks'
import { isMobile } from 'react-device-detect'

const UserActivityContainer = styled.div`
    ${UserProfileBlockStyle}
`


const Activity = styled.div`
    display: flex;
    align-items: center;
    ${marginBottom(24)}
    ${responsiveText(64,64,36)}
`

const BatteryContainer = styled.div`
    width: 4.5svw;
    aspect-ratio: 2/1;
    border: ${props => props.theme.colors.text} 3px solid;
    border-radius: 5px;
    position: relative;
    display: flex;
    align-items: center;

    &::before{
        position: absolute;
        background-color: ${props => props.theme.colors.secondary};
        top: 50%;
        right: calc(-7% - 2.5px);
        transform: translateY(-50%);
        border-right: inherit;
        border-top: inherit;
        border-bottom: inherit;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        content: '';

        height: 40%;
        width: 7%;
    }

    @media (max-width: ${TabletBreakPoint}){
        width: 10svw;
    }
    @media (max-width: ${MobileBreakPoint}){
        width: 12svw;
    }
`

const BatteryPoint = styled.div`
    width: calc(100%/9);
    height: 100%;
    position: relative;


    &::after{
        content: '';
        position: absolute;
        overflow: hidden;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-color: ${props => props.theme.colors.text};
        width: 60%;
        height: 90%;
        border-radius: 5px;
        
    }

`

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

function Battery({ points }: PropsWithChildren<{ points: Digit }>) {


    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 50"
            width="2em"
            height="1em"
        >
         <path
                d="
                    M 7 8
                    h 59
                    a 5 5 0 0 1 5 5
                    v 3
                    h 1
                    a 3 3 0 0 1 3 3
                    v 12
                    a 3 3 0 0 1 -3 3
                    h -1
                    v 3
                    a 5 5 0 0 1 -5 5
                    h -59
                    a 5 5 0 0 1 -5 -5 
                    v -24      
                    a 5 5 0 0 1 5 -5  
                    z                   "
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
            />
            { Array.from({ length: points }).map((d, index) => (
                <rect
                    key={index}
                    x={7 + index * 7}
                    y="12"
                    width="3"
                    height="26"
                    fill={"currentColor"}
                    stroke="currentColor"
                    strokeWidth="1"
                    rx='1'
                    ry='1'
                />
            ))}
        </svg>
    );
}

const ActivityName = styled.a`
    display: block;
    color: ${props => props.theme.colors.text};
    
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    margin-right: 0.5em;
`

enum ActivityStatuses{
    low='Высокая',
    middle='Средняя',
    high='Высокая'
}

const Activities: Record<number, ActivityStatuses>={
    3: ActivityStatuses.low,
    6: ActivityStatuses.middle,
    9: ActivityStatuses.high
}

//пока такая логика, надо смотреть, как это будет связывать с бэком

function activityStatus(score: number){
    if(score<=3)
        return Activities[3]
    else if(score<=6)
        return Activities[6]
    else 
        return Activities[9]
}
function UserActivity() {

    const userActivity=5
    const userActivityStatus=activityStatus(userActivity)
    return (
        <UserActivityContainer>
            <UserProfileBlockHeader>Моя активность:</UserProfileBlockHeader>
            <Activity>
                <ActivityName>{userActivityStatus}</ActivityName>
                <Battery points={userActivity} />
            </Activity>
            <UserProfileBlockDescription>Активность отражает эффективность вашего рабочего процесса обучения</UserProfileBlockDescription>
            {
                userActivityStatus!==ActivityStatuses.high && <ButtonContainer>
                    <RedButton style={{width: isMobile? '100%' : undefined, textAlign: 'center'}} hover onClick={()=>alert('Как-то повышаем активность')}>повысить активность</RedButton>
                </ButtonContainer>
            }
        </UserActivityContainer>
    )
}

export default UserActivity