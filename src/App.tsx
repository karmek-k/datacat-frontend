import './globalStyle.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import NotFoundPage from './routes/NotFoundPage';
import DashboardPage from './routes/DashboardPage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './utils/api';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
