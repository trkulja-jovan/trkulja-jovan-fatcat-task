import React from 'react';

import UserBasicInfo from '../models/UserBasicInfo';

interface UserListProps {
    title: string;
    options: UserBasicInfo[];
}

const UserList: React.FC<UserListProps> = ({
    title,
    options,
}: UserListProps) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
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
        </div>
    );
};

export default UserList;
