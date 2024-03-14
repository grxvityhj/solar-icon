import { useQuery } from '@tanstack/react-query';
import { getIconCounts } from '../api/apiIcon';

export function useIconCounts() {
  const { data: iconCounts, isLoading } = useQuery({
    queryKey: ['icon_counts'],
    queryFn: getIconCounts,
  });

  return { iconCounts, isLoading };
}
