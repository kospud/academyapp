import React from 'react';
import AppRouter from './Components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppThemeProvider from './Components/ThemeProvider';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import { isMobileOnly } from 'react-device-detect';
import Auth from './Components/Auth';


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
