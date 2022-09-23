import { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import { Gif } from './Gif';

export const ListOfGifs = ({ params }: any) => {
  const [gifs, setGifs] = useState<any>([]);
  const { keyword } = params;

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return gifs.map(({ title, url, id }: any) => (
    <Gif key={id} title={title} url={url} id={id} />
  ));
};
