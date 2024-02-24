import { QueryClient } from '@tanstack/react-query';
import { apis } from '@/lib/apis';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

await queryClient.prefetchQuery({
  queryKey: ['auth'],
  queryFn: () => apis.auth.authentication(),
});

export { queryClient };
