import React, {
    ReactChild, ReactFragment, ReactPortal, useContext, useEffect,
} from 'react';
import AppContext, { TAppComponents } from '../context/AppContext';

interface IProps {
    renderComponent: TAppComponents,
    children: ReactChild | ReactChild[] | ReactFragment | ReactPortal | boolean | null | undefined;
}

const ShowComponent: React.FC<IProps> = ({ renderComponent, children }) => {
    const { changeShowComponent } = useContext(AppContext);

    useEffect(() => {
        changeShowComponent(renderComponent);
    }, []);

    return (
        <>
            {children}
        </>
    );
};

export default ShowComponent;