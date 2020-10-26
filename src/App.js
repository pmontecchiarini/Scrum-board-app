import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import Main from './containers/Main/Main';
import CreateBoard from './containers/CreateBoard/CreateBoard';
import Board from './containers/Board/Board';
import Footer from './containers/Footer/Footer';

import Container from '@material-ui/core/Container';



function App() {
  return (
    <React.Fragment>
      <Container>
          <Switch>
            <Route path="/main" component={Main}/>
            <Route path="/createboard" component={CreateBoard}/>
            <Route path="/board" component={Board}/>
            <Route path="/" exact component={HomeScreen}/>
          </Switch>
      </Container>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
