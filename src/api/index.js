export const apiGet = (url) => () => fetch(url).then(r => r.json());
