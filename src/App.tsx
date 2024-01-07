import './styles.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';

import ComponentGeneratorPage from './pages/ComponentGeneratorPage';
import FirstTask from './pages/FirstTask';
import Home from './pages/Home';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/first-task" element={<FirstTask />} />
            <Route
                path="/component-generator"
                element={<ComponentGeneratorPage />}
            />
        </Routes>
    );
};

export default App;
