import React, { useEffect } from 'react';
import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import ChatPage from './pages/ChatPage';
import './Assets/CSS/main.scss';
import { Provider } from 'react-redux';
import store from './store/store';

// Root component containing our pages

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="main">
        <MemoryRouter initialEntries={['/chat']}>
          <Routes>
            <Route path="chat" element={<ChatPage />}>
            </Route>
          </Routes>
        </MemoryRouter>
      </div>
    </Provider>
  );
};

export default App;
