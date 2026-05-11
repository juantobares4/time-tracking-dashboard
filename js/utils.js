import { fetchData } from "./fetch.js";

const activities = await fetchData();

export const filterTimeframe = async({ frequencyFilter = null }) => {
  return activities.map(activity => {
    return{
      current: activity['timeframes'][frequencyFilter].current,
      previous: activity['timeframes'][frequencyFilter].previous,
    
    };

  });

};