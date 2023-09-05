import React from 'react';
import ChatPage from './pages/ChatPage';
import './Assets/CSS/main.scss';

// Root component containing our pages

const App: React.FC = () => {
  const chatPage = <ChatPage />;

  return (
    <div className="main">
      {chatPage}
    </div>
  );
};

export default App;
