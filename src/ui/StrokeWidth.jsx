import { useState } from 'react';
import styles from './StrokeWidth.module.css';
import { useParams, useSearchParams } from 'react-router-dom';

function StrokeWidth() {
  const params = useParams();

  const [strokeWidth, setStrokeWidth] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const type = params.type || 'linear';

  function handleInput(e) {
    if (
      typeof +e.target.value.trim() !== 'number' ||
      isNaN(+e.target.value.trim())
    )
      return;

    setStrokeWidth(e.target.value);

    if (type === 'bold' || type === 'bulk') return;

    searchParams.set('stroke-width', e.target.value);
    setSearchParams(searchParams);
  }

  if (type === 'bold' || type === 'bulk') return null;

  return (
    <div className={styles.form}>
      <label className={styles.label} htmlFor="stroke-width">
        Stroke width
      </label>
      <input
        type="text"
        id="stroke-width"
        name="stroke-width"
        value={strokeWidth}
        onChange={handleInput}
        placeholder="1.5"
      />
    </div>
  );
}

export default StrokeWidth;
