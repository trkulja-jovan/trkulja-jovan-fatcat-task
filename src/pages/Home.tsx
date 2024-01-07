import React from 'react';

import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <Link to="/first-task">Go to User 42 Page</Link>
            <hr />
            <Link to="/component-generator">Go to component generator</Link>
            <hr />
        </div>
    );
};

export default Home;
