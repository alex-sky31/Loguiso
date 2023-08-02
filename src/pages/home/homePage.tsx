import React, { Suspense, useState } from "react";
import "./homePage.css";
import classNames from "classnames";
import Work from "../components/Work/work"


import GlobalHeader from "../components/GlobalHeader/globalHeader";
// @ts-ignore
import Loading from "../components/Loading/loading";


const LogoListBand = React.lazy(
  () => import("../components/LogoListBand/logoListBand")
);

const ProjectList = React.lazy(
  () => import("../components/ProjectList/projectList")
);



const About = React.lazy(() => import("../components/About/about"));
const HomePage = () => {
  const [isLoading] = useState(true);

  return (
    <div className="flex flex-col w-full h-full bg-black scroll-smooth">
      <GlobalHeader />
      <div  className={classNames(
        "md:px-[100px] px-2 w-full md:h-[845.56px] md:max-h-[851.56px] pointer-events-none",
      )}>
        <iframe src="https://player.vimeo.com/video/850839887?badge=0&amp;autoplay=1&mute=1&loop=1;&amp;player_id=0&amp;app_id=58479&controls=0"
                allow="autoplay;"
                className={classNames(
                  "w-full md:h-[845.56px] md:max-h-[851.56px] md:rounded-3xl",
                  isLoading ? "relative" : "hidden"
                )}
                title="VideoSiteHome"></iframe>
      </div>
      {!isLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <LogoListBand />
          <ProjectList />
          <About />
            <Work />

        </Suspense>
      )}
    </div>
  );
};

export default HomePage;
