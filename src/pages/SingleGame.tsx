import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { MyCard } from '../components/card/card';
import { Result, RootObject } from '../models/Games';
import { Game } from '../models/Platforms';
import {DetailGame} from '../models/GameDetail'
import { ResetTvOutlined } from '@mui/icons-material';


const SingleGame: FC = () => {
  const navigate = useNavigate();
  const[game, setGame] = useState<DetailGame>();
  const{id} = useParams() as {id:string};
  const key ="6cf9f8b21d714c2180eb3a93ccc827df";
  const base = "https://api.rawg.io/api/games";
  
  const loadData = async () => {
    const res = await fetch(`${base}/${id}?key=${key}`)
    const item = await res.json() as DetailGame;
      setGame(item);
      console.log(item);
  }

  useEffect(()=> {
    loadData();
  },[id]);

  return (
    <><Button variant='text' onClick={() => navigate(-1)}>Torna alla lista</Button>
    <Card sx={{ maxWidth: '100%',height:'100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={game?.background_image}
          alt={game?.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {game?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {game?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></>
);
}

export {SingleGame}