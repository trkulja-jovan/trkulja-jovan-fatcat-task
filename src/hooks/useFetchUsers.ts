import { useMemo } from 'react';

import FatCatApi from '../api/FatCatApi';
import UserBasicInfo from '../models/UserBasicInfo';

const useFetchUsers = (): UserBasicInfo[] => {
    const { data } = FatCatApi().get.useApiGetUsers();
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
