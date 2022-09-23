const apiKey = 'TmYwgTIRs8RQKafCQXzSuE6HBxgfYhuX'

export default async function getGifs({keyword = 'morty'} = {}): Promise<any[] | undefined> {
  const apiUrl =
  `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const {data = []} = response
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { images, title, id } = image
          const { url } = images.downsized_medium
          return { title, id, url }
        })
        return gifs
      }
    })
}