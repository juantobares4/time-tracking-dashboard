import { filterTimeframe } from "./utils.js";
import { fetchData } from "./fetch.js";

const profileLinks = document.querySelectorAll('.profile__link');
const activities = await fetchData(); 

const handleProfileLinksEvent = () => {
  profileLinks.forEach(link => {
    link.addEventListener('click', () => handleCurrentFrequency(
      { filter: link.dataset.timeframe }
    
    ));

  })

};

const handlePreviousFrequency = async({ filter }) => {
  const previousHoursElements = document.querySelectorAll('.previous-hours');
  
  previousHoursElements.forEach(element => {
    const previousElementDataset = element.dataset.activityPrevious;
  
    const findActivity = activities.find(activity => activity.title === previousElementDataset);

    element.textContent = `Last day - ${findActivity['timeframes'][filter].previous}hrs`;     

  });

};  

const handleCurrentFrequency = async({ filter }) => {
  const currentHoursElements = document.querySelectorAll('.current-hours');
  
  currentHoursElements.forEach(element => {
    const currentElementDataset = element.dataset.activityCurrent;
  
    const findActivity = activities.find(activity => activity.title === currentElementDataset);

    element.textContent = `${findActivity['timeframes'][filter].current}hrs`;     

  });

  handlePreviousFrequency({ filter: filter });

}; 

const main = () => {
  handleProfileLinksEvent();
  handleCurrentFrequency({filter: 'monthly' });
  handlePreviousFrequency({ filter: 'daily' });

};

main();