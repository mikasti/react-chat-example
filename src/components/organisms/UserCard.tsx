import React, { useCallback, useContext, useState } from 'react';
import { IUser } from '../../types/MainTypes';
import UserProfile from '../molecules/userCard/UserProfile';
import UserData from '../molecules/userCard/UserData';
import AppContext from '../context/AppContext';
import Button from '../atom/common/Button';
import OnlyUserMessages from '../molecules/userChat/OnlyUserMessages';
import MakeThemeClassName from '../helpers/MakeThemeClassname';
import '../../assets/css/userCard/user-only-messages.scss';

interface IUserCard {
  profile: IUser,
}

const UserCard: React.FC<IUserCard> = React.memo(({ profile }) => {
  const { isDarkTheme } = useContext(AppContext);
  const [isShowUserMessages, setIsShowUserMessages] = useState<boolean>(false);

  const {
    name, bio, image, isOnline, nick, eMail, phone, userUID,
  } = profile;

  const handleShowUserMessages = () => {
    console.log('handleShowUserMessages');
    setIsShowUserMessages(!isShowUserMessages);
  };

  const userOnlyMessages = MakeThemeClassName('user-only-messages', isDarkTheme);

  return (
    <>
      <UserProfile
        name={name}
        bio={bio}
        isOnline={isOnline}
        image={image}
      />
      <UserData
        nick={nick}
        eMail={eMail}
        phone={phone}
      />
      <div className={userOnlyMessages}>
        <Button
          className='user-only-messages-button'
          label={(!isShowUserMessages) ? 'Show user messages' : 'Hide user messages'}
          onClick={handleShowUserMessages}
        />
        {isShowUserMessages && userUID && <OnlyUserMessages uid={userUID} />}
      </div>

    </>
  );
});

export default UserCard;
