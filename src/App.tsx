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


function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter basename='academyapp'>
        <AppThemeProvider>
          <Auth>
            <AppRouter />
          </Auth>
        </AppThemeProvider>
      </BrowserRouter>
    </Provider >

  );
}

export default App;
