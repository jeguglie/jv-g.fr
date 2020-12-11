import React, {useEffect, useState} from 'react';
import Particles from "react-particles-js";
// Projects images
import matchaCard from "./../../assets/svg/matcha/matchaCard.svg";
import matchaFiltre from "./../../assets/svg/matcha/matchaFiltre.svg";
import coeurMatcha from "./../../assets/svg/matcha/coeurMatcha.svg";
import matchaLogin from "./../../assets/svg/matcha/matchaLogin.svg";

import moviesPNG from "./../../assets/img/movies-hypertube-jvg.png";
import menuBarPNG from "./../../assets/img/menu-hypertube-jvg.png";
import arrowLogoPNG from "./../../assets/img/arrow-hypertube-jvg.png";
import {ReactComponent as ArrowNext} from "../../assets/svg/icons/next.svg";

const projects = {
    hypertube: [
        moviesPNG,
        menuBarPNG,
        arrowLogoPNG
    ],
    matcha:
        [
                matchaLogin,
                matchaFiltre,
                matchaCard,
            coeurMatcha,
        ],
}



const paramsParticles = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 300
            }
        },
        color: {
            value: "#ffffff"
        },
        opacity: {
            value: 0.2,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 9,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable_auto: true,
            distance: 120,
            color: "#fff",
            opacity: 0.2,
            width: 2,
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    retina_detect: true
}

const Slider = () => {
    const [section, setSection] = useState('hypertube');
    const [animationItems, setAnimationsItems] = useState({
        title: false,
        description: false,
        slider: ''
    })


    const handleSetSection = () => {
        setAnimationsItems((prevState => {
            return {
                ...prevState,
                slider: 'fade-out-right'
            }
        }))

        setTimeout(() => {
            setSection(() => {
                if (section === 'hypertube')
                    return 'matcha'
                return 'hypertube'
            })
            setAnimationsItems((prevState => {
                return {
                    ...prevState,
                    slider: 'fade-in-right'
                }
            }))
        }, 400)

    }

    useEffect(() => {
        const images = [
            arrowLogoPNG,
            menuBarPNG,
            moviesPNG,
            matchaCard,
            matchaFiltre,
            matchaLogin
        ]
        images.forEach((image) => {
            new Image().src = image
        });
        setTimeout(() => {
            setAnimationsItems((prevState => {
                return {
                    ...prevState,
                    title: true
                }
            }))
            setTimeout(() => {
                setAnimationsItems((prevState => {
                    return {
                        ...prevState,
                        description: true,
                        slider: 'fade-in-right'
                    }
                }))
            }, 200)
        }, 0)

    }, [])


    const rightSection = () => {
        return (
            <div style={{opacity: 0}} className={`col-12 col-md-8 sliderImagesContainer ${animationItems.slider} ${section}`}>
                {
                    section === 'matcha'
                        ?
                            projects.matcha.map((image, index) => {
                                return (
                                    <img
                                        key={index}
                                        className='sliderImages'
                                        src={image}
                                        style={{
                                            transform: 'translateY(0px)',
                                            animation: `float ${((index + 1) * 2 ).toString() + 's' } ease-in-out infinite`,
                                        }}
                                    />
                                )
                            })
                        : projects.hypertube.map((image, index) => {
                            return (
                                <img
                                    key={index}
                                    className='sliderImages'
                                    src={image}
                                    style={{
                                        transform: 'translateY(0px)',
                                        animation: `float ${((index + 1) * 2 ).toString() + 's' } ease-in-out infinite`,
                                    }}
                                />
                            )
                        })
                }
            </div>
        )
    }
    return (
        <div className={`slider`}>
            <Particles id='particles' params={paramsParticles} />
            <div className='project'>
                    <div className='container'>
                        <div
                            className='row gridContainer'
                        >

                            {/* ------------ LEFT SECTION ------------------ */}

                            <div className={`col-12 col-md-4 d-flex align-items-center`}>
                                <div className='leftProjectContainer'>
                                    <div className='leftProjectWrapper'>
                                        <h3 className={`title ${animationItems.title ? 'fade-in-left' : ''}`}>Bienvenue sur mon portfolio </h3>
                                        <p className={`description ${animationItems.description ? 'fade-in-left' : ''}`}>Vous découvrirez mes projets réalisés dans le cadre de mon cursus à l'école 42 ainsi qu'en freelance.</p>
                                    </div>
                                    <div className='arrowNextContainer'>
                                        <div onClick={handleSetSection} className='arrowNextProject'>
                                            <ArrowNext />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* ------------ RIGHT SECTION ------------------ */}
                            {rightSection()}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Slider;