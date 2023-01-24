import { Link } from "react-router-dom";
import "./Comentario.css";
import { useDeleteComment } from "../../Api/Api";
import AccordionNews from "../../Accordions/AccordionNews"
import menu from "../../images/elipsis.png";

function Comentario({ texto, nickname, avatar, id, selfNoticia }) {
  const deleteComment = useDeleteComment(id);

  return (
    <li className="container-comments">
      <div className="allContentComment">
        <div className="author-comment">
          <div className="author">
            <img
              className="author-avatar"
              src={`http://localhost:5555/${avatar || "default-avatar.png"}`}
              alt="avatar"
            />
            <Link className="author-nickname" to={`/user/${nickname}`}>
              {" "}
              {nickname}{" "}
            </Link>
          </div>
          <div className="delete-div">
            {selfNoticia && (
              <AccordionNews
                title={
                  <img src={menu} alt="menu-button" className="menu-button" />
                }
              >
                <button className="delete-comment" onClick={deleteComment}>
                  Delete
                </button>
              </AccordionNews>
            )}
          </div>
        </div>
        <div className="text-comment">
          <p className="texto-comment"> {texto} </p>
        </div>
      </div>
    </li>
  );
}

export default Comentario;
