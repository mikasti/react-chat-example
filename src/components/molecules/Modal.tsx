import React, {
    useContext, ReactChild, ReactFragment, ReactPortal,
} from 'react';
import '../../assets/css/common/modal.scss';
import ThemeContext from '../context/AppContext';
import MakeThemeClassName from '../helpers/MakeThemeClassname';
import Close from '../atom/common/Close';

interface IProps {
    children: ReactChild | ReactChild[] | ReactFragment | ReactPortal | boolean | null | undefined;
    onClose: () => void;
}

const Modal: React.FC<IProps> = ({ children, onClose }) => {
    const { isDarkTheme } = useContext(ThemeContext);
    const modalClassName = MakeThemeClassName("modal", isDarkTheme);
    const modalContentClassName = MakeThemeClassName("modal-content", isDarkTheme);

    return (
        <div className="modal">
            <div className={modalContentClassName}>
                <Close className='modal-close' onClose={onClose} />
                {children}
            </div>
        </div>
    )
};

export default Modal;
