export const normalizePath = (path: string) => path.replace(/\/+$/, '') || '/';

export const isSamePath = (a: string, b: string) => normalizePath(a) === normalizePath(b);
