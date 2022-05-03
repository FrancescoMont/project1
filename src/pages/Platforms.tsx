import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { MyCard } from '../components/card/card';
import { PlatformCard } from '../components/card/platformsCard';
import { Result, RootObject } from '../models/Platforms';

export default function Platforms() {
  const key ="6cf9f8b21d714c2180eb3a93ccc827df";
  const base = "https://api.rawg.io/api/platforms";
    const [page ,setPage ] = useState(1);
    const [platforms , setPlatforms] = useState([] as Result[]);
    const [isLoading, setLoading] = useState(false);
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const loadData = async () => {
        const res = await fetch(`${base}?key=${key}&page=${page}`)
        const {results} = await res.json() as RootObject;
          setPlatforms(results);
          setLoading(true);
      }

      useEffect(()=> {
        setLoading(false)
        setTimeout(loadData,700);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[page]);


    return (
      <><div style={{display: 'flex', margin:'10px'}}>
      <Button variant='contained' disabled={page <= 1} onClick={()=> {setPage (page -1)}}>Previus</Button>
      <Typography style={{margin:'10px'}}>{page}</Typography>
      <Button variant='contained' disabled={page >= 2} onClick={()=> {setPage (page +1)}}>Next</Button>
      </div>
      <Grid container spacing={2}>
      {
          platforms.map(item => <Grid item xs={3}>
            <PlatformCard platform = {item}
            isLoading={isLoading}
            />
          </Grid>)
      }
      </Grid>
      <div style={{display: 'flex', margin:'10px'}}>
      <Button variant='contained' disabled={page <= 1} onClick={()=> {setPage (page -1)}}>Previus</Button>
      <Typography style={{margin:'10px'}}>{page}</Typography>
      <Button variant='contained' disabled={page >= 2} onClick={()=> {setPage (page +1)}}>Next</Button>
      </div>
      </>
    );
  }