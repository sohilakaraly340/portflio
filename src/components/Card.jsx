import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

export default function CardItem({ title, date, des }) {
  return (
    <Card sx={{ maxWidth: 345, width: "60%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography color={(theme) => theme.palette.primary.main}>
          {date}
        </Typography>
        {/* <Typography variant="body2" margin="10px 0" color="text.secondary">
            {des}
          </Typography> */}
        <LinearProgress variant="determinate" value={90} />
      </CardContent>
    </Card>
  );
}
