import React, { useMemo, useContext } from 'react';
import { IUser } from '../../../types/MainTypes';
import ThemeContext from '../../context/AppContext';
import UserInitialsImage from '../../atom/common/UserInitialsImage';
import MakeThemeClassName from '../../helpers/MakeThemeClassname';
import Button from '../../atom/common/Button';
import '../../../Assets/CSS/userCard/user-profile.scss';

type TMainPanelData = Pick<IUser, 'image' | 'name' | 'bio' | 'isOnline'> & { onReturnClick?: () => void };

// Example of Molecules
const UserProfile: React.FC<TMainPanelData> = ({
  image, name = 'Some User', bio, isOnline, onReturnClick,
}) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const mainPanelClassName = MakeThemeClassName('user-profile', isDarkTheme);
  const imgClassName = MakeThemeClassName('user-img', isDarkTheme);
  const userClassName = MakeThemeClassName('user-name', isDarkTheme);
  const bioClassname = MakeThemeClassName('user-bio', isDarkTheme);
  const statusClassName = MakeThemeClassName('user-status', isDarkTheme);

  // eslint-disable-next-line jsx-a11y/img-redundant-alt
  const imgComp = image ? <img src={image} className={imgClassName} alt="user profile picture" />
    : <UserInitialsImage name={name} imgClassName={imgClassName} />;
  const bioComp = bio && <div className={bioClassname}>{bio}</div>;
  const buttonLabel = isOnline ? 'Online' : 'Offline';

  return (
    <div className={mainPanelClassName}>
      {imgComp}
      <div className={userClassName}>{name}</div>
      {bioComp}
      <Button className={statusClassName} label={buttonLabel} disabled={!isOnline} onClick={onReturnClick} />
    </div>
  );
};

export default UserProfile;
