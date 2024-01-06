import { useQuery } from '@tanstack/react-query';

import useApi from './useApi';
import User from '../models/User';

const UserApi = () => {
    const api = useApi();
    return {
        get: {
            useUsers: () => {
                const url = 'https://jsonplaceholder.typicode.com/users';
                return useQuery<User[]>({
                    queryKey: api.cacheKey(url),
                    queryFn: () => api.get(url),
                });
            },
        },
    };
};

export default UserApi;
