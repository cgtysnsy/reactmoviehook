import { useState, useEffect } from "react";
//import LikeButton from "./LikeButton";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
} from "reactstrap";

export default function Movies({
  movies,
  setMovies,
  setfavouriteMovies,
  saveToLocalStorage,
}) {
  const [like, setLike] = useState([]);
  //const [likeObj, setLikeObj] = useState(false);

  const handleLike = (index) => {
    like.push(movies[index]);
    setLike(like);
    saveToLocalStorage(like);
  };

  useEffect(() => {
    setfavouriteMovies(like);
  }, []);

  return (
    <div className="row">
      {movies.map((m, index) => (
        <Card
          className="col-md-4 mb-4"
          key={index}
          style={{
            width: "18rem",
          }}
        >
          <CardBody>
            <CardTitle tag="h5">{m.Title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {m.Year}
            </CardSubtitle>
          </CardBody>
          <img
            alt="Card cap"
            src={
              m.Poster === "N/A"
                ? "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"
                : m.Poster
            }
            width="100%"
          />
          <CardBody>
            <CardText>Type: {m.Type}</CardText>
            <Badge
              color="success"
              type="button"
              onClick={(e) => handleLike(index)}
            >
              Add To Watch
            </Badge>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
