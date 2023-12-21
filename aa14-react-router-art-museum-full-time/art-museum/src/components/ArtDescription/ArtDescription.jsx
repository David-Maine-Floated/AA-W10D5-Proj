import { Link, useParams } from "react-router-dom";

export default function ArtDescription({ galleries }) {
  const { galleryId, artId } = useParams();
  const curretn_art = galleries.find(g => g.galleryid.toString() === galleryId)
    .objects.find(art => art.id.toString() === artId);
  console.log(curretn_art);
  return (
    <>
      <h1></h1>
      <Link to={curretn_art.url}>{curretn_art.title}</Link>
      <Link to={`/galleries/${galleryId}`}>Back to Gallery</Link>
      <h3>Description:</h3>
      <p>{curretn_art.description}</p>
      <h3>creidt:</h3>
      <p>{curretn_art.creditline}</p>
      <h3>technique:</h3>
      <p>{curretn_art.technique}</p>
      <h3>pics:</h3>
      {curretn_art.images.map(img => (<img key={img.imageid} src={img.baseimageurl} alt="" />) )}
    </>
  );
}