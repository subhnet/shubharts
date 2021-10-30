import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        // background: 'black'
        color: '#fff',
        textAlign: "left",
        background: '-webkit-linear-gradient(70deg, #000000  30%, rgba(0,0,0,0) 30%), -webkit-linear-gradient(30deg, #FF8000 60%, #FFCF75 60%)',
        // background: '-o-linear-gradient(70deg, #000000  30%, rgba(0,0,0,0) 30%), -o-linear-gradient(30deg, #FF8000 60%, #FFCF75 60%)',
        // background: '-moz-linear-gradient(70deg, #000000  30%, rgba(0,0,0,0) 30%), -moz-linear-gradient(30deg, #FF8000 60%, #FFCF75 60%)',
        // background: 'linear-gradient(70deg, #000000  30%, rgba(0,0,0,0) 30%), linear-gradient(30deg, #FF8000 60%, #FFCF75 60%)'
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
                        <span style={{ color: "#D4DCFF" }}>A</span>
                        <span style={{ color: "#7D83FF" }}>r</span>
                        <span style={{ color: "#007FFF" }}>t</span>
                        <span style={{ color: "#1AFFD5" }}>w</span>
                        <span style={{ color: "#D6FF79" }}>o</span>
                        <span style={{ color: "#C485FF" }}>r</span>
                        <span style={{ color: "#FF8000" }}>k</span>
                        <span style={{ color: "#00CC00" }}>s </span>
                        by Subhransu
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
