const useApi = () => ({
    cacheKey: (url: string) => [url],
    get: async <T>(url: string): Promise<T[]> => {
        const promise = fetch(url, { method: 'GET' }).then(async (response) => {
            if (!response.ok) {
                throw response;
            }

            return response.json().then((data) => data as T[]);
        });
        return promise;
    },
    post: async <T>(url: string, data: T): Promise<Response> => {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
        }).then((response) => {
            if (!response.ok) {
                throw response;
            }
            return response;
        });
    },
});

export default useApi;
