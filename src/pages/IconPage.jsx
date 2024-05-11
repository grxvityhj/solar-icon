import { useParams } from 'react-router-dom';

import IconList from '../features/IconList';
import IconAll from '../features/IconAll';

function IconPage() {
  const params = useParams();
  const category = params.category || 'all';

  if (category === 'all') return <IconAll />;
  if (category !== 'all') return <IconList />;
}

export default IconPage;
