import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import CommunityPage from './components/pages/CommunityPage';
import NewsPage from './components/pages/NewsPage';
import EventsPage from './components/pages/EventsPage';
import DonatePage from './components/pages/DonatePage';

// The Main component renders one of the five provided
// Routes (provided that one matches). 

const Main = () => (
  <main>
    <Switch>
      <Route path='/about' component={AboutPage}/>
      <Route path='/community' component={CommunityPage}/>
      <Route path='/news' component={NewsPage}/>
      <Route path='/events' component={EventsPage}/>
      <Route path='/donate' component={DonatePage}/>
    </Switch>
  </main>
);

export default Main;