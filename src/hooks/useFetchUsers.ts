import { useMemo } from 'react';

import FatCatApi from '../api/FatCatApi';
import User from '../models/User';
import UserBasicInfo from '../models/UserBasicInfo';

const useFetchUsers = (): UserBasicInfo[] => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const { data } = FatCatApi().get.useApiGetUsers(url);
    const options = useMemo(() => {
        const users = ((data as User[]) || [])?.map((user) => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
        }));

        return users;
    }, [data]);

    return options;
};

export default useFetchUsers;
