import { iconsList } from '../data/iconList';
import { BASE_URL } from '../utils/constant';

export async function getAllIcons({
  type = 'linear',
  category = [],
  query = '',
  strokeWidth = '1.5',
}) {
  const fullList = [];

  if (category.length <= 1) return;

  for (const cate of category) {
    const data = await fetchFilteredIcons(
      type,
      cate.category,
      query,
      strokeWidth
    );

    fullList.push(data);
  }

  return fullList;
}

export async function getIcons({
  type = '',
  category,
  query,
  strokeWidth = '1.5',
}) {
  const data = await fetchFilteredIcons(type, category, query, strokeWidth);
  return [data];
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

async function fetchFilteredIcons(type, category, query, strokeWidth) {
  let filteredData;
  const res = await fetch(`/${BASE_URL}/data/${category}.json`);
  const data = await res.json();
  [filteredData] = JSON.parse(data);

  filteredData.icon_list = filteredData.icon_list.map(li => {
    return {
      label: li.label,
      keyword: li.keyword,
      icon: li.svg[type || 'linear'].replaceAll(
        'stroke-width="1.5"',
        `stroke-width="${strokeWidth}"`
      ),
    };
  });

  if (query !== '') {
    [filteredData] = [filteredData].filter(data => {
      data.icon_list = data.icon_list.filter(li =>
        li.keyword.includes(query.toLowerCase())
      );
      return data;
    });
  }

  return filteredData;
}
