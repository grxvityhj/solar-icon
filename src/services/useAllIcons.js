import { useParams, useSearchParams } from 'react-router-dom';
import { categories } from '../data/iconList';
import { useQuery } from '@tanstack/react-query';
import { getAllIcons } from '../api/apiIcon';

export function useAllIcons() {
  const category = categories;

  const params = useParams();
  const [searchParams] = useSearchParams();

  const type = params.type || 'linear';
  const strokeWidth = searchParams.get('stroke-width') || '1.5';
  const query = searchParams.get('search') || '';

  const { data: svgList, isLoading } = useQuery({
    queryKey: ['icons', type, category, strokeWidth, query],
    queryFn: () => getAllIcons({ type, category, strokeWidth, query }),
  });

  return { svgList, isLoading };
}
