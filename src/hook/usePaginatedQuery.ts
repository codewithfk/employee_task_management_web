import { useDebouncedState } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// Utility to extract return type of a Promise
type AwaitedReturnType<T> = T extends (...args: any) => Promise<infer R>
  ? R
  : never;

interface UsePaginatedQueryProps<TQueryFn extends (...args: any) => any> {
  queryFn: TQueryFn;
  queryKeyBase: string;
  initialSearch?: string;
  initialPage?: number;
  type?:string | number
  params?:string | number
  enabled?:boolean
  
}

function usePaginatedQuery<TQueryFn extends (params: any) => Promise<any>>({
  queryFn,
  queryKeyBase,
  initialSearch = "",
  initialPage = 1,
  type,
  enabled,
  params
}: UsePaginatedQueryProps<TQueryFn>) {
  const [search, setSearch] = useDebouncedState(initialSearch, 500);
  const [page, setPage] = useState(initialPage);

  const queryKey = [queryKeyBase, page, search,type,params,initialPage,initialSearch];

  const query = useQuery<AwaitedReturnType<TQueryFn>>({
    queryKey,
    queryFn: () => queryFn({ search, page,type }),
    placeholderData: (prevData) => prevData,
    enabled:enabled
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return {
    query,
    handlePageChange,
    search,
    setSearch,
    page,
    setPage,
    queryKey,
  };
}

export default usePaginatedQuery;
