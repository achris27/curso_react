import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Item({ data }) {
  //console.log("DATA en item:", data);
  return (
    <Card sx={{ maxWidth: 345, margin:10}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={data.image}
          alt={data.slug}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
                {data.description}
          </Typography>
          <Typography variant="h5">
                ${data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
