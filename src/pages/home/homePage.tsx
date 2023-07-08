import React, { Suspense, useState } from "react";
import "./homePage.css";
import classNames from "classnames";

// @ts-ignore
import VideBg from "../../asset/bg.mp4";

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
const Work = React.lazy(() => import("../components/Work/work"));
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleImageLoad = () => {
    console.log("ici");
    setIsLoading(true);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setIsError(true);
  };

  return (
    <div className="flex flex-col w-full h-full bg-black scroll-smooth">
      <GlobalHeader />
      <div className="md:px-[100px] px-2">
        <video
          src={VideBg}
          preload="auto"
          autoPlay={true}
          loop
          onLoadedData={handleImageLoad}
          onError={handleImageError}
          muted
          className={classNames(
            "w-full h-auto max-h-[851.56px] object-cover md:rounded-[58px]",
            isLoading ? "relative" : "hidden"
          )}
        />
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
