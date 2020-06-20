import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
 

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

export const countries = async() =>{

    try{
   const response = axios.get(`${url}/countries`);
   console.log(response);
   return response;
    }
    catch(error){
return error;
    }
}

