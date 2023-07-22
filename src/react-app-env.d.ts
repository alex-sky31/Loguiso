/// <reference types="react-scripts" />

declare global {
 namespace NodeJS {
    interface ProcessEnv {
      //types of envs
      NODE_ENV: 'development' | 'production' | 'test';
      PUBLIC_URL: string;
      REACT_APP_FIREBASE_CONFIGURATION_API_KEY: "AIzaSyCR2JtF8yftM9yeVL0qDv_SmXtlB8UrDyw";
      REACT_APP_FIREBASE_CONFIGURATION_DOMAIN:'testingcloud-ae9af.firebaseapp.com';
      REACT_APP_FIREBASE_CONFIGURATION_PROJECTID:"testingcloud-ae9af";
      REACT_APP_FIREBASE_CONFIGURATION_STORAGE:"testingcloud-ae9af.appspot.com";
      REACT_APP_FIREBASE_CONFIGURATION_MESSAGING:"782067215876";
      REACT_APP_FIREBASE_CONFIGURATION_APPID:"1:782067215876:web:88fb10acf42cd940bc4f51";
      REACT_APP_FIREBASE_CONFIGURATION_MEASUREMENTID:"G-MY1HB84PZH";
    }
  }
}
export {}