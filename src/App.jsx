import { Suspense, lazy } from 'react';
import './App.css'
// import HomePage from './pages/Home';
// import AboutPage from './pages/About';
import Router from './Router';
import Page404 from './pages/404';

const AboutPage = lazy(() => import('./pages/About'));
const HomePage = lazy(() => import('./pages/Home'));

const routes = [
  {
    path: "/",
    Component: HomePage
  },
  {
    path: "/about",
    Component: AboutPage
  }, {
    path: "/twitch",
    Component: () => <h1>Twitch</h1>
  }
];

function App() {


  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={Page404} />
      </Suspense>
    </main>
  )
}

export default App
