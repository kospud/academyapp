import { useForm } from 'antd/es/form/Form';
import React from 'react'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utills/consts';
import { RedButton } from '../PageBlocks';
import { FormContainer, FormContent, FormHeader, StyledForm, FormInput, FormLinks, FormLink, InputDescription } from './FormComponents';
import { Form } from 'antd';


function PasswordResetPage() {
    const [form] = useForm();

    const onFormFinish = (values: any) => {
        alert('Обработка события формы восстановления пароля')
    }

    return (
        <FormContainer>
            <FormContent>
                <FormHeader>восстановление пароля</FormHeader>
                <StyledForm form={form} style={{ width: '100%' }} onFinish={onFormFinish}>
                    <Form.Item
                        name={'mail'}
                        rules={[{
                            required: true, message: 'Укажите почту'
                        },
                        {
                            type: 'email',
                            message: 'Некорректная почта'
                        }]}>
                        <FormInput placeholder='EMAIL' />
                    </Form.Item>
                    <InputDescription>Введите Email, указанный при регистрации, нажмите кнопку “ОТПРАВИТЬ” мы вышлем вам инструкции на указанную почту</InputDescription>
                </StyledForm>

                <RedButton onClick={() => form.submit()} hover>Отправить</RedButton>
                <FormLinks>
                    <FormLink to={LOGIN_ROUTE}>Вход</FormLink>
                    <FormLink to={REGISTRATION_ROUTE}>Регистрация</FormLink>
                </FormLinks>
            </FormContent>
        </FormContainer>
    )
}

export default PasswordResetPage