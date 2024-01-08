import React from 'react';

import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <Link to="/user-list">Go to user list page</Link>
            <hr />
            <Link to="/component-generator">Go to component generator</Link>
            <hr />
            <Link to="/form-page">Go to form page</Link>
            <hr />
        </div>
    );
};

export default Home;
