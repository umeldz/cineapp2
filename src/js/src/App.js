import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import MovieApp from './components/MovieApp';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <MovieApp/>
      </div>
    );
  }
}

export default App;
