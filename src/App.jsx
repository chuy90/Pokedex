import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
// import PokemonList from './containers/PokemonList';
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import PokemonView from './containers/PokemonView';
import PokemonsView from './containers/PokemonsView';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={PokemonsView} />
        <Route path="/pokemon/:id" component={PokemonView} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
