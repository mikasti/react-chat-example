import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// @ts-ignore
const container: HTMLElement = document.getElementById('root');
const root = createRoot(container);

if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./__mocks__/browser');
    worker.start()
}

root.render(<App />);