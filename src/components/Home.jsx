import React from "react";
import SectionInit from "./sections/SectionInit";
import SectionSkills from  "./sections/SectionSkills"
import SectionAbout from "./sections/SectionAbout";

const Home = ({scrollToTop, isVisible}) => {
    
    return(
        <div className="">
            < SectionInit scrollToTop={scrollToTop} isVisible={isVisible} />
            < SectionAbout  />
            < SectionSkills />


        </div>
    )
}

export default Home;