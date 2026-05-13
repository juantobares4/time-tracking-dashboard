export const parseStringByFilter = (timeframe) => {
  let parsedTimeframe = String(timeframe).slice(0, timeframe.indexOf('ly'));
  
  if (parsedTimeframe.endsWith('i')) {
    parsedTimeframe = parsedTimeframe.slice(0, -1) + 'y' ;

  };

  return parsedTimeframe;
  
};