import React from 'react';
import ChatPage from './pages/ChatPage';
import './Assets/CSS/main.scss';

// Root component containing our pages

const App: React.FC = () => {
  return (
    <div className="main">
      <ChatPage />
    </div>
  );
};

export default App;
