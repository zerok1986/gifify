import { ReactNode } from "react";
import { Link } from "wouter";

const POPULAR_GIFS = ["Matrix", "DragonBall", "Akira", "RickAndMorty"]

const Home = () => {
  return (
    <>
      <h3 className="App-title">Los GIFs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif): ReactNode => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
} 

export default Home