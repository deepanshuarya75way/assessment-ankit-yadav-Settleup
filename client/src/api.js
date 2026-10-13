const apiBaseUrl = (process.env.REACT_APP_API_URL || "").replace(/\/+$/, "");

export function apiPath(path) {
  return `${apiBaseUrl}/${String(path).replace(/^\/+/, "")}`;
}
