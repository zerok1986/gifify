const apiKey = 'TmYwgTIRs8RQKafCQXzSuE6HBxgfYhuX'

export default async function getGifs({keyword = 'morty'} = {}): Promise<any> {
  const apiUrl =
  `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

  try {
    const res = await fetch(apiUrl);
    const response = await res.json();
    const { data } = response;
    const gifs = data.map(
      (image: any) => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { title, id, url }
      }
    );
    return gifs;
  } catch (err: any) {
    return console.error(err.message);
  }
}