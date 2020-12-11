import React from 'react';

const TechnoBadges = ({technos}) =>  {
    const displayTechno = (technoName, index) => {
        switch (technoName){
            case 'react':
                return <div key={index} className='technoBadge' style={{backgroundColor: '#24b3d7'}}>React</div>
            case 'nodejs':
                return <div key={index} className='technoBadge' style={{backgroundColor: '#79cb25'}}>Node JS</div>
            case 'webpack':
                return <div key={index} className='technoBadge' style={{backgroundColor: '#ea861c'}}>Webpack</div>
            case 'semantic':
                return <div key={index} className='technoBadge' style={{backgroundColor: '#6a62d6'}}>Semantic UI</div>
            case 'PHP':
                return <div key={index} className='technoBadge' style={{backgroundColor: '#6a62d6'}}>PHP</div>
            case 'MVC':
                return <div key={index} className='technoBadge' style={{backgroundColor: '#cd9018'}}>MVC</div>
            case 'nativejs':
                return <div key={index} className='technoBadge' style={{backgroundColor: '#cd186c'}}>Javascript natif</div>
            case 'materialui':
                return <div key={index} className='technoBadge' style={{backgroundColor: '#6a62d6'}}>Material UI</div>
            case 'mongodb':
                return <div key={index} className='technoBadge' style={{backgroundColor: '#22851b'}}>Mongo DB</div>
            case 'mysql':
                return <div key={index} className='technoBadge' style={{backgroundColor: '#1b5485'}}>Mysql</div>
            case 'photoshop':
                return <div key={index} className='technoBadge' style={{backgroundColor: '#1e9ec6'}}>Photoshop</div>
            case 'illustrator':
                return <div key={index} className='technoBadge' style={{backgroundColor: '#ea8e03'}}>Illustrator</div>
            default:
                return <div key={index} className='technoBadge' style={{backgroundColor: '#6a62d6'}}>Semantic UI</div>

        }
    }

    if (technos && technos.length){
        return (
            <div className='technoContainer'>
                {
                    technos.map((techno, index) => {
                        return displayTechno(techno, index)
                    })
                }
            </div>

        )
    }
}

export default TechnoBadges;