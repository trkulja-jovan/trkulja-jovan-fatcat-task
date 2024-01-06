import User from '../models/User';

const useApi = () => ({
    cacheKey: (url: string) => [url],
    get: async (url: string): Promise<User[]> => {
        const promise = fetch(url, { method: 'GET' }).then(async (response) => {
            if (!response.ok) {
                throw response;
            }

            return response.json().then((data) => data as User[]);
        });
        return promise;
    },
});

export default useApi;
