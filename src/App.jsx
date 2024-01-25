import { Suspense, lazy } from 'react';
import './App.css'

import Router from './Router';
import Page404 from './pages/404';
import { Route } from './Route';

const AboutPage = lazy(() => import('./pages/About'));
const HomePage = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));

const routes = [
  {
    path: "/",
    Component: HomePage
  },
  // {
  //   path: "/about",
  //   Component: AboutPage
  // }, {
  //   path: "/twitch",
  //   Component: () => <h1>Twitch</h1>
  // },
  // {
  //   path: "/search/:query",
  //   Component: Search
  // }
];

function App() {


  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/search/:query" Component={Search} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
