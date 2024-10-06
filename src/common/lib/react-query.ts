import { QueryClient } from 'react-query';
export function getQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5,
                cacheTime: 1000 * 60 * 10,
                refetchOnMount: false,
                refetchOnWindowFocus: false,
            },
        },
    });
}
