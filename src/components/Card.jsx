import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";

const Top = styled.div`
  background-color: none;
  position: relative;

  .top {
    position: absolute;
    width: 80%;

    .icon {
      background-color: white;
      float: right;
      margin-left: 10px;
    }
    .add:hover {
    }
  }
  .bottom {
    position: absolute;
    width: 80%;
    bottom: 0;
    /* border: 1px solid green; */

    display: flex;
    justify-content: start;
    color: white;
    .icon {
      background-color: white;
    }
  }
  .img:hover {
    background-color: black;
  }
`;

export default function CardComponent({ url }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(url);

  return (
    <Top>
      <Card sx={{ maxWidth: 345 }}>
        <div className="top">
          <IconButton
            aria-label="add to favorites"
            className="icon"
            aria-modal=""
          >
            <AddIcon />
          </IconButton>
          <IconButton aria-label="share" className="icon">
            <FavoriteIcon />
          </IconButton>
        </div>

        <div className="img">
          <CardMedia
            component="img"
            height="100%"
            width="100%"
            image={url.urls.small}
            alt="Paella dish"
          />
        </div>

        <div className="bottom">
          <CardHeader
            avatar={
              <Avatar sx={{}} aria-label="recipe">
                <img src={url.user.profile_image.large} alt="" />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" className="icon">
                <DownloadIcon />
              </IconButton>
            }
            title={`${url.user.name}`}
          />
        </div>
      </Card>
    </Top>
  );
}
