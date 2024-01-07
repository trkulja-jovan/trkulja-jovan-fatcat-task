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
    post: async (url: string, data: object): Promise<boolean> => {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
        }).then((response) => (response.ok ? true : false));
    },
});

export default useApi;
