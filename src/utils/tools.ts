function formatURL(url: string) {
  // 如果网址已经以 https:// 或者 http:// 开头，则直接返回
  if (url.startsWith("https://") || url.startsWith("http://")) {
    return url;
  }

  // 否则，在网址前面添加 https:// 并返回
  return `https://${url}`;
}
export { formatURL };
