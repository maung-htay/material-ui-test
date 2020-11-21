import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import { Avatar, CardMedia, IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

const Cards = (props) => {
  const { avatarSrc, title, subTitle, description, imgSrc } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarSrc} />}
        action={
          <IconButton aria-label="settings"> 
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subTitle}
      />

      <CardMedia style={{ height: "150px" }} image={imgSrc} />

      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Offer</Button>
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
