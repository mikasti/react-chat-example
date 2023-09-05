import React, {
  ReactChild, ReactFragment, ReactPortal,
} from 'react';

interface IProps {
  children: ReactChild | ReactChild[] | ReactFragment | ReactPortal | boolean | null | undefined;
}


const UserWrapperTemplate: React.FC<IProps> = ({ children }) => (
  <div className="user-wrapper">
    {children}
  </div>
);

export default UserWrapperTemplate;
