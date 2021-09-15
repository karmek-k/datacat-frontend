import './globalStyle.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import NotFoundPage from './routes/NotFoundPage';
import DashboardPage from './routes/DashboardPage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from './utils/api';
import ProtectedRoute from './components/router/ProtectedRoute';
import { MuiThemeProvider } from '@material-ui/core';
import { defaultTheme } from './themes/default';
import JobDetailsPage from './routes/JobDetailsPage';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

function App() {
  dayjs.extend(relativeTime);

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <ProtectedRoute path="/dashboard" component={DashboardPage} />
            <ProtectedRoute path="/details/:jobId" component={JobDetailsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>

        {/* TODO: remove devtools when deploying */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </MuiThemeProvider>
  );
}

export default App;
