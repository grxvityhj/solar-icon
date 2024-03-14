import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getIcon } from '../api/apiIcon';

export function useIcon() {
  const [searchParams, _] = useSearchParams();

  const type = searchParams.get('type') || 'linear';
  const iconName = searchParams.get('icon');
  const strokeWidth = searchParams.get('stroke-width') || '1.5';

  const { data: icon, isLoading } = useQuery({
    queryKey: ['icon', type, iconName, strokeWidth],
    queryFn: () => getIcon({ type, icon: iconName, strokeWidth }),
  });

  return { icon, isLoading };
}
