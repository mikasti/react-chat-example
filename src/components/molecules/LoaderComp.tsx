import React from 'react';
import Loader from '../atom/Loader';
import '../../assets/css/common/loader/loader-comp.scss';

interface IProps {
  loadingText?: string
}

const LoaderComp: React.FC<IProps> = ({ loadingText = '' }) => (
  <div className="loader-comp">
    <Loader />
    <div className="loader-text">{loadingText}</div>
  </div>
);

export default LoaderComp;
