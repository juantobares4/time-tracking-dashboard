export const fetchData = async() => {
  const response = await fetch('/data/stats.json');
  const data = response.json();

  return data;

};