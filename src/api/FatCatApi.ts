import { useQuery } from '@tanstack/react-query';

import useApi from './useApi';

const FatCatApi = () => {
    const api = useApi();
    return {
        get: {
            useApiGetUsers: <T>(url: string) => {
                return useQuery<T[]>({
                    queryKey: api.cacheKey(url),
                    queryFn: () => api.get(url),
                });
            },
        },
        post: {
            useApiPostFormData: <T>(data?: T) => {
                if (!data) return;
                const url = 'https://jsonplaceholder.typicode.com/posts';
                return api.post(url, data);
            },
        },
    };
};

export default FatCatApi;
