import React, {useEffect, useState} from 'react';
import ProjectOpen from './ProjectOpen/ProjectOpen'
import {InView} from "react-intersection-observer";
import TechnoBadges from "./TechnoBadges";

import imagesMatcha from '../../../assets/img/matcha/index'
import imagesHypertube from '../../../assets/img/hypertube/index'
import imagesEsthelive from '../../../assets/img/esthelive/index'
import imagesCamagru from '../../../assets/img/camagru/index'


const projectImage = {
    'matcha': [imagesMatcha[0][0], imagesMatcha[0][1]],
    'hypertube': [imagesHypertube[0][0], imagesHypertube[0][1]],
    'esthelive': [imagesEsthelive[0][0], imagesEsthelive[0][1]],
    'camagru': [imagesCamagru[0][0], imagesCamagru[0][1]]
}


const ProjectItem = ({projectName, desc, title, type, technos, activeImageFullscreen, handleActiveImageFullscreen, backgroundSvg}) => {

    // Project opener
    const [openProject, setOpenProject] = useState(false)
    const handleClickProject = () => {
        setMouseOver(false)
        setOpenProject(!openProject)
    };
    const [mouseOver, setMouseOver] = useState(false)

    // Project enter viewport - ANIMATIONS
    const [startAnimation, setStartAnimation] = useState(false);
    const [startAnimationItems, setStartAnimationItems] = useState({
        title: false,
        technobadges: false,
        right: false,
        description: false
    })
    const handleChangeView = (inView) => {
        if (!activeImageFullscreen && !startAnimation && inView) {
            setStartAnimation(true)
        }
    }

    useEffect(() => {
        let mounted = true;
        if (mounted && startAnimation) {
            setTimeout(() => {
                setStartAnimationItems((prevState) => {
                    return {...prevState, title: true, right: true, technobadges: true}
                })
                setTimeout(() => {
                    setStartAnimationItems((prevState) => {
                        return {...prevState, description: true}
                    })
                }, 200)
            }, 300)
        }
        return () => mounted = false;
    }, [startAnimation])

    //
    return (
        <div className={`projectWrapper`}>
            {
                openProject &&
                <ProjectOpen
                    handleClickProject={handleClickProject}
                    projectName={projectName}
                    handleActiveImageFullscreen={handleActiveImageFullscreen}
                />
            }
            {
                !openProject &&
                <InView
                    threshold={0.8}
                    onChange={(inView, entry) => handleChangeView(inView)}
                    className={`projectItem ${projectName === 'matcha' ? 'matcha' : null}`}
                >
                    <div className={`left ${startAnimationItems.title ? 'fade-in-left' : ''}`}>
                        <div className='d-flex align-items-center mb-3 mt-2'>
                            <div><h3 className='title'>{title}</h3></div>
                            <div className='badgeProject'>{type}</div>
                        </div>
                        <p className={`${startAnimationItems.description ? 'fade-in-left' : ''}`}>{desc}</p>
                        {startAnimationItems.technobadges && <TechnoBadges technos={technos}/>}

                    </div>
                    <div className={`right ${mouseOver ? 'right-hover' : ''} ${startAnimationItems.right ? 'fade-in-right' : ''}`}>
                        <div  className='right-wrapper'>
                            <img
                                onClick={handleClickProject}
                                onMouseLeave={() => setMouseOver(false)}
                                onMouseEnter={() => setMouseOver(true)}
                                src={projectImage[projectName][1]} alt="Features"
                            />
                        </div>
                    </div>
                </InView>
            }

        </div>
    )
}

export default ProjectItem;