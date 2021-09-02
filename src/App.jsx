import PokemonList from './containers/PokemonList'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PokemonView from './containers/PokemonView';

const App = () => {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Route exact path='/' component={PokemonList} />
        <Route path='/pokemon/:id' component={PokemonView} />
    </div>
    </Router>
  );
}

export default App;
