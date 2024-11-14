import React, { PropsWithChildren, useState } from 'react'
import styled, { css } from 'styled-components'
import { Checkbox, Form, Input, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import parse from 'html-react-parser'
import { isDesktop, isMobile } from 'react-device-detect'
import { marginBottom } from '../../Gaps'
import { MobileBreakPoint, TabletBreakPoint } from '../../../utils/consts'
import { RedButton, RedButtonStyle, responsiveText, TextColorHovered } from '../../PageBlocks'

const FormContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
${marginBottom(90)}

`

const miniText = css`

font-weight: 500;

${responsiveText(18,18,14)}
`
const inputStyle = css`
    background-color: rgba(235, 235, 235, 0.2);
    height: 3.9svw;
    border: none;
    color: rgba(235, 235, 235, 0.4);
    ${miniText}
    padding-left: 20px;

    &::placeholder{
        color: rgba(235, 235, 235, 0.4);
    }

    @media (max-width: ${TabletBreakPoint}){

        height: 7.8svw;
}

@media (max-width: ${MobileBreakPoint}){
    height: 14.4svw;
}
`
const FormInput = styled(Input)`
${inputStyle}
`

const CheckboxSpan = styled.span`
${miniText}
color: ${props=>props.theme.colors.text}
`

const FormHeader=styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
${marginBottom(45)}
a{
    display: block;
    width: 100%;
    text-transform: uppercase;
    font-weight: 600;
    user-select: none;
    color: ${props=>props.theme.colors.text};

    ${responsiveText(36,36,18)}
}

@media (max-width: ${TabletBreakPoint}){
    width: 85%;
}

@media (max-width: ${MobileBreakPoint}){
    width: 100%;
}

`
const PriceContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`


interface CourseFormProps {
    onFinish: (values: any) => void
}
const CourseForm = ({ onFinish }: CourseFormProps) => {
    const [form] = useForm()
    const [confirmChecked, setChecked]=useState(false)
    const inputStyles: React.CSSProperties = {
        color: 'rgba(235, 235, 235, 0.4)',
        backgroundColor: 'rgba(235, 235, 235, 0.2)',
        fontWeight: 500
    }

    return <FormContainer >
        <Form form={form}
            onFinish={onFinish}
        >
            <Form.Item
                name={'name'}
                rules={[{
                    required: true,
                    message: 'Укажите имя',
                },
                {
                    pattern: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
                    message: 'Некорректное имя'
                }]}>
                <FormInput styles={{ input: inputStyles, affixWrapper: inputStyles }} placeholder='ИМЯ' />
            </Form.Item>
            <Form.Item
                name={'tel'}
                rules={[
                    {
                        required: true,
                        message: 'Укажите телефон'
                    },
                    {
                        //type: 'regexp',
                        pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                        message: 'Некорректный телефон'
                    }
                ]}>
                <FormInput styles={{ input: inputStyles }} placeholder='TEL' />
            </Form.Item>
            <Form.Item
                name={'mail'}
                rules={[{
                    required: true, message: 'Укажите почту'
                },
                {
                    type: 'email',
                    message: 'Некорректная почта'
                }]}>
                <FormInput styles={{ input: inputStyles }} placeholder='EMAIL' />
            </Form.Item>
            <Form.Item
                name={'confirm'}
                valuePropName="checked"
                rules={[{
                    validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Требуется согласие на обработку данных')),
                }
                ]}>
                <Checkbox indeterminate={confirmChecked} onChange={()=>setChecked(!confirmChecked)}><CheckboxSpan>я соглашаюсь на обработку данных</CheckboxSpan></Checkbox>
            </Form.Item>
        </Form>
        <RedButton style={{ alignSelf: 'start', marginTop: '2svw' }} hover onClick={() => form.submit()}>Оставить заявку</RedButton>
    </FormContainer>
}

interface price {
    title: string,
    price: number,
    installment: boolean,
    description?: string[]
}

const TariffContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
${marginBottom(90)}
`

const TariffButtons = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`
const TariffButton = styled.div<{ hover: boolean }>`
${RedButtonStyle}
color: ${({ hover,theme }) => hover ? theme.colors.secondary : theme.colors.text};
border: solid ${({ hover,theme }) => hover ? theme.colors.primary : theme.colors.text};
margin-right: 2svw;
margin-bottom: 2svw;

@media(max-width: ${MobileBreakPoint}){
        font-size: 3.8svw;
        padding-top: 2svw;
        padding-bottom: 2svw;
        padding-right: 5svw;
        padding-left: 5svw;
        margin-right: 5svw;
        margin-bottom: 5svw;
    }
`

const TariffPriceElement = styled.a`
font-weight: 700;
color: ${({theme})=>theme.colors.text};
text-transform: uppercase;
margin: 0;
${responsiveText(148, 148, 64)}

span{
    ${responsiveText(36, 36, 18)}
}
`
const TarrifDescription = styled.div`

    display: flex;
    
    a{
        display: block;
        text-transform: uppercase;
        ${miniText}
        color: ${({theme})=>theme.colors.text};
        font-weight: 600;
        margin-right: 2svw;
    }

    @media (max-width: ${MobileBreakPoint}){
        flex-direction: column;
    }
`
interface PriceBlockProps {
    priceList: price[]
}
//элемент с цифрами
const TariffPrice = ({ tariff }: PropsWithChildren<{ tariff: price }>) => {

    const measure = tariff.installment ? '₽/<span>мес</span>' : '₽'
    return <><TariffPriceElement>
        {tariff.price}
        {parse(measure)}
    </TariffPriceElement>
    {tariff.description && <TarrifDescription>
        {
            tariff.description.map((line)=><a>{line}</a>)
        }
    </TarrifDescription>}
    </>
}
//левая половина блока с кнопками и суммами
const Tariffs = ({priceList}: PriceBlockProps) => {

    const [selectedTariff, setSelectedTariff] = useState(priceList[0].title)

    const onClickHandler = (item: string) => {
        setSelectedTariff(item)
    }

    const getSelectedItem = () => {
        const index = priceList.findIndex((elem) => elem.title === selectedTariff);
        return priceList[index];
    }
    return <TariffContainer>
        <TariffButtons>
            {
                priceList.map((elem) => <TariffButton
                    onClick={() => onClickHandler(elem.title)}
                    hover={selectedTariff === elem.title}>{elem.title}</TariffButton>)
            }
        </TariffButtons>
        <TariffPrice tariff={getSelectedItem()} />
    </TariffContainer>
}

function PriceBlock({priceList}: PriceBlockProps) {


    const onFinishHandle = (values: any) => {
        alert('Типа успешная отправка формы')
        values.tarriff = 'тариф'
        console.log(values)
    }
    return (
        <PriceContainer>

            <Tariffs priceList={priceList}/>
            <FormHeader><a>заполните контактные данные:</a></FormHeader>
            <CourseForm onFinish={onFinishHandle} />
        </PriceContainer>
    )
}

export default PriceBlock