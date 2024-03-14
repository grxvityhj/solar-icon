import { useQuery } from '@tanstack/react-query';
import { getAllIconCounts } from '../api/apiIcon';

export function useAllIconCounts() {
  const { data: allCounts, isLoading } = useQuery({
    queryKey: ['icon_counts_all'],
    queryFn: getAllIconCounts,
  });

  return { allCounts, isLoading };
}
