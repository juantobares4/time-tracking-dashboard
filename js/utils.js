export const parseStringByFilter = (timeframe) => {
  switch (timeframe) {
    case 'daily':
      return 'day';  

      break;
  
    case 'weekly':
      return 'week'

      break

    case 'monthly':
      return 'month';

      break
  
  };

  return timeframe;

};