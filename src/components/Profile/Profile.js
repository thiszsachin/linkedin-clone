import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LaunchIcon from "@material-ui/icons/Launch";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles({
  root: {
    // maxWidth: 700,
  },
  media: {
    height: 150,
  },
});

export default function Profile() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://media-exp1.licdn.com/dms/image/C561BAQHXuBYDcBUm2w/company-background_10000/0/1620411660155?e=1626728400&v=beta&t=_bKyCyGKabdFPjQfLPB0jOCqvnX9AgOYtf3dT4ARZ1E"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Figma
          </Typography>
          <Typography variant="body2" component="p">
            A design platform for teams who build products together.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Design . San Francisco, CA . 101,282 followers
          </Typography>
          <Link href="#">See all 358 employees on LinkedIn</Link>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          startIcon={<PersonAddIcon />}
        >
          Follow
        </Button>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          startIcon={<LaunchIcon />}
        >
          Visit website
        </Button>
        <Button size="small" color="primary" variant="outlined">
          {<MoreHorizIcon />}
        </Button>
      </CardActions>
    </Card>
  );
}
