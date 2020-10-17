import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({});

export default function CommentDetails({ name, time, comment }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="root">
      <CardContent>
        <Typography variant="h5" component="h2">
          {name} {time}
        </Typography>
        <Typography className="pos" color="textSecondary">
          {comment}
        </Typography>
      </CardContent>
    </div>
  );
}
