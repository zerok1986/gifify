import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner/Spinner'
import { ListOfGifs } from '../components/ListOfGifs/ListOfGifs'
import getGifs from '../services/getGifs'

const SearchResults = ({ params }: any) => {
  const { keyword } = params
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState<any>([])

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
    });
  }, [keyword])

  return <>
    {loading
      ? <Spinner />
      : <ListOfGifs gifs={gifs}/>
    }
  </>
}

export default SearchResults