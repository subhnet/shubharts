
import React, { useState, useEffect } from 'react'
import GridList from '@material-ui/core/GridList';
import { GridListTile, GridListTileBar, makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { IMAGES } from './../constants/images';
import { useWindowSize } from './../util/useWindowSize';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: '10px',
        padding: '10px'
    },
    gridList: {
        // width: 500,
        // height: 550,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    thumbnail: {
        cursor: 'pointer',
        maxWidth: '100%',
    },
    dialog: {
        margin: 'auto',
        width: '100%',
        maxWidth: 900,
        overflowX: 'hidden'
    }
}));


const MyGallery = props => {

    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentWidth = useWindowSize().width;
    // const [selectedImage, setSelectedImage] = useState(IMAGES[currentIndex]);
    const classes = useStyles();

    const handleOpenImage = (index) => {
        setOpen(true);
        setCurrentIndex(index)
    };

    const handleClose = () => setOpen(false)

    const getGridListCols = () => {
        //is mobile
        if (currentWidth < 480) {
            return 1;
        }
        //is small
        if (currentWidth < 840) {
            return 2;
        }
        //large
        if (currentWidth < 1024) {
            return 3;
        }
        //very large
        return 4;
    }


    return (
        <div className={classes.root}>
            <GridList
                cellHeight={250}
                spacing={30}
                cols={getGridListCols()}
                className={classes.gridList}
            >
                {IMAGES.map((tile, index) => (
                    <GridListTile
                        key={tile.img}
                        cols={tile.cols || 1}
                        className={classes.icon}
                    >
                        <img
                            src={tile.thumbnail}
                            alt="image_alt"
                            className={classes.thumbnail}
                            onClick={() => handleOpenImage(index)}
                        />
                        <GridListTileBar
                            title={tile.caption}
                            onClick={() => handleOpenImage(index)}
                        />
                    </GridListTile>
                ))}
            </GridList>
            <Dialog
                className={classes.dialog}
                classes={{
                    paper: classes.dialog
                }}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                // fullWidth={true}
                modal={true}
                autoScrollBodyContent={false}
                autoDetectWindowHeight={false}
                open={open}
            // maxWidth={200}
            // scroll={'body'}
            >
                <Image>

                    <img
                        src={IMAGES[currentIndex].src}
                        alt="image_alt"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'scale-down'
                        }}
                    />
                </Image>
            </Dialog>
            {/* <ModalGateway>
                {open ? (
                    <Modal onClose={handleClose}>
                        <Carousel
                            views={IMAGES}
                            currentIndex={currentIndex}
                            frameProps={{
                                autoSize: 'height'
                            }}
                        />
                    </Modal>
                ) : null}
            </ModalGateway> */}
        </div>

    )
}



const Image = (props) => (
    <div
        style={{
            background: 'black',
            textAlign: 'center',
            boxSizing: 'border-box',
            overflow: 'hidden',
            ':hover': {
                opacity: 0.9,
            },
            // height: 'calc(50% - 10px)'
            // maxHeight: '800px'
            // maxWidth: 800
        }}
        {...props}
    />
);


export default MyGallery
