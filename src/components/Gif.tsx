import './Gif.css';

interface gifProps {
  title: string;
  id: string;
  url: string;
}

export const Gif = ({ title, id, url }: gifProps) => {
  return (
    <a href={`#${id}`} className="Gif">
      <h5>{title}</h5>
      <img src={url} alt={title} />
    </a>
  );
};
