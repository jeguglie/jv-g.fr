import React, { useState} from 'react';
import Thumbnails from './Thumbnails'

import imagesMatcha from "../../../../assets/img/matcha";
import imagesHypertube from "../../../../assets/img/hypertube/index";
import imagesCamagru from "../../../../assets/img/camagru/index";
import imagesEsthelive from "../../../../assets/img/esthelive";


import Featured from "./Featured/Featured";
import IconContainer from "./Featured/Image/IconContainer/IconContainer";

const ProjectOpen = ({handleClickProject, projectName}) => {
    // Close projectOpen for animate
    const [close, setClose] = useState(false);
    // Close Image  for animate
    const [closeImage, setCloseImage] = useState(false);
    // Open image
    const [openImage, setOpenImage] = useState(false);
    const handleOpenImage = () => {
        setOpenImage(!openImage);
    }
    // Featured image order
    const [featuredImage, setFeaturedImage] = useState(1);
    const [projectThumbs] = useState(() => {
        switch (projectName){
            case 'matcha':
                return imagesMatcha;
            case 'hypertube':
                return imagesHypertube;
            case 'esthelive':
                return imagesEsthelive
            case 'camagru':
                return imagesCamagru;
            default:
                return ''
        }
    })


    const handleClickImage = (imageID) => {
        if (imageID !== featuredImage){
            setCloseImage(true);
            setTimeout(() => {
                setFeaturedImage(imageID)
                setCloseImage(false);

            }, 50)
        }
    }


    const handleSetImage = (direction) => {
        switch (direction){
            case 'next':
                if (featuredImage + 1 <= projectThumbs.length - 1)
                    return handleClickImage(featuredImage + 1)
                else
                    return handleClickImage(1);
            case 'prev':
                if (featuredImage - 1 >= 1)
                    return handleClickImage(featuredImage - 1);
                else
                    return handleClickImage(projectThumbs.length -1)
            default:
                return
        }

    }

    const handleCloseProject = () => {
        setClose(true);
        setTimeout(() => {
            setClose(false);
            handleClickProject();
        }, 300)
    }


   return (
        <div className={`projectOpen ${close ? 'closeProject' : ''}`}>
            <div className='content'>
                <div className='row'>
                    <div className={`col-12 col-sm-12 col-md-5 col-lg-6 projectOpenLeftOrder`} style={{alignItems: 'center', display: 'flex'}}>
                        <div className='left'>
                            <Thumbnails
                                images={projectThumbs}
                                handleClickImage={handleClickImage}
                                activeIndex={featuredImage}
                            />
                        </div>
                    </div>
                    <div className={`col-12 col-sm-12 col-md-7 col-lg-6 projectOpenRightOrder`}>
                        <div className={`right`}>
                            <div className={`featured ${openImage ? 'openImage' : ''}`}>
                                <IconContainer handleOpenImage={handleOpenImage} setImage={handleSetImage} handleCloseProject={handleCloseProject}/>
                                <Featured
                                    handleCloseProject={handleCloseProject}
                                    featuredImage={projectThumbs[featuredImage]}
                                    closeImage={closeImage}
                                    setImage={handleSetImage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectOpen;