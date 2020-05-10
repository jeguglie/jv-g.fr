import React, {useEffect, useImperativeHandle, forwardRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MoreIcon from '@material-ui/icons/MoreVert';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const useStyles = makeStyles(theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            marginRight: '5em',
        },
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            marginRight: '20%',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    '.MuiToolbar-regular' : {
        minHeight: '84px !important'
    },
    mobileDotContainer: {
        '& .MuiToolbar-regular' : {
            minHeight: '84px !important'
        },
        '& .MuiPaper-rounded': {
            color: 'white',
            background: 'linear-gradient(135deg, rgba(30,72,129,1) 0%, rgba(14,17,33,1) 35%, rgba(14,17,33,1) 65%, rgba(70,26,57,1) 100%);',
        },
    },
    titleMenuItemH: {
        fontSize: '1em !important',
        fontFamily: 'Rubik, sans-serif',
        textTransform: 'uppercase',
        fontWeight: '300',
        borderRadius: '20px',
    },
    activeMenuH: {
        background: 'linear-gradient(135deg, rgba(30,72,129,1) 0%, rgba(14,17,33,1) 35%, rgba(14,17,33,1) 65%, rgba(70,26,57,1) 100%);',
        borderRadius: '20px',

    },
    activeMenuM: {
        backgroundColor: '#db366e !important',
        borderRadius: '20px',
    },
    titleMenuItemM: {
        fontSize: '1em !important',
        fontFamily: 'Rubik, sans-serif',
        textTransform: 'uppercase',
        fontWeight: '300',
    },
    ToolbarDesktop: {
        justifyContent: 'flex-end',
        height: '64px !important',
    },
    AppBar: {
        backgroundColor: '#100d1b',
        boxShadow: '2px 2px 20px rgba(0,0,0,0.1) !important',
    },
    AppBarM: {
        backgroundColor: '#191919',
        boxShadow: '2px 2px 20px rgba(0,0,0,0.1) !important'
    }

}));

const defaultMenu = {
    home : false,
    projects: false,
    cv: false,
    contact: false
};

const TopMenu = (forwardRef((props, ref) => {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [activeMenu, setActiveMenu] = React.useState(false);
    const [activeClassProject, setActiveClassProject] = React.useState({
            activeMenu : classes.activeMenuH,
            titleMenuItem : classes.titleMenuItemH,
            AppBar: classes.AppBar,
        });
    const [animate] = useState({
        fadeInStartLeft: 'fadeIn',
        fadeInOutLeft: 'fadeOut',
    });
    const [sectionUpdate, setSectionUpdate] = useState(false);


    // Ref accessible by App.js
    useImperativeHandle(ref, () => ({
        updateStyle(section) {
            setSectionUpdate(true);
                setSectionUpdate(false);
                if (section !== 1)
                    setActiveClassProject({
                        activeMenu: classes.activeMenuM,
                        AppBar: classes.AppBarM,
                        titleMenuItem : classes.titleMenuItemM
                    });
                else
                    setActiveClassProject({
                        activeMenu: classes.activeMenuH,
                        AppBar: classes.AppBar,
                        titleMenuItem : classes.titleMenuItemH
                    });
        }
    }));

    useEffect(() => {
        if (window.location.pathname) {
            switch (window.location.pathname) {
                case '/':
                    setActiveMenu({...defaultMenu, home: true});
                    break;
                case '/projects':
                    setActiveMenu({...defaultMenu, projects: true});
                    break;
                case '/cv':
                    setActiveMenu({...defaultMenu, cv: true});
                    break;
                case '/contact':
                    setActiveMenu({...defaultMenu, contact: true});
                    break;
                default:
                    setActiveMenu({...defaultMenu});
            }
        }

    }, []);


    // Render functions
    const handleMobileMenuOpen = event => { setMobileMoreAnchorEl(event.currentTarget) };
    const handleMobileMenuClose = () => { setMobileMoreAnchorEl(null) };
    const renderMobileMenu = () => {
        return (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
                className={classes.mobileDotContainer}
                keepMounted
            >
                <div>
                    <MenuItem className={activeMenu.home ? activeClassProject.activeMenu : ''}>
                        <p>Home</p>
                    </MenuItem>
                    <MenuItem>
                        <p>Projects</p>
                    </MenuItem>
                    <MenuItem>
                        <p>CV</p>
                    </MenuItem>
                    <MenuItem>
                        <p>Contact</p>
                    </MenuItem>
                </div>
            </Menu>
        )
    };

    return (
        <React.Fragment>
            <AppBar className={
                !sectionUpdate ?
                    `${activeClassProject.AppBar} animated ${animate.fadeInStartLeft}` : `${classes.AppBar} animated ${animate.fadeInOutLeft}`
            }>
                <Toolbar className={classes.ToolbarDesktop}>
                    <div className={classes.sectionDesktop}>
                        <MenuItem className={activeMenu.home ? activeClassProject.activeMenu : ''}>
                            <Typography className={activeClassProject.titleMenuItem}>
                                Home
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography className={activeClassProject.titleMenuItem}>
                                Projects
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography className={activeClassProject.titleMenuItem}>
                                CV
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography className={activeClassProject.titleMenuItem}>
                                Contact
                            </Typography>
                        </MenuItem>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            color="inherit"
                            onClick={handleMobileMenuOpen}
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu()}
        </React.Fragment>
    );
}));

export default TopMenu;