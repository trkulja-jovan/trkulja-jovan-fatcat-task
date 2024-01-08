import './styles.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';

import ComponentGeneratorPage from './pages/ComponentGeneratorPage';
import FormPage from './pages/FormPage';
import Home from './pages/Home';
import UserListPage from './pages/UserListPage';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-list" element={<UserListPage />} />
            <Route
                path="/component-generator"
                element={<ComponentGeneratorPage />}
            />
            <Route path="/form-page" element={<FormPage />} />
        </Routes>
    );
};

export default App;
