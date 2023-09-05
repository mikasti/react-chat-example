import React, { useState, useEffect, useMemo, useCallback } from 'react';
import UserCard from '../components/organisms/UserCard';
import UserWrapperTemplate from '../components/templates/UserPageTemplate';
import HeadPanel from '../components/molecules/HeadPanel';
import UserChat from '../components/organisms/UserChat';
import mockChatApi from '../__mocks__/mockChatApi';
import { IMessage } from '../types/ChatTypes';
import AppContext, { TAppComponents } from '../components/context/AppContext';
import { IUser } from '../types/MainTypes';
import Popup from '../components/molecules/Modal';
import UserChatMessage from '../components/molecules/UserChatMessage';
import MakeSubmitUserMessage from '../components/helpers/MakeSubmitUserMessage';
import UserChatSearch from '../components/organisms/UserChatSearch';
import ShowComponent from '../components/organisms/ShowComponent';

const ChatPage: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState<TAppComponents>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [userMessages, setUserMessages] = useState<IMessage[]>([]);
  const [filterMessages, setFilterMessages] = useState<IMessage[]>([]);
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);
  const [showUserProfile, setShowUserProfile] = useState<IUser | null>(null);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowSearchPanel, setIsShowSearchPanel] = useState(false);

  useEffect(() => {
    mockChatApi.getProfile()
      .then((profile) => {
        if (profile?.userUID) {
          setCurrentUser(profile);
          mockChatApi.getMessages()
            .then((data) => {
              setUserMessages(data.messages);
              setFilterMessages(data.messages);
            });
        }
      })
      .catch((err) => {
        setError(err);
      })
  }, []);

  const changeShowComponent = useCallback((showComponent: TAppComponents) => {
    setCurrentComponent(showComponent);
  }, []);

  const changeTheme = useCallback((isDark: boolean) => {
    setDarkTheme(isDark);
  }, []);

  const memoAppContext = useMemo(() => ({
    currentComponent,
    changeShowComponent,
    isDarkTheme,
    changeTheme,
  }), [currentComponent, isDarkTheme, changeShowComponent, changeTheme]);

  const handleShowUserProfile = useCallback((selectedProfile: IUser | null) => {
    setIsShowSearchPanel(false);
    setShowUserProfile(selectedProfile);
  }, []);

  const handleCloseUserProfile = useCallback(() => {
    setShowUserProfile(null);
  }, []);

  const handleOpenPopup = useCallback(() => {
    handleCloseUserProfile();
    setIsShowPopup(true);
  }, []);

  const handleClosePopup = useCallback(() => {
    setIsShowPopup(false);
  }, []);

  const handleOpenSearchPanel = useCallback(() => {
    if (isShowSearchPanel) {
      setFilterMessages(userMessages);
    }
    setIsShowSearchPanel(!isShowSearchPanel);
  }, [isShowSearchPanel]);


  const handleSubmitUserMessage = useCallback((message: string) => {
    if (currentUser) {
      const newMessageArr = [...userMessages, MakeSubmitUserMessage(currentUser, message)]
      setUserMessages(newMessageArr);
      setFilterMessages(newMessageArr);
    }
    handleClosePopup();
  }, [userMessages, currentUser]);

  const handleSearchInfo = useCallback((searchText: string, mode: 'Text' | 'User') => {
    if (mode === 'Text') {
      const filteredMessages = userMessages.filter((item) => item.content.message.toLowerCase().includes(searchText.toLowerCase()));
      setFilterMessages(filteredMessages);
    }
    else if (mode === 'User') {
      const filteredMessages = userMessages.filter((item) => item.author.name.toLowerCase().includes(searchText.toLowerCase()));
      setFilterMessages(filteredMessages);
    }
  }, [userMessages]);

  const userProfile = showUserProfile &&
    <ShowComponent renderComponent='Profile'>
      <UserCard profile={showUserProfile} onReturnClick={handleShowUserProfile} />
    </ShowComponent>

  const userChat = !showUserProfile && currentUser?.userUID &&
    <ShowComponent renderComponent='Chat'>
      <UserChat
        profileUId={currentUser.userUID}
        messages={filterMessages}
        onProfileClick={handleShowUserProfile}
      />
    </ShowComponent>

  const addMessageComponent = isShowPopup &&
    <Popup onClose={handleClosePopup}>
      <UserChatMessage onSendMessage={handleSubmitUserMessage} />
    </Popup>;

  const searchPanel = isShowSearchPanel && currentComponent === 'Chat' &&
    <UserChatSearch onSearch={handleSearchInfo} />

  if (error) {
    return <h2>{`Error :(`}</h2>
  }

  return (
    <UserWrapperTemplate>
      <AppContext.Provider value={memoAppContext}>
        <HeadPanel
          onWriteMessage={handleOpenPopup}
          onSearchMessage={handleOpenSearchPanel}
          onReturnBack={handleCloseUserProfile}
        />
        {searchPanel}
        {userChat}
        {userProfile}
        {addMessageComponent}
      </AppContext.Provider>
    </UserWrapperTemplate>
  );
};

export default ChatPage;
