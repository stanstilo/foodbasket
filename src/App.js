import React from 'react'
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store/index';
import "react-slideshow-image/dist/styles.css";
import "swiper/swiper-bundle.css";
import MainApp from './mainApp';
import './styles/bootstrap.scss'
import './app.scss'


const NotFoundPage = () => {
  return <h1>404 Page NotFound</h1>;
}
const  App = () => {
  return (   
  <div className='app-body'>
    <Provider store={store}>
      <Router>
    <PersistGate persistor={persistor}>
    <Switch>
    <MainApp />
    <Route component={NotFoundPage}/>
    </Switch>
    </PersistGate>
    </Router>
    </Provider>
     </div>
     
  );
}
export default App;
