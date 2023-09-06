import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../../assets/css/head-panel.scss';
import SearchIcon from '../atom/icons/SearchIcon';
import BackArrowIcon from '../atom/icons/BackArrowIcon';
import ChatIcon from '../atom/icons/ChatIcon';
import StarIcon from '../atom/icons/StarIcon';

interface IProps {
  onWriteMessage?: () => void,
  onSearchMessage?: () => void,
  onReturnBack?: () => void,
}

const HeadPanel: React.FC<IProps> = React.memo(({ onWriteMessage, onSearchMessage, onReturnBack }) => {
  const { currentComponent, isDarkTheme, changeTheme } = useContext(AppContext);
  const className = isDarkTheme ? 'head-panel--dark' : 'head-panel';

  const handleChangeDarkTheme = () => {
    changeTheme(!isDarkTheme);
  };

  const leftIcon = (currentComponent === 'Chat') ? <SearchIcon onClick={onSearchMessage} />
    : <BackArrowIcon onClick={onReturnBack} />

  return (
    <div className={className}>
      {leftIcon}
      <StarIcon onClick={handleChangeDarkTheme} />
      <ChatIcon onClick={onWriteMessage} />
    </div>
  );
});

export default HeadPanel;
