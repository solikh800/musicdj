import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './Redux/index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import Footer from './Components/Footer';
import {colors} from './constants';
import './App.css';
import Home from './Pages/Home';
import Abuot from './Pages/Abuot';
import Blog from './Pages/Blog';
import BlogPost from './Pages/BlogPost';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import Gallery from './Pages/Gallery';
import Header from './Pages/Header';
import Services from './Pages/Services';
import Video from './Pages/Video';
import Discography from './Pages/Discography';
import NotFound from './Pages/NotFound';
import TagPost from './Pages/TagPost';
import Category from './Pages/Category';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';

const peristedStore = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={peristedStore}>
        <BrowserRouter>
          <div
            style={{backgroundColor: colors.background}}
            className="flex flex-col w-full mx-auto ">
            <Header />
            {/* my Routs */}
            <div>
              <Switch>
                <Route path="/abuot" component={Abuot} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog/:id" component={BlogPost} />
                <Route exact path="/blog/tags/:tag" component={TagPost} />
                <Route exact path="/blog/category/:tag" component={Category} />
                <Route path="/contact" component={Contact} />
                <Route path="/events" component={Events} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/services" component={Services} />
                <Route path="/video" component={Video} />
                <Route path="/Discography" component={Discography} />
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/404" component={NotFound} />
                <Route exact path="/" component={Home} />
                <Route path="" component={NotFound} />
              </Switch>
            </div>

            <Footer />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
