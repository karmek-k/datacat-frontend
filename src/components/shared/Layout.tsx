import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">DataCat</Typography>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default Layout;
