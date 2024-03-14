import { useEffect } from 'react';
import { useFetchIcon } from '../hooks/-/useFetchIcon';
import { useIcon } from '../services/-/useIcon';

function Icon({ label }) {
  const [iconData, setCurIcon] = useFetchIcon();
  const { icon, isLoading } = useIcon();

  useEffect(
    function () {
      // console.log(label);
      // onIcon(label);
      setCurIcon(label);
    },
    [setCurIcon, label]
  );

  return <div dangerouslySetInnerHTML={{ __html: icon }}></div>;
}

export default Icon;
