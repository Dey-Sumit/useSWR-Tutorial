import { useSWRInfinite } from "swr";

export const usePagination = <T>(url: string) => {
  const PAGE_SIZE = 6;
  const getKey = (pageIndex: number, previousPageData: T[]) => {
    pageIndex = pageIndex + 1;
    if (previousPageData && !previousPageData.length) return null; // reached the end
    return `${url}?_page=${pageIndex}&_limit=${PAGE_SIZE}`; // SWR key
  };

  const { data, size: page, setSize: setPage, error, isValidating } = useSWRInfinite(getKey);

  const paginatedData: T[] = [].concat.apply([], data);

  const isLoadingMore = data && typeof data[page - 1] === "undefined";

  const isReachedEnd = data && data[data.length - 1]?.length < PAGE_SIZE;
  return {
    error,
    paginatedData,
    page,
    setPage,
    isLoadingMore,
    isReachedEnd,
    isValidating,
  };
};
