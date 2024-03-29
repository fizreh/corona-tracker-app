import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

  const Cards = ({data: {confirmed , recovered , deaths , lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...';
        }
       // console.log(recovered);
    return (
        <div className= {styles.container}>        
    <Grid container justify='center' spacing={3}>
            <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card,styles.infected)}>
            <CardContent>
            <Typography variant = "h4"  gutterBottom>Infected </Typography>
        <Typography variant = "h5" >
        <CountUp start = {0} end = {confirmed.value} duration = {2.5} separator = {","}/>
        </Typography>
        <Typography variant = "h6"  color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant= "body1"> Number of active cases of COVID-19</Typography>
            </CardContent>
            </Grid>
            <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card,styles.recovered)}>
            <CardContent>
            <Typography variant = "h4"  gutterBottom>Recovered </Typography>
            <Typography variant = "h5" >
            <CountUp start = {0} end = {recovered.value} duration = {2.5} separator = {","} />
            </Typography>
            <Typography variant = "h6" color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant= "body1"> Number of recovered cases of COVID-19</Typography>
            </CardContent>
            </Grid>
            <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card,styles.deaths)}>
            <CardContent>
            <Typography variant = "h4"  gutterBottom>Deaths </Typography>
            <Typography variant = "h5" >
            <CountUp start = {0} end = {deaths.value} duration = {2.5} separator = {","} />
            </Typography>
            <Typography variant = "h6" color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant= "body1"> Number of deaths due to COVID-19</Typography>
            </CardContent>
            </Grid>


        </Grid>
        
    </div>
    )
}
export default Cards;

