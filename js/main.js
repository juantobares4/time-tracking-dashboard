import { fetchData } from "./fetch.js";

const stats = await fetchData();

stats.forEach(stat => {
  console.log(Object.values(stat.timeframes))

})