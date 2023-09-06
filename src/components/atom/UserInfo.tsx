import React, { useContext } from 'react';
import '../../Assets/CSS/userCard/user-info.scss';
import AppContext from '../context/AppContext';
import makeThemeClassname from '../helpers/MakeThemeClassname';

interface IProps {
  name: string,
  value: string
}

// Example of Atom component
const UserInfo: React.FC<IProps> = ({ name = 'User', value = '' }) => {
  const { isDarkTheme } = useContext(AppContext);
  const infoClassName = makeThemeClassname('user-info', isDarkTheme);
  const secInfoClassName = makeThemeClassname('user-info-secondary', isDarkTheme);
  const priInfoClassName = makeThemeClassname('user-info-primary', isDarkTheme);

  return (
    <div className={infoClassName}>
      <div className={secInfoClassName}>{name}</div>
      <div className={priInfoClassName}>{value}</div>
    </div>
  );
};

export default UserInfo;
