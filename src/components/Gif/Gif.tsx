import './Gif.css'
import { Link } from "wouter";

export interface gifProps {
  title: string;
  id: string;
  url: string;
}

export const Gif = ({ title, id, url }: gifProps) => {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    </div>
  )
}
