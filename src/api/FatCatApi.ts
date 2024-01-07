import { useQuery, useMutation } from '@tanstack/react-query';

import useApi from './useApi';
import FormDataModel from '../models/FormDataModel';
import User from '../models/User';

const FatCatApi = () => {
    const api = useApi();
    return {
        get: {
            useApiGetUsers: () => {
                const url = 'https://jsonplaceholder.typicode.com/users';
                return useQuery<User[]>({
                    queryKey: api.cacheKey(url),
                    queryFn: () => api.get(url),
                });
            },
        },
        post: {
            useApiPostFormData: (data: FormDataModel) =>
                useMutation({
                    mutationFn: () => {
                        const url =
                            'https://jsonplaceholder.typicode.com/posts';
                        return api.post(url, data);
                    },
                }),
        },
    };
};

export default FatCatApi;
