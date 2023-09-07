import React, {
    useContext, ReactChild, ReactFragment, ReactPortal,
} from 'react';
import '../../assets/css/common/modal.scss';
import AppContext from '../context/AppContext';
import makeThemeClassName from '../helpers/makeThemeClassname';
import Close from '../atom/common/Close';

interface IProps {
    children: ReactChild | ReactChild[] | ReactFragment | ReactPortal | boolean | null | undefined;
    onClose: () => void;
}

const Modal: React.FC<IProps> = React.memo(({ children, onClose }) => {
    const { isDarkTheme } = useContext(AppContext);
    const modalClassName = makeThemeClassName("modal", isDarkTheme);
    const modalContentClassName = makeThemeClassName("modal-content", isDarkTheme);

    return (
        <div className={modalClassName}>
            <div className={modalContentClassName}>
                <Close className='modal-close' onClose={onClose} />
                {children}
            </div>
        </div>
    )
});

export default Modal;
