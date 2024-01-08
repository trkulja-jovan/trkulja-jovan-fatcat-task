import React from 'react';
import 'bulma/css/bulma.min.css';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');
const queryClient = new QueryClient();

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <App />
                </Router>
            </QueryClientProvider>
        </React.StrictMode>
    );
}
