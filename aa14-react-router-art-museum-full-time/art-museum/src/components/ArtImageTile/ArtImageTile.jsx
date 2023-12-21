import { Link, useParams } from "react-router-dom";

export default function ArtImageTile({ art, id }) {
  const { galleryId } = useParams();

  return (
    <>
      <h3>Art Image Tile</h3>
      <Link to={`/galleries/${galleryId}/art/${id}`}>
        <img src={art} alt="nice art" />
      </Link>
    </>
  );
}
