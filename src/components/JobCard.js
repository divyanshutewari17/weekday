// src/components/JobCard.js
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const JobCard = ({ job }) => {
  return (
    <Grid item md={3}>
      <Card>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Box component="img" src={job.logoUrl} sx={{borderRadius:"50%"}}/>
          <CardHeader title = {job.companyName} sx={{textTransform: 'capitalize'}}/>
        </div>
        <CardContent sx={{textTransform: 'capitalize'}}>
          <Typography variant='body1'>Role: {job.jobRole}</Typography>
          <Typography variant='body1'>Location: {job.location}</Typography>
          <Typography variant='body1' sx={{textTransform: 'none'}}>Description: {job.jobDetailsFromCompany}</Typography>
          <Typography variant='body1'>Experience Required: {job.minExp} - {job.maxExp} years</Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' onClick={()=> window.open(job.jdLink, "_blank", "noreferrer")}>
            Apply
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default JobCard;
