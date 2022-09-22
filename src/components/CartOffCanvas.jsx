import { useState, useEffect } from "react";
//import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CartOffCanvas({
  favouriteMovies,
  setfavouriteMovies,
  saveToLocalStorage,
}) {
  const [totalLikes, setTotalLikes] = useState("");

  useEffect(() => {
    setTotalLikes(favouriteMovies.length);
  }, [setfavouriteMovies, favouriteMovies]);

  const deleteItem = (i) => {
    console.log("delete");
    favouriteMovies.splice(i, 1);
    setfavouriteMovies(favouriteMovies);
    saveToLocalStorage(favouriteMovies);
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Watch List<span className="badge bg-secondary">{totalLikes}</span>
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="900"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Watch List</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul style={{ padding: 0 }}>
            {favouriteMovies.map((m, i) => (
              <li className="cart-li" key={i}>
                {m.Title}
                <span
                  type="button"
                  className="delete"
                  key={i}
                  onClick={() => deleteItem(i)}
                >
                  x
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartOffCanvas;
