import { useMemo } from 'react';

import UserApi from '../api/UserApi';
import UserBasicInfo from '../models/UserBasicInfo';

const useFetchUsers = (): UserBasicInfo[] => {
    const { data } = UserApi().get.useUsers();
    const options = useMemo(() => {
        const users = (data || [])?.map((user) => ({
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
