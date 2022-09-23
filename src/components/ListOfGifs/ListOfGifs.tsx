import './ListOfGifs.css'
import { Gif } from '../Gif/Gif';

export const ListOfGifs = ({ gifs }: any) => {
  return <div className='ListOfGifs'>
    {
      gifs.map(({ title, url, id }: any) =>
        <Gif
          key={id}
          title={title}
          url={url}
          id={id}
        />
      )
    }
  </div>
}
