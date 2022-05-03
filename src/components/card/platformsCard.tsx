import React, { FC } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton, Skeleton } from '@mui/material';
import { Result } from "../../models/Platforms";

const PlatformCard: FC<{platform: Result, selected? : (platform: Result) => void, isSelected?:boolean, isLoading:boolean}> = (props) =>{
    const {platform, isLoading = false} = props;
    return (<Card sx={{ maxWidth: 345 }}>
    {isLoading?<CardActionArea>
        <CardMedia
        component="img"
        image={platform.image_background}
        alt={platform.slug}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {platform.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {platform?.year_start}
        </Typography>
        </CardContent>
    </CardActionArea>
    :<Skeleton  variant="rectangular" width={210} height={118} /> }
    </Card>

    );
}
export {PlatformCard}