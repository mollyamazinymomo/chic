
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
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
        <App />
      </Suspense>
    </Router>
  );
}

export default AppWrpper;

