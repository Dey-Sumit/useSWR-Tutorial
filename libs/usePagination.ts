import { SWRInfiniteConfiguration, useSWRInfinite } from "swr";

export const usePagination = <T>(url: string, options?: SWRInfiniteConfiguration) => {
  const PAGE_SIZE = 6;
  const getKey = (pageIndex: number, previousPageData: T[]) => {
    pageIndex = pageIndex + 1;
    if (previousPageData && !previousPageData.length) return null; // reached the end
    return `${url}&_page=${pageIndex}&_limit=${PAGE_SIZE}`; // SWR key
  };

  const {
    data,
    size: page,
    setSize: setPage,
    error,
    isValidating,
    mutate,
  } = useSWRInfinite(getKey, options);

  const paginatedData: T[] = [].concat.apply([], data);

  const isLoadingMore = data && typeof data[page - 1] === "undefined";

  const isReachedEnd = data && data[data.length - 1]?.length < PAGE_SIZE;
  return {
    mutate,
    error,
    paginatedData,
    page,
    setPage,
    isLoadingMore,
    isReachedEnd,
    isValidating,
  };
};
