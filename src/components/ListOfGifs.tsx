import { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import { Gif } from './Gif';

interface GifParams {
  params: {
    keyword: string
  }
}

export const ListOfGifs = ({ params }: GifParams) => {
  const [gifs, setGifs] = useState<any>([]);
  const { keyword } = params;

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return gifs.map(({ title, url, id }: any) => (
    <Gif key={id} title={title} url={url} id={id} />
  ));
};
