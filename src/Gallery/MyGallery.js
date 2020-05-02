
import React, { useState, useEffect } from 'react'
import irfan from '../images/full/irfan.jpg'
import arya from '../images/full/arya.jpg'
import joker from '../images/full/joker.jpg'
import witcher from '../images/full/witcher.jpg'
import irfanTn from '../images/thumbnail/irfan_tn.jpg'
import aryaTn from '../images/thumbnail/arya_tn.jpg'
import jokerTn from '../images/thumbnail/joker_tn.jpg'
import witcherTn from '../images/thumbnail/witcher_tn.jpg'
import GridList from '@material-ui/core/GridList';
import { GridListTile, GridListTileBar, makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Carousel, { Modal, ModalGateway } from 'react-images';

const IMAGES =
    [{
        src: irfan,
        thumbnail: irfanTn,
        thumbnailWidth: 350,
        thumbnailHeight: 400,
        isSelected: true,
        caption: "Irfan Khan"
    },
    {
        src: arya,
        thumbnail: aryaTn,
        thumbnailWidth: 320,
        thumbnailHeight: 400,
        caption: "Arya Stark"
    },

    {
        src: joker,
        thumbnail: jokerTn,
        thumbnailWidth: 320,
        thumbnailHeight: 400,
        caption: "Joker"
    },
    {
        src: witcher,
        thumbnail: witcherTn,
        thumbnailWidth: 500,
        thumbnailHeight: 400,
        caption: "The Witcher"
    }
    ]


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
        height: 550,
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
    // const [selectedImage, setSelectedImage] = useState(IMAGES[currentIndex]);
    const classes = useStyles();

    const handleOpenImage = (index) => {
        setOpen(true);
        // setSelectedImage(imageObj);
        setCurrentIndex(index)
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className={classes.root}>
            <GridList cellHeight={250} cols={4} spacing={30} className={classes.gridList}>
                {IMAGES.map((tile, index) => (
                    <GridListTile
                        key={tile.img}
                        cols={tile.cols || 1}
                        className={classes.icon}
                    >
                        <Image
                            src={tile.thumbnail}
                            onClick={() => handleOpenImage(index)}
                        >

                            <img
                                src={tile.src}
                                alt="image_alt"
                                className={classes.thumbnail}
                            />
                        </Image>
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
                <img src={IMAGES[currentIndex].src} alt="image_alt" />
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


const gutter = 2;

const Image = (props) => (
    <div
        style={{
            backgroundColor: '#eee',
            boxSizing: 'border-box',
            overflow: 'hidden',
            ':hover': {
                opacity: 0.9,
            },
        }}
        {...props}
    />
);


export default MyGallery
