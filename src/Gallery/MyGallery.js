
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import ReactGa from 'react-ga';
import { IMAGES } from './../constants/images';
import './gallery.css';

const MyGallery = props => {

    // const [open, setOpen] = useState(false);
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const currentWidth = useWindowSize().width;
    // const [selectedImage, setSelectedImage] = useState(IMAGES[currentIndex]);
    // const classes = useStyles();

    // const handleOpenImage = (index) => {
    //     setOpen(true);
    //     setCurrentIndex(index)

    //     console.log('oolala', window.location.hostname);
    //     if (window.location.host.indexOf('localhost') == -1) {
    //         ReactGa.event({
    //             category: 'Art Buttons',
    //             action: `Viewed Art image ${IMAGES[index].art_id} - ${IMAGES[index].caption}`
    //         })
    //     }
    // };

    // const handleClose = () => setOpen(false)

    // const getGridListCols = () => {
    //     //is mobile
    //     if (currentWidth < 480) {
    //         return 1;
    //     }
    //     //is small
    //     if (currentWidth < 840) {
    //         return 2;
    //     }
    //     //large
    //     if (currentWidth < 1024) {
    //         return 3;
    //     }
    //     //very large
    //     return 3;
    // }

    const [model, setModel] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpenImage = (img) => {
        setSelectedImage(img);
        setModel(true);
        console.log('oolala', window.location.hostname);
        if (window.location.host.indexOf('localhost') === -1) {
            console.log('Triggering google event...')
            ReactGa.event({
                category: 'Art Buttons',
                action: `Viewed Art image ${img.art_id} - ${img.caption}`
            })
        }
    }

    return (
        <>
            <div className={model ? "model open" : "model"}>
                {selectedImage ? <img src={selectedImage.src} alt={selectedImage.caption} /> : ''}
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className='subh-gallery'>

                {
                    IMAGES.map((item, index) => {
                        return (
                            <div className="subh-gallery-item" key={index} onClick={
                                () => handleOpenImage(item)
                            }>
                                <img src={item.thumbnail} style={{ width: '100%' }} alt={item.caption}></img>
                            </div>
                        )
                    })
                }

                {/* <GridList
                cellHeight={250}
                spacing={40}
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
            </Dialog> */}
            </div>
        </>
    )
}



// const Image = (props) => (
//     <div
//         style={{
//             background: 'black',
//             textAlign: 'center',
//             boxSizing: 'border-box',
//             overflow: 'hidden',
//             ':hover': {
//                 opacity: 0.9,
//             },
//             // height: 'calc(50% - 10px)'
//             // maxHeight: '800px'
//             // maxWidth: 800
//         }}
//         {...props}
//     />
// );


export default MyGallery
