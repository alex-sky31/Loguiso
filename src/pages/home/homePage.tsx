import React, { Suspense, useEffect, useState } from "react";
import "./homePage.css";
import classNames from "classnames";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, listAll, getDownloadURL, StorageReference } from 'firebase/storage';

// @ts-ignore
import VideBg from "../../asset/bg.mp4";

import GlobalHeader from "../components/GlobalHeader/globalHeader";
// @ts-ignore
import Loading from "../components/Loading/loading";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR6w26vFPpGtT5H2l2o1z9ngAjGjdi35U",
  authDomain: "loguiso.firebaseapp.com",
  projectId: "loguiso",
  storageBucket: "loguiso.appspot.com",
  messagingSenderId: "134169930879",
  appId: "1:134169930879:web:20ee6d2bc68203b8e2634a",
  measurementId: "G-NQ2B40XRHE"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);
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
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const storageRef: StorageReference = ref(storage);
    const imagesRef: StorageReference = ref(storageRef, "/");
    listAll(imagesRef)
      .then((res) => {
        const downloadPromises = res.items.map((itemRef) =>
          getDownloadURL(itemRef)
        );

        Promise.all(downloadPromises)
          .then((urls) => {
            setImageUrls(urls);
            setIsLoading(true);
          })
          .catch((error) => {
            console.log(error);
            setIsError(true);
            setIsLoading(true);
          });
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(true);
      });
  }, []);


  return (
    <div className="flex flex-col w-full h-full bg-black scroll-smooth">
      <GlobalHeader />
      <div className="md:px-[100px] px-2">
        <video
/*
          src={VideBg}
*/
          src={imageUrls[0]}

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
