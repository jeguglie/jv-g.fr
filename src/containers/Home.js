import React from 'react';
import TopHome from "../components/TopHome/TopHome";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import PortfolioGrid from "../components/PortfolioGrid";
const Home = () => {
    return (
        <React.Fragment>
                <ProjectSection />
                <PortfolioGrid />
                {/*<TopHome />*/}
            {/*<div style={{marginBottom: '400px'}} />*/}
        </React.Fragment>
    )
};

export default Home;
