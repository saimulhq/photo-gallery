import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GridList, GridListTile, Button } from '@material-ui/core';
import './Thumbnails.css';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Thumbnails() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [disablePrevButton, setDisablePrevButton] = useState(false);
    const [disableNextButton, setDisableNextButton] = useState(false);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
            .then(response => {
                const loadedPhotos = response.data;
                setPhotos(loadedPhotos);
            });
    }, [page]);

    const clickNextHandler = () => {
        if (page < 500) {
            setPage(page + 1);
            setDisableNextButton(false);
            setDisablePrevButton(false);
        }
        else {
            setDisableNextButton(true);
        }
    };

    const clickPreviousHandler = () => {
        if (page >= 2) {
            setPage(page - 1);
            setDisablePrevButton(false);
            setDisableNextButton(false);
        }
        else {
            setDisablePrevButton(true);
        }
    };

    return (
        <div className="Thumbnails">
            <GridList
                cellHeight={100}
                cols={2}>
                {photos.map((photo) => (
                    <GridListTile
                        key={photo.id}>
                        <Link
                            to={`/photo/${photo.id}`}>
                            <img
                                src={photo.thumbnailUrl}
                                alt={photo.title} />
                        </Link>
                    </GridListTile>
                ))}
            </GridList>
            <Button
                variant="contained"
                color="default"
                startIcon={<ArrowBackIcon />}
                onClick={clickPreviousHandler}
                disabled={disablePrevButton}>Prev</Button>
            <Button
                variant="contained"
                color="default"
                endIcon={<ArrowForwardIcon />}
                onClick={clickNextHandler}
                disabled={disableNextButton}>Next</Button>
        </div>
    );
}

export default Thumbnails;