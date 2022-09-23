import './App.css';
import { ListOfGifs } from './components/ListOfGifs';
import { Link, Route } from 'wouter';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>
          <Link to="/" id="App-title">
            Gifify
          </Link>
        </h1>
        <Link to="/gif/rickandmorty">GIFs de Rick&Morty</Link>
        <Link to="/gif/pandas">GIFs de Pandas</Link>
        <Link to="/gif/akira">GIFs de Akira</Link>
        <ul className="gifs-list">
          <Route path="/gif/:keyword" component={ListOfGifs} />
        </ul>
      </section>
    </div>
  );
}

export default App;
