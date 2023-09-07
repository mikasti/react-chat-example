import React, { useContext } from 'react';
import { IUser } from '../../../types/MainTypes';
import AppContext from '../../context/AppContext';
import UserInitialsImage from '../../atom/common/UserInitialsImage';
import makeThemeClassName from '../../helpers/makeThemeClassname';
import Button from '../../atom/common/Button';
import '../../../Assets/CSS/userCard/user-profile.scss';

type TMainPanelData = Pick<IUser, 'image' | 'name' | 'bio' | 'isOnline'> & { onReturnClick?: () => void };

// Example of Molecules
const UserProfile: React.FC<TMainPanelData> = React.memo(({
  image, name = 'Some User', bio, isOnline,
}) => {
  const { isDarkTheme } = useContext(AppContext);
  const mainPanelClassName = makeThemeClassName('user-profile', isDarkTheme);
  const imgClassName = makeThemeClassName('user-img', isDarkTheme);
  const userClassName = makeThemeClassName('user-name', isDarkTheme);
  const bioClassname = makeThemeClassName('user-bio', isDarkTheme);
  const statusClassName = makeThemeClassName('user-status', isDarkTheme);

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
      <Button className={statusClassName} label={buttonLabel} disabled={!isOnline} />
    </div>
  );
});

export default UserProfile;
