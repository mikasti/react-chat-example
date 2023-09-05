import React, { useEffect, useCallback, useContext, useState } from 'react';
import { IUser } from '../../types/MainTypes';
import UserProfile from '../molecules/userCard/UserProfile';
import UserData from '../molecules/userCard/UserData';
import AppContext from '../context/AppContext';
import Button from '../atom/common/Button';
import OnlyUserMessages from '../molecules/userChat/OnlyUserMessages';

interface IUserCard {
  profile: IUser,
  onReturnClick?: (profile: null) => void,
}

const UserCard: React.FC<IUserCard> = ({ profile, onReturnClick }) => {
  const [isShowUserMessages, setIsShowUserMessages] = useState<boolean>(false);

  const {
    name, bio, image, isOnline, nick, eMail, phone, userUID,
  } = profile;

  const handleReturnClick = useCallback(() => {
    if (onReturnClick) {
      onReturnClick(null);
    }
  }, []);

  const handleShowUserMessages = () => {
    console.log('handleShowUserMessages');
    setIsShowUserMessages(!isShowUserMessages);
  };

  return (
    <>
      <UserProfile
        name={name}
        bio={bio}
        isOnline={isOnline}
        image={image}
        onReturnClick={handleReturnClick}
      />
      <UserData
        nick={nick}
        eMail={eMail}
        phone={phone}
      />
      <div>
        <Button
          className='user-chat-message-submit-button'
          label={(!isShowUserMessages) ? 'Show user messages' : 'Hide user messages'}
          onClick={handleShowUserMessages}
        />
        {isShowUserMessages && userUID && <OnlyUserMessages uid={userUID} />}
      </div>

    </>
  );
};

export default UserCard;
