import { useSWRInfinite } from "swr";

export const usePagination = (url: string) => {
  const PAGE_SIZE = 4;
  const getKey = (pageIndex: number, previousPageData: any) => {
    pageIndex = pageIndex + 1;
    if (previousPageData && !previousPageData.length) return null; // reached the end
    return `${url}?_page=${pageIndex}&_limit=${PAGE_SIZE}`; // SWR key
  };

  const { data, size: page, setSize: setPage, error, isValidating } = useSWRInfinite(getKey);

  const paginatedData = [].concat.apply([], data);

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
