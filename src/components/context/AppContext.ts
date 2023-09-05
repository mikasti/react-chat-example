import React, { createContext } from 'react';

export type TAppComponents = 'Chat' | 'Profile' | null;

type TChatContext = {
    currentComponent: TAppComponents,
    isDarkTheme: boolean,
    changeTheme: (isDark: boolean) => void,
    changeShowComponent: (component: TAppComponents) => void,
};

// @ts-ignore
const AppContext: React.Context<TChatContext> = createContext(
    {
        currentComponent: null,
        changeShowComponent: (component: TAppComponents) => console.log(component),
        isDarkTheme: false,
        changeTheme: (isDark) => console.log(isDark),
    },
);

export default AppContext;
