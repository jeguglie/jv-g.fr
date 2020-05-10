import {makeStyles} from "@material-ui/core/styles";
import Particles from "react-particles-js";
import React from "react";

const useStyles = makeStyles(theme => ({
        BigContainerHypertube: {
            [theme.breakpoints.up('xs')]: {
                marginTop: '64px',
                position: 'relative',
                background: 'linear-gradient(152deg, rgba(30,72,129,1) 0%, rgba(14,17,33,1) 35%, rgba(14,17,33,1) 65%, rgb(227, 35, 113) 100%)',
                height: '680px !important',
                width: '100%'
            },
            [theme.breakpoints.up('sm')]: {height: '550px !important'},
            [theme.breakpoints.up('md')]: {height: '690px !important'},
            [theme.breakpoints.up('lg')]: {height: '750px !important'},

        },
        BigContainerMatcha: {
            [theme.breakpoints.up('xs')]: {
                marginTop: '64px',
                position: 'relative',
                background: 'linear-gradient(-135deg, rgba(196,196,196,0.7) 0%, rgba(196,196,196,1) 27%, rgba(235,235,235,1) 100%)',
                height: '680px !important',
                width: '100%'
            },
            [theme.breakpoints.up('sm')]: {height: '550px !important'},
            [theme.breakpoints.up('md')]: {height: '650px !important'},
            [theme.breakpoints.up('lg')]: {height: '750px !important'},

        },
        gridContainer: {
            [theme.breakpoints.up('xs')]: {height: '680px !important'},
            [theme.breakpoints.up('sm')]: {height: '550px !important'},
            [theme.breakpoints.up('md')]: {height: '670px !important'},
            [theme.breakpoints.up('lg')]: {height: '750px !important'},

        },
        gridContainerM: {
            [theme.breakpoints.up('xs')]: {height: '360px !important'},
            [theme.breakpoints.up('sm')]: {height: '550px !important'},
            [theme.breakpoints.up('md')]: {height: '650px !important'},
            [theme.breakpoints.up('lg')]: {height: '750px !important'},

        },
        svgWrapped: {
            [theme.breakpoints.up('xs')]: {
                height: '470px !important',
                position: 'absolute',
                margin: 'auto',
                marginLeft: '-5em',
                marginTop: '1em',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            },
            [theme.breakpoints.up('sm')]: {
                height: '450px !important',
                margin: 'auto'
            },
            [theme.breakpoints.up('md')]: {height: '540px !important'},
            [theme.breakpoints.up('lg')]: {height: '630px !important'},

        },
        svgWrappedM: {
            [theme.breakpoints.up('xs')]: {
                height: '500px !important',
                position: 'absolute',
                margin: 'auto',
                marginLeft: '-17em',
                marginTop: '4em',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            },
            [theme.breakpoints.up('sm')]: {
                height: '450px !important',
                margin: 'auto',
                marginTop: '7em',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            },
            [theme.breakpoints.up('md')]: {height: '540px !important'},
            [theme.breakpoints.up('lg')]: {height: '630px !important'},

        },
        wrapperSVG: {
            position: 'relative',
        },
        gridItemTitle: {
            [theme.breakpoints.up('xs')]: {
                textAlign: 'left',
                width: '100%',
                marginTop: '8em',
            },
            [theme.breakpoints.up('sm')]: {marginTop: '0em'},
            // [theme.breakpoints.up('md')]: { marginTop: '-13em !important' },
            // [theme.breakpoints.up('lg')]: { marginTop: '-15em !important' },
        },
        gridItemSvg: {
            height: '100%',

            [theme.breakpoints.up('xs')]: {
                marginTop: '-3em ',
            },
            [theme.breakpoints.up('sm')]: {
                marginTop: '1em ',

            },

        },
        gridItemSvgM: {
            height: '100%',
            [theme.breakpoints.up('xs')]: {
                marginTop: '-3em ',
                zIndex: '2 !important',

            },
            [theme.breakpoints.up('sm')]: {
                marginLeft: '-1em ',
            },

        },
        titleProject: {
            [theme.breakpoints.up('xs')]: {
                fontSize: '3em',
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: '2.5em',
            },
            fontSize: '2.5em',
            color: 'white',
            fontWeight: '300',
            marginTop: '0em',
            marginBottom: '0em',
            fontFamily: 'Rubik, sans-serif',
        },
        titleProjectM: {
            [theme.breakpoints.up('xs')]: {
                fontSize: '3em',
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: '2.5em',
            },
            fontSize: '2.5em',
            color: '#d93a6f',
            fontWeight: '700',
            marginTop: '0em',
            marginBottom: '0em',
            fontFamily: 'Rubik, sans-serif',
        },
        descProjectM: {
            color: '#353535',
            textAlign: 'left',
            [theme.breakpoints.up('xs')]: {
                marginTop: '1em !important',
                fontSize: '0.9em',
            },
            [theme.breakpoints.up('sm')]: {
                marginTop: '1em !important',
                fontSize: '1.4em',

            },
            [theme.breakpoints.up('md')]: {
                maxWidth: '350px',
            },
        },
        descProject: {
            color: 'white',
            textAlign: 'left',
            [theme.breakpoints.up('xs')]: {
                marginTop: '1em !important',
                fontSize: '0.9em',
            },
            [theme.breakpoints.up('sm')]: {
                marginTop: '1em !important',
                fontSize: '1.4em',

            },
            [theme.breakpoints.up('md')]: {
                maxWidth: '350px',
            },
        },
        buttonSeeDemo: {
            [theme.breakpoints.up('xs')]: {
                fontSize: '0.9em',
                zIndex: '400',
                marginTop: '1em',
                backgroundColor: 'white',
                borderRadius: '15px !important',
                border: '1px solid white',
                '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'white'
                },
            },
            [theme.breakpoints.up('sm')]: {
                padding: '8px',
                paddingLeft: '15px',
                paddingRight: '15px',
                fontSize: '1em',
            }

        },
        dividerProjectTitle: {
            backgroundColor: 'white !important',
            marginBottom: '1.5em',
            marginTop: '1.5em',
            opacity: '0.4',
            width: '60%'
        },
        underDescProject: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',

        },
        schoolProject: {
            [theme.breakpoints.up('xs')]: {
                color: 'white',
                fontFamily: 'Rubik, sans-serif',
                fontSize: '0.7em',
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: '1em',

            },
        },
        schoolProjectM: {
            [theme.breakpoints.up('xs')]: {
                color: '#353535',
                fontFamily: 'Rubik, sans-serif',
                fontSize: '0.7em',
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: '1em',

            },
        },
        dot: {
            [theme.breakpoints.up('xs')]: {
                height: '40px',
                cursor: 'pointer',
                width: '40px',
                marginRight: '12px',
                fontSize: '1em',
                backgroundColor: '#bbb',
                opacity: '0.5',
                border: '1px solid #bbb',
                borderRadius: '50%',
                display: 'inline-block',
                boxShadow: '1px 8px 15px rgba(0,0,0,0.15)',

                '&:hover': {
                    backgroundColor: 'transparent',
                    border: '1px solid white',
                },
            },
            [theme.breakpoints.up('sm')]: {
                width: '30px',
                height: '30px',
                marginRight: '15px',
                marginTop: '-1em !important',
                fontSize: '1em',
            },

        },
        dotM: {
            [theme.breakpoints.up('xs')]: {
                height: '40px',
                cursor: 'pointer',
                width: '40px',
                marginRight: '12px',
                fontSize: '1em',
                border: '1px solid white',
                backgroundColor: '#ffffff',

                borderRadius: '50%',
                display: 'inline-block',
                boxShadow: '1px 8px 15px rgba(0,0,0,0.15)',
                '&:hover': {
                    border: '1px solid #ffffff',
                    backgroundColor: '#bb376e'
                },
            },
            [theme.breakpoints.up('md')]: {
                width: '30px',
                height: '30px',
                marginRight: '15px',
                marginTop: '-1em !important',
                fontSize: '1em',
            },

        },
        dotActive: {
            border: '1px solid white',
            backgroundColor: 'transparent'
        },
        dotActiveM: {
            border: '1px solid #ffffff',
            backgroundColor: '#bb376e'
        },

        containerProject: {
            // marginTop: '85px !important',
            [theme.breakpoints.up('xs')]: {
                width: '90%',
                maxWidth: '1280px',
                top: '50%',
                left: '50%', /* à 50%/50% du parent référent */
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
            },
            [theme.breakpoints.up('sm')]: {
                paddingLeft: '45px !important',
                paddingRight: '45px !important',
            }
        },
        containerProjectM: {
            // marginTop: '85px !important',
            [theme.breakpoints.up('xs')]: {
                width: '90%',
                maxWidth: '1280px',
                top: '50%',
                left: '50%', /* à 50%/50% du parent référent */
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
            },
            [theme.breakpoints.up('sm')]: {
                paddingLeft: '45px !important',
                paddingRight: '45px !important',
            }
        },
        particlesHClass: {
            [theme.breakpoints.up('xs')]: {
                height: '680px !important',
                opacity: 0.5
            },
            [theme.breakpoints.up('sm')]: {height: '550px !important'},
            [theme.breakpoints.up('md')]: {height: '650px !important'},
            [theme.breakpoints.up('lg')]: {height: '750px !important'},
        },
    topShapeHeader: {
        position: 'relative',
        height: '300px',
        overflow: 'hidden'
    },
    topShapeHeaderSvg: {
            zIndex: '-1',
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        width: '100%',
        height: '100%',
        transform: 'skewY(-6deg)',
        overflow: 'hidden',
        transformOrigin: 'top left',
        backgroundImage: 'linear-gradient(90deg, #f0f0f0 10%, #fcfcfc)'
    },
    topBarControl : {
        position: 'absolute',
        width: '100%',

        marginLeft: '-45px'
    },
    arrowNextProject : {
        color: 'white',
        transform: 'scale(1.6)',
        '&:hover': {
            transform: 'scale(1.8)',
        }
    },
    loadingNextProject: {
        color: 'white'
    },
    containerTopBar: {
        display: 'flex',
        zIndex: 400,
        justifyContent : 'space-between',
        marginLeft: '48px',
        marginRight: '28px',
        marginTop: '50px',
        position: 'relative',
        alignItems: 'center'
    },
    containerDescProject: {
        marginTop: '8em'
    },
    projectTitle: {
        textAlign: 'center',

        fontFamily: "'Rubik', sans-serif",
        fontWeight: 300,
        color: '#ababab',
        fontSize: '7em',
        margin: '0 auto',
        padding: '30px 0',
    },
    cardProject: {
            borderRadius: '25::±px',
           backgroundColor: 'red',
        width: '100%',
        margin: '20px',
        height: '200px'
    },
    containerCard: {

    }
}));

export default useStyles;