import React,{useState,useEffect} from 'react'
import {fetchDailyData} from '../../Api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';
import { palette } from '@material-ui/system';
import { withTheme } from '@material-ui/core';

const Charts = ({data : {confirmed,recovered,deaths},country}) => {
    const [dailyData,setDailyData]= useState({});
    useEffect(() =>{
        const fetchApi = async()=>{
            setDailyData(await fetchDailyData());
        }
        
        fetchApi();
        //console.log(dailyData);
        
    }
    ,[]);

    

    const lineChart = (
        dailyData.length ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => date),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                scaleFontSize: 26,
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

      if(country)
      {
        console.log(confirmed);
      console.log(recovered);
      console.log(deaths);
      }


      const BarChart = (
      confirmed
        ?(<Bar
          data = {{
            labels: ['Infected','Recovered','Deaths'],
            datasets:[{
              label: 'People',
              backgroundColor:[ 
              'rgba(0,0,255,0.5)',
              'rgba(0,255,0,0.5)',
              'rgba(255,0,0,0.5)',
            ],
            data: [confirmed.value,recovered.value,deaths.value],

            }]        
          }}
          options= {{
            legend : {display:false},
            title : {display:true , text : `Current state in ${country}`}

          }}
        />
         

          ) : null
      )
    return (
        <div className= {styles.container}>
        {country ? BarChart:lineChart}

        </div>

    )
}

export default Charts;

