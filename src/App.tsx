import React, { useEffect } from 'react';
import AppRouter from './Components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, store } from './store/store';
import AppThemeProvider from './Components/ThemeProvider';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import { isMobileOnly } from 'react-device-detect';
import Auth from './Components/Auth';
import { setOrientation } from './store/orientationSlice';
import { ConfigProvider } from 'antd';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import client from './ApolloClient';


function App() {

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ConfigProvider theme={{

          token: {
            //Размеры экранов:
            //Мобилка
            screenXSMin: 375,
            screenXSMax: 599,
            screenXS: 375,

            //Планшеты
            screenSMMin: 600,
            screenSMMax: 1023,
            screenSM: 600,

            //Старые компы с низким разрешением
            screenMDMin: 1024,
            screenMDMax: 1365,
            screenMD: 1024,

            //Компы
            screenLGMin: 1366,
            screenLGMax: 1919,
            screenLG: 1366,

            //Далее под высокие разрешения, посмотрим, пригодятся или нет, но без них ant ругается
            screenXLMin: 1920,
            screenXLMax: 2560,
            screenXL: 1920,

            screenXXLMin: 2560,
            screenXXL: 2560
          }

        }}>
          <BrowserRouter basename='academyapp'>
            <AppThemeProvider>
              <Auth>
                <AppRouter />
              </Auth>
            </AppThemeProvider>
          </BrowserRouter>
        </ConfigProvider>
      </Provider >
    </ApolloProvider>

  );
}

export default App;
