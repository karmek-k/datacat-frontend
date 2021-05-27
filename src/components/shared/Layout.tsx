import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import React from 'react';

interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">DataCat</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">{children}</Container>
    </>
  );
};

export default Layout;
