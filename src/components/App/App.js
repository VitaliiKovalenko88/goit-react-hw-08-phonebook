import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { RestrictedRoute } from 'components/RestricteRoute';
import { PrivateRoute } from 'components/PrivatRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';

const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../../Pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../Pages/LoginPage/LoginPage'));
const Contacts = lazy(() => import('../../Pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <b>Refreshing user...</b>) :
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path='/register'
          element={
            <RestrictedRoute
              redirectTo='/contacts'
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path='/login'
          element={
            <RestrictedRoute
              redirectTo='/contacts'
              component={<LoginPage />} />
          }
        />
        <Route
          path='/contacts'
          element={
            <PrivateRoute
              redirectTo='/login'
              component={<Contacts />} />
          }
        />

      </Route>
    </Routes>

};





export default App;