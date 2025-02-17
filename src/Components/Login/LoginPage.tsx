import { Form, message } from 'antd'
import { MAIN_ROUTE, PASSWORD_RESET_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'
import { useForm } from 'antd/es/form/Form'
import { RedButton, responsiveText } from '../PageBlocks'
import { useDispatch } from 'react-redux'
import { login, User } from '../../store/userSlice'
import { useNavigate } from 'react-router-dom'
import { FormContainer, FormContent, FormHeader, StyledForm, FormInput, FormLinks, FormLink } from './FormComponents'
import PasswordResetPage from './PasswordResetPage'
import { useLoginMutation, UserSignInResult } from '../../generated-types'



function LoginPage() {

  const [loginMutation, { data, loading, error }] = useLoginMutation()
  const [form] = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFormFinish = (values: any) => {

    loginMutation({
      variables: {
        data: {
          email: values.mail,
          password: values.password
        }

      },
      onCompleted: (data, clientOptions) => {

        localStorage.setItem('academy-token', data.signInUser.token ?? '')
        const userObject: User = {
          firstname: data.signInUser.user.name,
          surname: data.signInUser.user.surname,
          mail: data.signInUser.user.email,
          //id: data.signInUser.user.id,
          photo: ''
        }
        dispatch(login(userObject))
        navigate(MAIN_ROUTE)
      },
      onError(error) {
        message.error(error.message)
      }
    })
  }

  return (
    <FormContainer>
      <FormContent>
        <FormHeader>Авторизация</FormHeader>
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
          <Form.Item
            name={'password'}
            rules={[{
              required: true, message: 'Введите пароль'
            },]}>
            <FormInput placeholder='Пароль' type='password' />
          </Form.Item>
        </StyledForm>
        <RedButton onClick={() => form.submit()} hover>Вход</RedButton>
        <FormLinks>
          <FormLink to={REGISTRATION_ROUTE}>Регистрация</FormLink>
          <FormLink to={PASSWORD_RESET_ROUTE}>Забыли пароль</FormLink>
        </FormLinks>
      </FormContent>
    </FormContainer>
  )
}

export default LoginPage