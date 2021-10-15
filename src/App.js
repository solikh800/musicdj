import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import loadable from '@loadable/component';
import Footer from './Components/Footer';
import {colors, images} from './constants';

const Home = loadable(() => import('./Pages/Home'));
const Abuot = loadable(() => import('./Pages/Abuot'));
const Blog = loadable(() => import('./Pages/Blog'));
const Contact = loadable(() => import('./Pages/Contact'));
const Events = loadable(() => import('./Pages/Events'));
const Gallery = loadable(() => import('./Pages/Gallery'));
const Header = loadable(() => import('./Pages/Header'));
const Services = loadable(() => import('./Pages/Services'));
const Video = loadable(() => import('./Pages/Video'));
const Discography = loadable(() => import('./Pages/Discography'));
// const NotFound = loadable(() => import("./screen/notFound"));

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{backgroundColor: colors.background}}
        className="flex flex-col w-full mx-auto ">
        <Header />

        <div>
          <Switch>
            <Route path="/abuot" component={Abuot} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/events" component={Events} />
            <Route path="/gallery" component={Gallery} />
            {/* <Route path="/header" component={Header} /> */}
            <Route path="/services" component={Services} />
            <Route path="/video" component={Video} />
            <Route path="/Discography" component={Discography} />
            {/* <Route path="/404" component={NotFound} /> */}
            <Route exact path="/" component={Home} />
            {/* <Route path="" component={NotFound} /> */}
          </Switch>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
