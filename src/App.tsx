import { Button, Grid } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { MyCard } from './components/card/card';
import { Result, RootObject } from './models/Games';

const key ="6cf9f8b21d714c2180eb3a93ccc827df";
const base = "https://api.rawg.io/api/games";


const App : FC = () => {
  const [page ,setPage ] = useState(1);
  const [games , setGames] = useState([] as Result[]);
  const [isLoading, setLoading] = useState(false);
  const [favourites, setFavourites] = useState([] as number[]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadData = async () => {
      const res = await fetch(`${base}?key=${key}&page=${page}`)
      const {results} = await res.json() as RootObject;
        setGames(results);
        console.log(results);
    }

    useEffect(()=> {
      console.log('Sono dentro effect')
      setLoading(true);
      setTimeout(loadData,700);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page]);

    const handleNewGame = (game: Result) => {
      const index = favourites.indexOf(game.id);
      index === -1 ? favourites.push(game.id) : favourites.splice(index,1);
      setFavourites([...favourites]);
    }

  return (
    <>
    <Button onClick={()=> {setPage (page -1)}}>Previus</Button>
    <p>{page}</p> 
    <Button onClick={()=> {setPage (page +1)}}>Next</Button>
    
    <Grid container spacing={2}>
    {
        games.map(item => <Grid item xs={3}>
          <MyCard game = {item}
          selected ={handleNewGame}
          isSelected={favourites.includes(item.id)}
          isLoading={isLoading}
          />
        </Grid>)
    }
    </Grid>
    <Button onClick={()=> {setPage (page -1)}}>Previus</Button>
    <p>{page}</p> 
    <Button onClick={()=> {setPage (page +1)}}>Next</Button>
    </>
  );
}

export default App;
