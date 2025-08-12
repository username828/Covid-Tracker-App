import React from 'react';
import styles from './Cards.module.css';
import { Card,CardContent,Typography,Grid } from '@mui/material';
import CountUp from 'react-countup'; //for counting up from 0
import cx from 'classnames'; //for classnames manipulation

const Cards = ({data: {cases,recovered,deaths,updated}}) => {
    if(!cases){
        return <p>Loading...</p>
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} /*small screens*/size={{ xs: 12, md: 3 }} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"><CountUp start={0} end={cases} duration={2.5} separator=','/></Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography> 
                    
                    </CardContent>
                </Grid>

                <Grid item component={Card} /*small screens*/size={{ xs: 12, md: 3 }} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"><CountUp start={0} end={recovered} duration={2.5} separator=','/></Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography> 
                    
                    </CardContent>
                </Grid>

                <Grid item component={Card} /*small screens*/size={{ xs: 12, md: 3 }} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths} duration={2.5} separator=','/></Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography> 
                    
                    </CardContent>
                </Grid>

            </Grid>

        </div>

    )
}
export default Cards