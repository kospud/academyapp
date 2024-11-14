import React, { useState } from 'react'
import { Page, PageBlock, PageBlockHeader, responsiveText } from '../PageBlocks'
import styled, { useTheme } from 'styled-components'
import { marginBottom } from '../Gaps'
import { ConfigProvider, Form, Switch } from 'antd'
import { MobileBreakPoint, TabletBreakPoint } from '../../utils/consts'
import { group } from 'console'
import { FormInstance, useForm } from 'antd/es/form/Form'

const SettingsBlock = styled.div`
  width: 30%;
  ${marginBottom(90)}

  @media (max-width: ${TabletBreakPoint}){
    width: 40%;
  }
  @media (max-width: ${MobileBreakPoint}){
    width: 100%;
  }
`

const SettingsBlockHeader = styled.a`
    display: block;
    text-transform: uppercase;
    ${responsiveText(36, 36, 36)}
    color: ${({ theme }) => theme.colors.text} !important;
    font-weight: 600;
    margin-bottom: 48px;
`

const SettingLine = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 24px;
font-weight: 500;
${responsiveText(18, 18, 18)}
`

const SettingHeader = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.text} !important;
  text-transform: uppercase;
  user-select: none;

  
`

enum Settings {
  allowNotifications = 'разрешить уведомления',
  lessonsRemind = 'повторное напоминание об уроках',
  standartVideoQuality = 'стандартное',
  hdVideoQuality = 'hd-видео',
  deleteFinishedLessons = 'удалять пройденные уроки',
  deleteAllDownloads = 'удалить все загрузки'
}

type ConfigType = {
  [key in keyof typeof Settings]: boolean
}

const mockConfig: ConfigType = {
  allowNotifications: true,
  lessonsRemind: false,
  standartVideoQuality: false,
  hdVideoQuality: true,
  deleteFinishedLessons: true,
  deleteAllDownloads: true
}

type typeConfigGroup = { title: string, settings: (keyof typeof Settings)[] }
const configGroups: typeConfigGroup[] = [
  {
    title: 'Уведомления',
    settings: ['allowNotifications', 'lessonsRemind']
  },
  {
    title: 'Качество видео',
    settings: ['standartVideoQuality', 'hdVideoQuality']
  },
  {
    title: 'Загрузки',
    settings: ['deleteFinishedLessons', 'deleteAllDownloads']
  }
]

const SettingsGroup = ({ group, form }: { group: typeConfigGroup, form: FormInstance<any> }) => {

  return <SettingsBlock>
    <SettingsBlockHeader>{group.title}</SettingsBlockHeader>
    {
      group.settings.map(setting => <SettingLine>
        <SettingHeader>{Settings[setting]}</SettingHeader>
        <Form.Item noStyle name={setting}>
          <Switch onChange={() => form.submit()} />
        </Form.Item>
      </SettingLine>)
    }
  </SettingsBlock>
}

function SettingsPage() {

  const theme = useTheme()
  const [form] = useForm()

  const onFinishHandler = (values: any) => {

    console.log(values)
  }

  return (
    <ConfigProvider theme={{
      components: {
        Switch: {
          colorPrimary: theme.colors.text,
          colorPrimaryHover: theme.colors.text,
          handleBg: theme.colors.primary,
          colorText: theme.colors.primary,
          algorithm: true
        },

        Form: {
          colorText: theme.colors.text,          // Отключение изменения цвета текста
          colorBgContainer: 'red', // Убираем фон
          padding: 0,                     // Убираем отступы
          margin: 0,                      // Убираем внешние отступы
          colorPrimaryHover: 'red',    // Отключение эффекта при наведении
          colorInfoTextHover: 'red'
        }
      }
    }}>
      <Page>
        <PageBlock>
          <PageBlockHeader marginBottom={90} marginTop={90}>Настройки</PageBlockHeader>
          <Form form={form} style={{ all: 'unset' }} onFinish={values => onFinishHandler(values)} initialValues={mockConfig}>
            {
              configGroups.map(group => <SettingsGroup group={group} form={form} />)
            }
          </Form>
        </PageBlock>
      </Page>
    </ConfigProvider>
  )
}

export default SettingsPage