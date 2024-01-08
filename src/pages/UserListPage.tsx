import React, { useEffect, useState } from 'react';

import UserList from '../components/UserList';
import useFetchUsers from '../hooks/useFetchUsers';

const FirstTask: React.FC = () => {
    const options = useFetchUsers();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(options.length <= 0);
    }, [options]);

    return (
        <div>
            {isLoading && (
                <div>
                    <p>LOADING USERS....</p>
                </div>
            )}
            {!isLoading && <UserList title="User list" options={options} />}
        </div>
    );
};

export default FirstTask;
