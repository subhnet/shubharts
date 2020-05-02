import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        // background: 'black'
        color: '#fff',
        textAlign: "left",
        background: '-webkit-linear-gradient(70deg, #000000  30%, rgba(0,0,0,0) 30%), -webkit-linear-gradient(30deg, #FF8000 60%, #FFCF75 60%)',
        background: '-o-linear-gradient(70deg, #000000  30%, rgba(0,0,0,0) 30%), -o-linear-gradient(30deg, #FF8000 60%, #FFCF75 60%)',
        background: '-moz-linear-gradient(70deg, #000000  30%, rgba(0,0,0,0) 30%), -moz-linear-gradient(30deg, #FF8000 60%, #FFCF75 60%)',
        background: 'linear-gradient(70deg, #000000  30%, rgba(0,0,0,0) 30%), linear-gradient(30deg, #FF8000 60%, #FFCF75 60%)'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Open Sans", sans-serif',
        fontSize: '1.5em',
        fontWeight: 800,
        // height: '2em',
        // width: '64em',
        padding: '0.5em 1em',
        // letterSpacing: 'px',
    },
}));

const Header = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <span className={classes.title}>
                        Artworks by Subhransu
                        </span>
                    {/* <Typography variant="h6" className={classes.title}>
                    </Typography> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

Header.propTypes = {

}

export default Header
