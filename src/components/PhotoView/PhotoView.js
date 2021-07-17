import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CircularProgress,
  Button,
} from "@material-ui/core";
import "./PhotoView.css";
import axios from "axios";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function PhotoView(props) {
  const loadedProps = props;
  const [photo, setPhoto] = useState(null);
  const photoId = loadedProps.match.params.photoId;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
      .then((response) => {
        const loadedPhoto = response.data;
        setPhoto(loadedPhoto);
      })
      .catch((error) => {
        console.log(
          "Couldn't fetch data from server due to the following error!" + error
        );
      });
  }, [photoId]);

  const backButtonHandler = () => {
    props.history.push("/");
  };

  return (
    <div>
      {photo ? (
        <Card className="PhotoView">
          <CardActionArea>
            <CardMedia
              className="Media"
              image={photo.url}
              title={photo.title}
            />
            <CardContent>
              <Typography variant="body2" component="h5">
                {photo.title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button
            variant="contained"
            color="default"
            onClick={backButtonHandler}
            startIcon={<ArrowBackIcon />}
          >
            Back To Home
          </Button>
        </Card>
      ) : (
        <CircularProgress className="Spinner" />
      )}
    </div>
  );
}

export default PhotoView;
