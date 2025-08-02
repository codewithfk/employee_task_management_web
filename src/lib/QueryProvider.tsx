// lib/QueryProvider.tsx
"use client";

import { QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";
import { queryClient } from "./queryClient";

export default function QueryProvider({ children }: { children: ReactNode }) {
  // const [queryClient] = useState(
  //   () =>
  //     new QueryClient({
  //       defaultOptions: {
  //         queries: {
  //           retry: 1,
  //           gcTime: 0,
  //           // staleTime: 5 * 60 * 1000, // 5 minutes
  //           // gcTime: 10 * 60 * 1000, // 10 minutes
  //         },
  //       },
  //     })
  // );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
