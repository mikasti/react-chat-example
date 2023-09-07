import React, { useState, useEffect, useMemo, useCallback } from 'react';
import UserCard from '../components/organisms/UserCard';
import UserWrapperTemplate from '../components/templates/UserPageTemplate';
import HeadPanel from '../components/molecules/HeadPanel';
import { IMessage } from '../types/ChatTypes';
import AppContext, { TAppComponents } from '../components/context/AppContext';
import { IUser } from '../types/MainTypes';
import UserChatSearch from '../components/organisms/UserChatSearch';
import ShowComponent from '../components/organisms/ShowComponent';
import useGetMessages from '../components/hooks/useGetMessages';
import UserChat from '../components/organisms/UserChat';
import LoaderComp from '../components/molecules/LoaderComp';
import makeSubmitUserMessage from '../components/helpers/makeSubmitUserMessage';

const ChatPage: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState<TAppComponents>(null);
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);
  const [filterMessages, setFilterMessages] = useState<IMessage[]>([]);
  const [showUserProfile, setShowUserProfile] = useState<IUser | null>(null);
  const [isShowWriteMessage, setIsShowWriteMessage] = useState<boolean>(false);
  const [isShowSearchPanel, setIsShowSearchPanel] = useState<boolean>(false);
  const [newUserMessage, setNewUserMessage] = useState<string | null>(null);

  const { currentUser, userMessages, isLoading, error } = useGetMessages();

  useEffect(() => {
    setFilterMessages(userMessages);
  }, [userMessages]);

  useEffect(() => {
    if (newUserMessage && currentUser) {
      const newMessageArr = [...filterMessages, makeSubmitUserMessage(currentUser, newUserMessage)];
      setFilterMessages(newMessageArr);
      setNewUserMessage(null);
    }

  }, [newUserMessage, currentUser, filterMessages])

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

  const handleWriteMessage = useCallback(() => {
    handleCloseUserProfile();
    setIsShowWriteMessage(true);
  }, []);

  const handleClosePopup = useCallback(() => {
    setIsShowWriteMessage(false);
  }, []);

  const handleSearchPanel = useCallback(() => {
    setIsShowSearchPanel(!isShowSearchPanel);
  }, [isShowSearchPanel]);

  const handleSubmitUserMessage = useCallback((message: string) => {
    setNewUserMessage(message);
    handleClosePopup();
  }, [currentUser, userMessages]);

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

  if (error) {
    return <h2>{`Error :(`}</h2>
  }

  if (isLoading) {
    return <LoaderComp loadingText='Loading user messages...' />
  }


  const searchPanel = isShowSearchPanel && currentComponent === 'Chat' &&
    <UserChatSearch onSearch={handleSearchInfo} />

  const userChat = !showUserProfile && currentUser?.userUID &&
    <UserChat
      userUID={currentUser.userUID}
      messages={filterMessages}
      isShowAddMessage={isShowWriteMessage}
      onProfileClick={handleShowUserProfile}
      onCloseMessageAdd={handleClosePopup}
      onPostMessage={handleSubmitUserMessage}
    />

  const userProfile = showUserProfile &&
    <ShowComponent renderComponent='Profile'>
      <UserCard profile={showUserProfile} />
    </ShowComponent>

  return (
    <UserWrapperTemplate>
      <AppContext.Provider value={memoAppContext}>
        <HeadPanel
          onWriteMessage={handleWriteMessage}
          onSearchMessage={handleSearchPanel}
          onReturnBack={handleCloseUserProfile}
        />
        {searchPanel}
        {userChat}
        {userProfile}
      </AppContext.Provider>
    </UserWrapperTemplate>
  );
};

export default ChatPage;
