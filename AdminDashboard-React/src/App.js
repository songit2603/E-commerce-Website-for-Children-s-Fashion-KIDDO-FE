import React, { useEffect } from 'react';

//import Scss
import './assets/scss/themes.scss';

//imoprt Route
import Route from './Routes';

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";

// Fake Backend 
import fakeBackend from "./helpers/AuthType/fakeBackend";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { startSession } from './slices/thunks';

// Activating fake backend
fakeBackend();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// // init firebase backend
// initFirebaseBackend(firebaseConfig);

function App() {
  const token = useSelector((state) => state.Session.decodedToken);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(!token)
      {
         dispatch(startSession());
      }
  },[token])
  return (
    <React.Fragment>
      <Route />
      {/* <DialogFlowMessenger></DialogFlowMessenger> */}
    </React.Fragment>
  );
}

export default App;
