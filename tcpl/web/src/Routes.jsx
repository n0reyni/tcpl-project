import { Router, Route, PrivateSet, Public } from '@redwoodjs/router';
import { useAuth } from './auth';
import Contact from './components/Contact';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Medecines from './pages/Medecines';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Signup from './components/Signup';

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
        <Route path="/" page={Medecines} name="home" />
        <Route path="/auth/login" page={Login} name="login" />
        <Route path="/auth/sign-up" page={Signup} name="sign-up" />
        <Route path="/contact" page={Contact} name="contact" />
        <Route path="/medicament" page={Medecines} name="medecines" />

      {/* {isAuthenticated && <Redirect from="/auth/login" to="/home" />}
      {isAuthenticated && <Redirect from="/auth/sign-up" to="/home" />} */}

      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
