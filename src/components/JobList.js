// src/components/JobList.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../api';
import { fetchJobsSuccess, fetchJobsFailure } from '../store/actions';
import JobCard from './JobCard';
import { Grid, Typography, Badge } from '@mui/material';

const JobList = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const error = useSelector((state) => state.error);
  const [badgeContent, setBadgeContent] = useState(0)

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobs(10, 0);
        console.log(data);
        dispatch(fetchJobsSuccess(data.jdList));
        setBadgeContent(data.totalCount)
      } catch (error) {
        dispatch(fetchJobsFailure(error.message));
      }
    };

    loadJobs();
  }, [dispatch]);

  return (
    <>
    <Typography variant='h6' fontWeight={700} textAlign={'center'}>
      <Badge badgeContent={badgeContent} color='primary' max={1000} sx={{justifyContent:'centre', alignItems:'center', textAlign:'center'}}>
      Search Jobs
      </Badge>
    </Typography>
    <Grid container spacing={2}>
      {error && <p>{error}</p>}

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Grid>
    </>
  );
};

export default JobList;
