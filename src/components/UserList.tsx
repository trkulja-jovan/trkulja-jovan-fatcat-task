import React, { useEffect, useState } from 'react';

import useFetchUsers from '../hooks/useFetchUsers';

const UserList: React.FC = () => {
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
            {!isLoading && (
                <div>
                    <h1>User List</h1>
                    <ul>
                        {options.map((user) => (
                            <li key={user.id}>
                                <p>ID: {user.id}</p>
                                <p>Name: {user.name}</p>
                                <p>Username: {user.username}</p>
                                <p>Email: {user.email}</p>
                                <p>Phone: {user.phone}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserList;
