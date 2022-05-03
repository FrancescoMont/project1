import React, { FC } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton, Skeleton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Result } from "../../models/Games";

const MyCard: FC<{game: Result, selected? : (game: Result) => void, isSelected:boolean, isLoading:boolean}> = (props) =>{
    const {game, selected,isSelected, isLoading = false} = props;
    return (<Card sx={{ maxWidth: 345 }}>
      {isLoading?<CardActionArea>
        <CardMedia
          component="img"
          image={game.background_image}
          alt={game.slug}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {game.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            prova
          </Typography>
          <IconButton onClick={()=> selected && selected(game)} aria-label="add to favorites">
            <FavoriteIcon style={{color: isSelected ? 'red' : 'grey'}}/>
          </IconButton> 
        </CardContent>
      </CardActionArea>: <Skeleton  variant="rectangular" width={210} height={118} /> }
      
    </Card>
  
    );
  }
  
  export {MyCard}