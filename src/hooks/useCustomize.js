import { useState } from 'react';

export function useCustomize() {
  const [_, setStrokeWidth] = useState('1.5');
  const [__, setSize] = useState('24');

  const [icon, setIcon] = useState({ strokeWidth: '1.5', size: '24' });

  function onCustom({ strokeWidth = '1.5', size = '24' }) {
    setStrokeWidth(strokeWidth);
    setSize(size);
    setIcon({ strokeWidth, size });
  }

  return [icon, onCustom];
}
