const protocol = 'http';
const host = 'localhost';
const port = '3000';

const genQuery = (data = {}) => Object.entries(data)
  .reduce((query, [key, val], index) => (index === 0 ? `?${key}=${val}` : `${query}&${key}=${val}`), '');

const call = (method, url, data, options) => {
  const urlFull = `${protocol}://${host}:${port}/api${url}${method === 'GET' && data ? genQuery(data) : ''}`;
  return fetch(urlFull, {
    method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  })
    .then(res => res.json());
};

export const get = (url, data, options) => call('GET', url, data, options);
export const post = (url, data, options) => call('POST', url, data, options);
export const put = (url, data, options) => call('PUT', url, data, options);
export const patch = (url, data, options) => call('PATCH', url, data, options);
export const del = (url, data, options) => call('DELETE', url, data, options);
