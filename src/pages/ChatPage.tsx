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
import { useGetProfileQuery } from '../api/userMessagesApi';

const ChatPage: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState<TAppComponents>(null);
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);
  const [allMessages, setAllMessages] = useState<IMessage[]>([]);
  const [filterMessages, setFilterMessages] = useState<IMessage[]>([]);
  const [showUserProfile, setShowUserProfile] = useState<IUser | null>(null);
  const [isShowWriteMessage, setIsShowWriteMessage] = useState<boolean>(false);
  const [isShowSearchPanel, setIsShowSearchPanel] = useState<boolean>(false);
  const [newUserMessage, setNewUserMessage] = useState<string | null>(null);

  const { data, isFetching, isError } = useGetProfileQuery();
  const currentUser = data ?? null;
  const { userMessages, isLoading, error } = useGetMessages(currentUser);

  useEffect(() => {
    setAllMessages(userMessages);
    setFilterMessages(userMessages);
  }, [userMessages]);

  useEffect(() => {
    if (newUserMessage && currentUser) {
      const newMessageArr = [...allMessages, makeSubmitUserMessage(currentUser, newUserMessage)];

      setAllMessages(newMessageArr);
      setFilterMessages(newMessageArr);
      setNewUserMessage(null);
    }

  }, [newUserMessage, currentUser, allMessages])

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
  }, [currentUser, allMessages]);

  const handleSearchInfo = useCallback((searchText: string, mode: 'Text' | 'User') => {
    if (mode === 'Text') {
      const filteredMessages = allMessages.filter((item) => item.content.message.toLowerCase().includes(searchText.toLowerCase()));
      setFilterMessages(filteredMessages);
    }
    else if (mode === 'User') {
      const filteredMessages = allMessages.filter((item) => item.author.name.toLowerCase().includes(searchText.toLowerCase()));
      setFilterMessages(filteredMessages);
    }
  }, [allMessages]);

  if (error || isError) {
    return <h2>{`Error :(`}</h2>
  }

  if (isLoading || isFetching) {
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
