import React, {useEffect, useState} from 'react';
import portfolioGridImages from "../../assets/img/portfolioGrid";
import {InView} from "react-intersection-observer";
import ModalImage from "./ModalImage/ModalImage";

const images = [
    {image: portfolioGridImages[0][0], imageBig: portfolioGridImages[0][1], class: ''},
    {image: portfolioGridImages[1][0], imageBig: portfolioGridImages[1][1], class: 'highlight-wide'},
    {image: portfolioGridImages[2][0], imageBig: portfolioGridImages[2][1], class: ''},
    {image: portfolioGridImages[22][0], imageBig: portfolioGridImages[22][1], class: 'highlight-box'},
    {image: portfolioGridImages[3][0], imageBig: portfolioGridImages[3][1], class: ''},
    {image: portfolioGridImages[15][0], imageBig: portfolioGridImages[15][1], class: ''},
    {image: portfolioGridImages[24][0], imageBig: portfolioGridImages[24][1], class: ''},
    {image: portfolioGridImages[25][0], imageBig: portfolioGridImages[25][1], class: ''},
    {image: portfolioGridImages[26][0], imageBig: portfolioGridImages[26][1], class: ''},
    {image: portfolioGridImages[27][0], imageBig: portfolioGridImages[27][1], class: 'highlight-box'},
    {image: portfolioGridImages[20][0], imageBig: portfolioGridImages[20][0], class: 'highlight-wide'},
    {image: portfolioGridImages[16][0], imageBig: portfolioGridImages[16][0], class: 'highlight-wide'},
    {image: portfolioGridImages[13][0], imageBig: portfolioGridImages[13][0], class: 'highlight-wide'},
    {image: portfolioGridImages[17][0], imageBig: portfolioGridImages[17][1], class: 'highlight-tall'},
    {image: portfolioGridImages[4][0], imageBig: portfolioGridImages[4][1], class: 'highlight-tall'},
    {image: portfolioGridImages[5][0], imageBig: portfolioGridImages[5][1], class: 'highlight-box'},
    {image: portfolioGridImages[21][0], imageBig: portfolioGridImages[21][1], class: 'highlight-box'},
    {image: portfolioGridImages[6][0], imageBig: portfolioGridImages[6][1], class: 'highlight-wide'},
    {image: portfolioGridImages[7][0], imageBig: portfolioGridImages[7][1], class: 'highlight-tall'},
    {image: portfolioGridImages[18][0], imageBig: portfolioGridImages[18][1], class: 'highlight-wide'},
    {image: portfolioGridImages[19][0], imageBig: portfolioGridImages[19][1], class: 'highlight-box'},
    {image: portfolioGridImages[8][0], imageBig: portfolioGridImages[8][1], class: 'highlight-box'},
    {image: portfolioGridImages[23][0], imageBig: portfolioGridImages[23][1], class: 'highlight-wide'},
    {image: portfolioGridImages[9][0], imageBig: portfolioGridImages[9][1], class: ''},
    {image: portfolioGridImages[10][0], imageBig: portfolioGridImages[10][1], class: ''},
    {image: portfolioGridImages[11][0], imageBig: portfolioGridImages[11][1], class: 'highlight-wide'},
    {image: portfolioGridImages[12][0], imageBig: portfolioGridImages[12][1], class: ''},
    {image: portfolioGridImages[14][0], imageBig: portfolioGridImages[14][1], class: ''},
]


const PortfolioGrid = () => {
    const [view, setView] = useState(false);

    const [startAnimationItems, setStartAnimationItems] = useState({
        title: false,
        p: false,
        grid: false,
    })
    const [clickedImage, setClickedImage] = useState('');

    const handleClickImage = (image) => {
        setClickedImage(image)
    }

    const handleCloseImage = () => setClickedImage('')
    const generateImagesBoxes = () => {
        return images.map((object, index) => {
            return (
                <li key={index} className={object.class}>
                    <div className='itemWrapper'>
                        <img onClick={() => handleClickImage(object.imageBig)} alt='projectImage' draggable={false} src={object.imageBig}/>
                    </div>
                </li>

            )
        })
    }

    useEffect(() => {
        let mounted = true;
        if (mounted && view) {
            setTimeout(() => {
                setStartAnimationItems((prevState) => {
                    return {...prevState, title: true}
                })
                setTimeout(() => {
                    setStartAnimationItems((prevState) => {
                        return {...prevState, p: true}
                    })
                }, 100)
            }, 0)
        }
        return () => mounted = false;
    }, [view])
    const handleSetView = (inView) => {
        if (inView) {
            setView(true)
        }
    }

    return (
        <>


            <div className='container position-relative'>
                {
                    clickedImage
                        ? <>
                            <ModalImage hide={handleCloseImage} image={clickedImage}/>
                        </>
                        : null
                }
                <InView
                    threshold={1}
                    onChange={(inView, entry) => handleSetView(inView)}
                    className='portfolioGridWrapper'
                >
                    <h3 className={`${startAnimationItems.title ? 'fade-in-left' : ''}`}>Daily projects</h3>
                    <p className={`${startAnimationItems.p ? 'fade-in-left' : ''}`}>Une selection de quelques projets que
                        j'ai réalisé de 2016 à aujourd'hui</p>

                    {
                        view
                            ?
                            <ul className={`portfolioGrid`}>
                                {generateImagesBoxes()}
                            </ul>
                            : null
                    }

                </InView>
            </div>
            </>

    )
}

export default PortfolioGrid;