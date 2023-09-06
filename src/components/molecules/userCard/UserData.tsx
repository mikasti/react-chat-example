import React, { useContext } from 'react';
import { IUser } from '../../../types/MainTypes';
import UserInfo from '../../atom/UserInfo';
import AppContext from '../../context/AppContext';
import MakeThemeClassName from '../../helpers/MakeThemeClassname';

type TBottomPanelData = Pick<IUser, | 'nick' | 'eMail' | 'phone'>;

// Example of Molecules, we connect our Atom for rendering user info

const UserData: React.FC<TBottomPanelData> = React.memo(({
  nick, eMail, phone,
}) => {
  const { isDarkTheme } = useContext(AppContext);
  const infoBlockClassName = MakeThemeClassName('user-data', isDarkTheme);
  const mapValues = [
    { name: 'Nickname', value: nick },
    { name: 'Email', value: eMail },
    { name: 'Phone', value: phone },
  ];
  const infoComp = mapValues.map((item) => {
    if (item.value) {
      return <UserInfo key={item.name} name={item.name} value={item.value} />;
    } return null;
  });
  return <div className={infoBlockClassName}>{infoComp}</div>;
});

export default UserData;
