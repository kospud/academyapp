import React from 'react';
import AppRouter from './Components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppThemeProvider from './Components/ThemeProvider';
import styled from 'styled-components';
import Navbar from './Components/Navbar';

const AppContainer = styled.div`
  width: 100svw;
  height: 100svh;
  overflow: hidden;
  display: flex;
  background-color: ${(props) => props.theme.colors.secondary}
`

const AppContent = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename='academyapp'>
        <AppThemeProvider>
          <AppContainer>
            <Navbar />
            <AppContent>

              <AppRouter />

            </AppContent>
          </AppContainer>
        </AppThemeProvider>
      </BrowserRouter>
    </Provider >

  );
}

export default App;
