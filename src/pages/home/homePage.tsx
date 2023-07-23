import React, { Suspense, useState } from "react";
import "./homePage.css";
import classNames from "classnames";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import Work from "../components/Work/work"


// @ts-ignore
import VideBg from "../../asset/VideoSiteHome.mov";

import GlobalHeader from "../components/GlobalHeader/globalHeader";
// @ts-ignore
import Loading from "../components/Loading/loading";


const configValue = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIGURATION_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_CONFIGURATION_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_CONFIGURATION_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_CONFIGURATION_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIGURATION_MESSAGING,
  appId: process.env.REACT_APP_FIREBASE_CONFIGURATION_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_CONFIGURATION_MEASUREMENTID,
}

console.log(configValue)
// Initialize Firebase
const app = initializeApp(configValue);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const LogoListBand = React.lazy(
  () => import("../components/LogoListBand/logoListBand")
);

const ProjectList = React.lazy(
  () => import("../components/ProjectList/projectList")
);



const About = React.lazy(() => import("../components/About/about"));
/*
const Work = React.lazy(() => import("../components/Work/work"));
*/
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

/*  useEffect(() => {
    const storageRef: StorageReference = ref(storage);
    const imagesRef: StorageReference = ref(storageRef, "/");
    listAll(imagesRef)
      .then((res) => {
        const downloadPromises = res.items.map((itemRef) =>
          getBlob()
          //getURL(itemRef)
        );
        console.log(downloadPromises)

        /!*Promise.all(downloadPromises)
          .then((urls) => {
            setImageUrls(urls);
            setIsLoading(true);
          })
          .catch((error) => {
            console.log(error);
            setIsError(true);
            setIsLoading(true);
          });*!/
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(true);
      });
  }, []);*/

  console.log(imageUrls[0])

  return (
    <div className="flex flex-col w-full h-full bg-black scroll-smooth">
      <GlobalHeader />
      <div className="md:px-[100px] px-2">
        <video
          src={VideBg}
          preload="auto"
          autoPlay={true}
          loop
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
