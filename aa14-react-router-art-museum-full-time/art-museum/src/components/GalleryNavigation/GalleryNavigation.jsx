import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

export default function GalleryNavigation({ galleries }) {
  console.log("galleries:", galleries);
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/">Home</NavLink>
      <br></br>

      {galleries.map((gallery) => (
        <NavLink key={gallery.id} to={`galleries/${gallery.id}`}>
          {gallery.name} <br></br>
        </NavLink>
      ))}
    </nav>
  );
}
