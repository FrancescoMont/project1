import { Grid } from '@mui/material';
import React, { FC, useEffect, useState } from 'react'
import { MyCard } from '../components/card/card';
import { Result, RootObject } from '../models/Games';
import Games from './Games';

type CardProps = {
  favourites?: Result,
  index: number,
  isSelected:boolean,
  selected?: (game: string) => void
}

const Favourites: FC<CardProps> = (props:CardProps) => {
  const{favourites, index,} = props
    
  return (
   <div>Favourites</div>
  )
}

export {Favourites}