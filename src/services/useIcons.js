import { useQuery } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import { getIcons } from '../api/apiIcon';

export function useIcons() {
  const params = useParams();
  const [searchParams, _] = useSearchParams();

  const type = params.type || 'linear';
  const category = params.category;
  const strokeWidth = searchParams.get('stroke-width') || '1.5';
  const query = searchParams.get('search') || '';

  const { data: iconList, isLoading } = useQuery({
    queryKey: ['icons', type, category, strokeWidth, query],
    queryFn: () => getIcons({ type, category, strokeWidth, query }),
  });

  return { iconList, isLoading };
}
