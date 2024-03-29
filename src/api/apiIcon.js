import { iconsList } from '../data/iconList';
import { BASE_URL } from '../utils/constant';

export async function getAllIcons({
  type,
  category,
  query,
  strokeWidth = '1.5',
}) {
  const fullList = [];

  if (category.length > 1) {
    for (const cate of category) {
      const list = iconsList.filter(li => li.category === cate.category);
      const [{ icon_list, category_title }] = list;

      const temp = {
        category: cate.category,
        category_title,
        svg_list: [],
      };

      if (!icon_list) return;

      for (const icon of icon_list) {
        let value;
        const res = await fetch(`/${BASE_URL}/icons/${type}/${icon.label}.svg`);
        const data = await res.text();

        const keyword = `${icon.keyword} ${icon.label} ${icon.label.replace(
          '-',
          ' '
        )}`;

        value = data.replaceAll(
          'stroke-width="1.5"',
          `stroke-width="${strokeWidth}"`
        );

        if (query) {
          if (keyword.includes(query.toLowerCase())) {
            const obj = {
              svg: value,
              label: icon.label,
              keyword,
            };

            temp['svg_list'].push(obj);
          }
        } else {
          const obj = {
            svg: value,
            label: icon.label,
            keyword,
          };

          temp['svg_list'].push(obj);
        }
      }

      fullList.push(temp);
    }
  }

  return fullList;
}

export async function getIcons({ type, category, query, strokeWidth = '1.5' }) {
  let cate;

  cate = iconsList.filter(li => li.category === category);
  const [{ category_title, icon_list }] = cate;

  const arr = {
    category,
    category_title,
    svg_list: [],
  };

  for (const icon of icon_list) {
    let value;

    const res = await fetch(`../icons/${type}/${icon.label}`);
    const data = await res.text();

    const keyword = `${icon.keyword} ${icon.label.replace(
      '.svg',
      ''
    )} ${icon.label.replace('.svg', '').replace('-', ' ')}`;

    value = data.replaceAll(
      'stroke-width="1.5"',
      `stroke-width="${strokeWidth}"`
    );

    if (query) {
      if (keyword.includes(query.toLowerCase())) {
        const obj = {
          svg: value,
          label: icon.label.replace('.svg', ''),
          keyword,
        };

        arr['svg_list'].push(obj);
      }
    } else {
      const obj = {
        svg: value,
        label: icon.label.replace('.svg', ''),
        keyword,
      };

      arr['svg_list'].push(obj);
    }
  }

  return arr;
}

export async function getIcon({ type, icon, strokeWidth = '1.5' }) {
  let value;

  const res = await fetch(`../icons/${type}/${icon}.svg`);
  const data = await res.text();

  value = data.replaceAll(
    'stroke-width="1.5"',
    `stroke-width="${strokeWidth}"`
  );

  return value;
}

export function getIconCounts() {
  const arr = [];

  for (const list of iconsList) {
    const { icon_list } = list;

    const obj = {
      category: list.category,
      category_title: list.category_title,
      iconCounts: icon_list.length,
    };

    arr.push(obj);
  }

  return arr;
}

export function getAllIconCounts() {
  const counts = getIconCounts();
  const all = counts
    .map(cnt => cnt.iconCounts)
    .reduce((cur, acc) => cur + acc, 0);

  return all;
}
