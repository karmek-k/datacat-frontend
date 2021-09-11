import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import useToken from '../../hooks/auth/useToken';

const ProtectedRoute = ({ component, ...rest }: RouteProps) => {
  const token = useToken();

  if (!token.retrieve()) {
    return <Route {...rest} render={() => <Redirect to="/login" />} />;
  }

  return <Route {...rest} component={component} />;
};

export default ProtectedRoute;
