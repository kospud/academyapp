import React from 'react'
import { FormContainer, FormContent, FormHeader, FormInput, FormLink, FormLinks, StyledForm } from './FormComponents';
import { useForm } from 'antd/es/form/Form';
import { LOGIN_ROUTE, MAIN_ROUTE, PASSWORD_RESET_ROUTE } from '../../utils/consts';
import { RedButton } from '../PageBlocks';
import { Form } from 'antd';

function RegistrationPage() {
    const [form] = useForm();
    const onFormFinish=(values: any)=>{
      alert('Обработка события формы регистрации')
    }
  
    return (
        <FormContainer>
          <FormContent>
          <FormHeader>Регистрация</FormHeader>
            <StyledForm form={form} style={{width: '100%'}} onFinish={onFormFinish}>
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
                <FormInput placeholder='ваше имя' />
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
                <FormInput placeholder='EMAIL' />
              </Form.Item>
              <Form.Item
                name={'password'}
                rules={[{
                  required: true, message: 'Введите пароль'
                },]}>
                <FormInput placeholder='Пароль' type='password' />
              </Form.Item>
            </StyledForm>
            <RedButton onClick={()=>form.submit()} hover>Регистрация</RedButton>
            <FormLinks>
              <FormLink to={LOGIN_ROUTE}>Вход</FormLink>
              <FormLink to={PASSWORD_RESET_ROUTE}>Забыли пароль</FormLink>
            </FormLinks>
          </FormContent>
        </FormContainer>
    )
}

export default RegistrationPage