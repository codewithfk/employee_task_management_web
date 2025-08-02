import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Configure default options (optional)
      //   staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});
