const baseUrl = 'http://newoo-personal.com';

export async function fetchCookies() {
  const url = `${baseUrl}/cookies`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function tmp() {
  return [];
}
