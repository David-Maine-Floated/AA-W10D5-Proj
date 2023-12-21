import { useParams, Navigate } from 'react-router-dom';

export default function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const gallery = galleries.find(gallery => gallery.id.toString() === galleryId);
  return <>
    {!gallery ? (
      <Navigate to="/" replace={true} />
    ): (
      <>
        <h1>Gallery page</h1>
        <br />
        <h2> Welcome to the {gallery.name}  gallery!</h2>
      </>
    )}
  </>;
}