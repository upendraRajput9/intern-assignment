import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Product(props) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.images[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>

          <Typography variant="h6" color="red">
            Price: ${props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
