
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import SideBar from './layout/sidebar';
import { router } from './router/router'
import { Suspense } from 'react'
import './App.css';

const App = () => {
  let routes = useRoutes([
    ...router
  ]);
  return routes;
};
const AppWrpper = () => {
  return (
    <Router>
      <Suspense>
        <SideBar />
        <App />
      </Suspense>
    </Router>
  );
}

export default AppWrpper;

