/**
 * Prefix a root-relative path with the configured `base`
 * so the site also works when served from a sub-path
 * (e.g. https://user.github.io/repo/).
 * External URLs, protocol-relative URLs and #hashes are returned unchanged.
 */
export function url(path: string): string {
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
