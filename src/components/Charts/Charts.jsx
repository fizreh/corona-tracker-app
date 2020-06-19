import React,{useState,useEffect} from 'react'
import {fetchDailyData} from '../../Api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';

const Charts = () => {
    const [dailyData,setDailyData]= useState({});
    useEffect(() =>{
        const fetchApi = async()=>{
            setDailyData(await fetchDailyData());
        }
        
        fetchApi();
        //console.log(dailyData);
        
    }
    );

    

    const lineChart = (
        dailyData.length ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => date),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                scaleFontSize: 16,
                scaleFontColor:'#ff0000',
                backgroundColor: 'rgba(0, 0,255, 0.5)',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                scaleFontColor:'#ff0000',
                labelColor: '#ff0000',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },
              ],
            }}
          />
        ) : null
      );
    return (
        <div className= {styles.container}>
        {lineChart}

        </div>

    )
}

export default Charts;

