import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import loadable from '@loadable/component';
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

const peristedStore = persistStore(store);

// const Home = loadable(() => import('./Pages/Home'));
// const Abuot = loadable(() => import('./Pages/Abuot'));
// const Blog = loadable(() => import('./Pages/Blog'));
// const BlogPost = loadable(() => import('./Pages/BlogPost'));
// const Contact = loadable(() => import('./Pages/Contact'));
// const Events = loadable(() => import('./Pages/Events'));
// const Gallery = loadable(() => import('./Pages/Gallery'));
// const Header = loadable(() => import('./Pages/Header'));
// const Services = loadable(() => import('./Pages/Services'));
// const Video = loadable(() => import('./Pages/Video'));
// const Discography = loadable(() => import('./Pages/Discography'));
// const NotFound = loadable(() => import('./Pages/NotFound'));
// const TagPost = loadable(() => import('./Pages/TagPost'));
// const Category = loadable(() => import('./Pages/Category'));

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
                <Route exact path="/blog/tag/:tag" component={TagPost} />
                <Route exact path="/blog/category/:tag" component={Category} />
                <Route path="/contact" component={Contact} />
                <Route path="/events" component={Events} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/services" component={Services} />
                <Route path="/video" component={Video} />
                <Route path="/Discography" component={Discography} />
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
