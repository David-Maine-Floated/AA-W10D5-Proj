import { useParams, Navigate } from "react-router-dom";
import ArtImageTile from "../ArtImageTile/ArtImageTile";

export default function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const gallery = galleries.find(
    (gallery) => gallery.id.toString() === galleryId
  );
  return (
    <>
      {!gallery ? (
        <Navigate to="/" replace={true} />
      ) : (
        <>
          <h1>Gallery page</h1>
          <br />
          <h2> Welcome to the {gallery.name} gallery!</h2>
          <ul>
            {gallery.objects.map((artObj) => (
              <ArtImageTile
                key={artObj.objectid}
                art={artObj.primaryimageurl}
                id={artObj.objectid}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
}
