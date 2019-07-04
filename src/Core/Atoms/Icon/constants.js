const context = require.context('./icons', true, /\.jsx$/);

export const ICON_COMPS = context.keys().reduce((memo, key) => ({
  ...memo,
  [key.replace(/\.\/|\.jsx/g, '').toLowerCase()]: context(key).default,
}), {});

export const ICONS_TYPES = {};
// eslint-disable-next-line no-return-assign
Object.keys(ICON_COMPS).forEach(item => ICONS_TYPES[item] = item);
