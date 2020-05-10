import React, {useState} from 'react';
// Matcha SVG
import coeurMatcha from '../assets/svg/matcha/coeurMatcha.svg';
import matchaLogin from '../assets/svg/matcha/matchaLogin.svg';
import matchaFiltre from '../assets/svg/matcha/matchaFiltre.svg';
import matchaCard from '../assets/svg/matcha/matchaCard.svg';

import moviesPNG from '../assets/img/moviesOnly.png';
import menuBarPNG from '../assets/img/menu-bar.png';
import arrowLogoPNG from '../assets/img/arrowLogo.png';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import PlayArrow from '@material-ui/icons/PlayArrow';
import IcomoonReact from "icomoon-react";
import iconSet from './../Icon/selection.json';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import useStyles from './Style';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';

import Particles from 'react-particles-js';

const svgMatcha = [
    coeurMatcha,
    matchaLogin,
    matchaFiltre,
    matchaCard
];


const Home = (props) => {
    const classes = useStyles();
    const [isXS, setXS] = useState(window.matchMedia('(max-width: 600px)').matches);
    const [section, setSection] = useState(1);
    const [sectionUpdate, setSectionUpdate] = useState(false);
    const [animate] = useState({
        fadeInStartLeft: 'fadeInLeft',
        fadeInStartRight: 'fadeInRight',
        fadeInOutLeft: 'fadeOutLeft',
        fadeOutRight: 'fadeOutRight',
        flipInX: 'fadeIn',
        flipOutX: 'fadeOut'
    });
    const [svgM, setSvgM] = useState([]);
    let XS = window.matchMedia('(max-width: 600px)');
    const [isLoadingNextSection, setLoadingNextSection] = useState(false);
    XS.addEventListener('change',  () => { setXS(XS.matches) });

    const renderLeftSectionMobile = () => {
            if (section === 1){
                return (
                <div  className={
                    !sectionUpdate ?
                        `${classes.gridItemTitle} animated ${animate.fadeInStartLeft}` :
                        `${classes.gridItemTitle} animated ${animate.fadeInOutLeft}`}
                >
                    <Grid item xs={12}>
                        <div>
                            <div className={classes.underDescProject}>
                                <span style={{marginRight: '10px'}}> <IcomoonReact iconSet={iconSet} color="#ffff" size={20} icon="42" /> </span>
                                <span className={classes.schoolProject}>School project</span>
                            </div>
                            <p className={classes.titleProject}> Hypertube </p>
                            <p className={classes.descProject}> A torrent streaming app created with Node.JS & React.JS </p>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                <div>
                                    <Button
                                        variant="outlined"
                                        startIcon={ <PlayArrow />}
                                        className={classes.buttonSeeDemo}
                                    >
                                        See demo
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    {/*{renderArrowNext()}*/}
                </div>
                )}
    else if (section === 2){
        return (
            <React.Fragment>
                <Grid item xs={12}
                      className={
                          !sectionUpdate ?
                              `${classes.gridItemTitle} animated ${animate.fadeInStartLeft}` :
                              `${classes.gridItemTitle} animated ${animate.fadeInOutLeft}`

                      }
                      style={{zIndex: '999 !important'}}
                >
                    <div>
                        <div className={classes.underDescProjectM}>
                            <span style={{marginRight: '10px'}}> <IcomoonReact iconSet={iconSet} color="#353535" size={20} icon="42" /> </span>
                            <span
                                className={classes.schoolProjectM}
                            >School project</span>
                        </div>
                        <p className={classes.titleProjectM}>Matcha</p>
                        <p className={classes.descProjectM}>A dating web app created with Node.JS & React.JS</p>
                    </div>
                </Grid>
                <Grid item xs={12}
                      className={`animated fadeInLeft`}
                >
                    <Button
                        variant={"outlined"}
                        startIcon={ <PlayArrow />}
                        className={classes.buttonSeeDemo}
                        style={{
                            zIndex: '2 !important',
                        }}
                    >
                        See demo
                    </Button>
                </Grid>
            </React.Fragment>
        )}
    };

    const renderLeftSectionDesktop = () => {
        if (section === 1){
            return (
                <React.Fragment>
                    <Grid item xs={12} sm={4} md={3} lg={4} xl={4}
                          className={
                              !sectionUpdate ?
                                  `${classes.gridItemTitle} animated ${animate.fadeInStartLeft}` :
                                  `${classes.gridItemTitle} animated ${animate.fadeInOutLeft}`

                          }>
                            <div className={classes.underDescProject}>
                                <span style={{marginRight: '10px'}}> <IcomoonReact iconSet={iconSet} color="#ffff" size={20} icon="42" /> </span>
                                <span className={classes.schoolProject}>School project</span>
                            </div>
                            <p className={classes.titleProject}> Hypertube </p>
                            <p className={classes.descProject}> A torrent streaming app created with Node.JS & React.JS </p>
                            <Button
                                variant={"outlined"}
                                startIcon={ <PlayArrow />}
                                className={classes.buttonSeeDemo}
                            >
                                See live demo
                            </Button>
                    </Grid>
                </React.Fragment>
            )
        }
        else  {
            return (
                <Grid item xs={12} sm={4} md={3} lg={4} xl={4}
                      className={
                          !sectionUpdate ?
                              `${classes.gridItemTitle} animated ${animate.fadeInStartLeft}`
                              :
                              `${classes.gridItemTitle} animated ${animate.fadeInOutLeft}`

                      }
                >
                        <div className={classes.underDescProjectM}>
                            <span style={{marginRight: '10px'}}> <IcomoonReact iconSet={iconSet} color="#d93a6f" size={20} icon="42" /> </span>
                            <span
                                className={classes.schoolProjectM}
                            >School project</span>
                        </div>
                        <p className={classes.titleProjectM}>Matcha</p>
                        <p className={classes.descProjectM}>A dating web app created with Node.JS & React.JS</p>
                        <Button
                            startIcon={ <PlayArrow />}
                            variant={"outlined"}
                            className={classes.buttonSeeDemo}
                        >
                            See live demo
                        </Button>
                </Grid>
            )
        }
    };

    const handleClickNext = async(goSection) => {
        // Preload images for next project
        setLoadingNextSection(true);
        const loadImages = async() => {
            const svgM = svgMatcha.map((obj) => {
                return new Promise((resolve, reject) => {
                    let img = new Image()
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                    img.src = obj
                })
            });
            await Promise.all(svgM).then((values) => {
                setLoadingNextSection(false);
                setSvgM(values)
            })
        };
        await loadImages();

        let newSection = typeof goSection !== 'undefined' ? goSection : section + 1;
        props.changeSection(newSection);
        setSectionUpdate(true);
        setTimeout(() => {
            setSection(newSection);
            setSectionUpdate(false);
        }, 800)
    }

    const renderRightSection = () => {
       if (section === 1)
       return (
                <React.Fragment>
                    <Grid item xs={12} sm={8} md={8} lg={8} xl={6}
                          className={
                              !sectionUpdate ?
                                  `${classes.gridItemSvg} animated ${animate.fadeInStartRight}`
                                  :
                                  `${classes.gridItemSvg} animated ${animate.fadeOutRight}`

                          }>
                        <React.Fragment>
                            <img
                                className={classes.svgWrapped}
                                src={moviesPNG}
                                alt="movies"
                                style={{
                                    transform: 'translatey(0px)',
                                    animation: 'float 6s ease-in-out infinite',
                                }}
                            />
                            <img
                                className={classes.svgWrapped}
                                src={menuBarPNG}
                                alt="menubar"
                                style={{
                                    transform: 'translatey(0px)',
                                    animation: 'float 4s ease-in-out infinite',
                                }}
                            />
                            <img
                                className={classes.svgWrapped}
                                src={arrowLogoPNG}
                                alt="arrowLogo"
                                style={{
                                    transform: 'translatey(0px)',
                                    animation: 'float 3s ease-in-out infinite',
                                }}
                            />
                        </React.Fragment>
                    </Grid>
                </React.Fragment> )
           else if (section === 2 && svgM && svgM.length)
               return (
                <React.Fragment>
                    <Grid item xs={12} sm={8} md={8} lg={8} xl={6}
                          className={
                              !sectionUpdate ?
                                  `${classes.gridItemSvgM} animated ${animate.fadeInStartRight}`
                                  :
                                  `${classes.gridItemSvgM} animated ${animate.fadeOutRight}`

                          }>
                        {/*<ArrowForwardIosRoundedIcon onClick={() => handleClickNext()} fontSize='large'*/}
                        {/*                            className={classes.arrowNextProject}/>*/}
                        <React.Fragment>
                            <img
                                className={classes.svgWrappedM}
                                src={matchaCard}
                                alt="Matcha Card"
                                style={{
                                    transform: 'translatey(0px)',
                                    animation: 'float 2s ease-in-out infinite',
                                }}
                            />
                            <img
                                className={classes.svgWrappedM}
                                src={matchaFiltre}
                                alt="Matcha filtres"
                                style={{
                                    transform: 'translatey(0px)',
                                    animation: 'float 4s ease-in-out infinite',
                                }}
                            />
                            <img
                                className={classes.svgWrappedM}
                                src={coeurMatcha}
                                alt="Matcha heart"
                                style={{
                                    transform: 'translatey(0px)',
                                    animation: 'float 3s ease-in-out infinite',
                                }}
                            />
                            <img
                                className={classes.svgWrappedM}
                                src={matchaLogin}
                                alt="Login Matcha"
                                style={{
                                    zIndex: '-1',
                                    transform: 'translatey(0px)',
                                    animation: 'float 6s ease-in-out infinite',
                                }}
                            />
                        </React.Fragment>
                    </Grid>
                </React.Fragment> )
    };

    const particlesH = () => {
        return (
            <Particles
                className={classes.particlesHClass}
                params={{
                    particles: {
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 5,
                                "color": "#999999"
                            },
                        },
                        "opacity": {
                            "value": 0.3,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 130,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                    },
                }}
            />
        )
    };

    const topBarControlSlider = (type) => {
        return (
            <div className={classes.containerTopBar}>
                <div>
                    <span onClick={() => handleClickNext(1)} className={`${type === 'M' ? classes.dotM : classes.dot}`}></span>
                    <span onClick={() => handleClickNext(2)} className={type === 'M' ? `${classes.dotM} ${classes.dotActive}`: classes.dot}></span>
                    <span onClick={() => handleClickNext(3)} className={`${type === 'M' ? classes.dotM : classes.dot}`}></span>
                </div>
                <React.Fragment>
                    {isLoadingNextSection ?
                        <CircularProgress className={classes.loadingNextProject}
                                          color="inherit"/> :
                        <ArrowForwardIosRoundedIcon onClick={() => handleClickNext()}
                                                    className={classes.arrowNextProject}/>}
                </React.Fragment>
            </div>
        )

    }
    return (
        <React.Fragment>
        <div
            style={{paddingLeft: '0px !important', overflow: 'hidden'}}
            className={!sectionUpdate ? `animated ${animate.flipInX}` : `animated ${animate.flipOutX}`
            }>
            {section === 1 ?
                <div className={classes.BigContainerHypertube} >
                    {particlesH()}
                    <div className={classes.containerProject}>
                        <div className={classes.topBarControl}> {topBarControlSlider("H")} </div>
                            <Grid container direction="row" justify={"space-between"}
                                  alignItems={"center"}
                                  className={classes.gridContainer}
                            >
                                {isXS ? renderLeftSectionMobile() : renderLeftSectionDesktop() }
                                {renderRightSection()}
                            </Grid>
                    </div>
                </div>
            :
                <div className={classes.BigContainerMatcha}>
                    <div className={classes.containerProjectM}>
                        <div className={classes.topBarControl}> {topBarControlSlider("M")} </div>
                            <Grid container direction="row" justify={"space-between"}
                                  alignItems={"center"}
                                  className={classes.gridContainerM}>
                                {isXS ? renderLeftSectionMobile() : renderLeftSectionDesktop() }
                                {renderRightSection()}
                            </Grid>
                        </div>
                </div>

            }
            {/* }// After Slider */ }
        </div>
            <div className={classes.topShapeHeader}>
                <div className={classes.topShapeHeaderSvg}></div>
                <h1 className={classes.projectTitle}>Projects</h1>
            </div>
            <Grid container justify={"space-evenly"} direction={'row'}>
                <Grid className={classes.cardProject} item xs={12} sm={3}>
                    <div className={classes.containerCard}>
                        <p> Hypertube</p>
                    </div>
                </Grid>
                <Grid className={classes.cardProject} item xs={12} sm={3}>
                    <div className={classes.containerCard}>
                        <p> Hypertube</p>
                    </div>
                </Grid>
                <Grid className={classes.cardProject} item xs={12} sm={3}>
                    <div className={classes.containerCard}>
                        <p> Hypertube</p>
                    </div>
                </Grid>
            </Grid>
            <Divider style={{marginBottom: '400px'}} />


        </React.Fragment>
    )
};

export default Home;