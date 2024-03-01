import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// import stylesheet and fonts here
import '@fontsource/inter';
import '@fontsource/inter/700.css';
import './assets/main.scss';

const root = createRoot(document.getElementById("zeus") as HTMLElement)
root.render(<App/>);

