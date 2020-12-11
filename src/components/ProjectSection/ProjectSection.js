import React from 'react';
import ProjectItem from "./ProjectItem/ProjectItem";
import Slider from "../Slider/Slider";

const projects = {
    matcha: {
        title: 'MatchApp',
        type: 'Cursus 42',
        technos: ['react', 'nodejs', 'semantic', 'webpack', 'mysql'],
        description: 'MatchApp est une application web de rencontres, permettant à deux potentielles âmes soeurs de se rencontrer, de l’inscription au contact final. '
    },
    hypertube: {
        title: 'Hypertube',
        type: 'Cursus 42',
        technos: ['react', 'nodejs', 'materialui', 'webpack', 'mongodb'],
        description: 'Application web permettant à un utilisateur de rechercher et visionner des vidéos téléchargées au travers du protocole BitTorrent.'
    },
   esthelive: {
        title: 'Maquette Esthelive',
        type: 'Freelance',
        technos: ['photoshop', 'illustrator'],
        description: 'Maquette pré-développement qui consiste en la réalisation d’une plateforme sécurisée de téléconsultation entre médecins et patients dans le cadre d’opérations de chirurgie esthétique.'
    },
    camagru: {
        title: 'Camagru',
        type: 'Cursus 42',
        technos: ['PHP', 'mysql', 'MVC', 'nativejs'],
        description: 'Première application web. L\'utilisateur du site pourra sélectionner une image dans une liste d’images superposables, prendre une photo depuis sa webcam et admirer le résultat d’un montage digne\n' +
            'de James Cameron'
    }
}
const ProjectSection = () => {
    return (
        <>
            <section style={{opacity: 0}} className='projectSection fade-in-down'>
                <Slider />
                <div className='container'>
                    <div className='projectsWrapper'>
                        <ProjectItem
                            reverse={false}
                            projectName='hypertube'
                            title={projects.hypertube.title}
                            type={projects.hypertube.type}
                            technos={projects.hypertube.technos}
                            desc={projects.hypertube.description}
                        />
                        <ProjectItem
                            reverse={false}
                            backgroundSvg={'matchaBackgroundSvg'}
                            projectName='matcha'
                            title={projects.matcha.title}
                            type={projects.matcha.type}
                            technos={projects.matcha.technos}
                            desc={projects.matcha.description}
                        />
                       <ProjectItem
                            reverse={false}
                            backgroundSvg={''}
                            projectName='esthelive'
                            title={projects.esthelive.title}
                            type={projects.esthelive.type}
                            technos={projects.esthelive.technos}
                            desc={projects.esthelive.description}
                        />
                        <ProjectItem
                            reverse={false}
                            backgroundSvg={''}
                            projectName='camagru'
                            title={projects.camagru.title}
                            type={projects.camagru.type}
                            technos={projects.camagru.technos}
                            desc={projects.camagru.description}
                        />
                    </div>


                </div>
            </section>
        </>
    )
}

export default ProjectSection;