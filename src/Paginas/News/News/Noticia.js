import { Link } from "react-router-dom";
import AccordionNews from "../../../Accordions/AccordionNews";
import { useDeleteNews } from "../../../Api/Api";
import Valoraciones from "../../../Hooks/Valoraciones";
import "./Noticia.css";
import menu from "../../../images/elipsis.png";

function Noticia({
  id,
  valoraciones,
  enlaces,
  title,
  nickname,
  avatar,
  descripcion,
  categoria,
  user,
  selfNoticia,
  image,
  source,
}) {
  const deleteNews = useDeleteNews(id);

  return (
    <li className="container-news">
      <div className="valoraciones">
        <Valoraciones id={id} user={user} valoraciones={valoraciones} />
      </div>
      <div className="allContentNews">
        <div className="news-content">
          <div className="colum-container">
            <div className="news-title">
              <div className="container-title">
                <h1 className="title">
                  <a href={enlaces} target="_blank" rel="noreferrer">
                    {" "}
                    {title}{" "}
                  </a>
                </h1>
              </div>
              <div className="news-author">
                <img
                  className="author-avatar"
                  src={`http://localhost:5555/${
                    avatar || "default-avatar.png"
                  }`}
                  alt="avatar"
                />
                <p className="p-author">Publicado por </p>
                <Link className="author-nickname" to={`/user/${nickname}`}>
                  {" "}
                  {nickname}{" "}
                </Link>
                <p className="p-de">de</p>
                <a
                  className="enlace"
                  href={enlaces}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  {source}{" "}
                </a>
              </div>
              <div className="image-container">
                {image && (
                  <img className="image-news" src={image} alt={title} />
                )}
              </div>
            </div>
            <p className="descripcion">{descripcion}</p>
          </div>
          <div className="news-img"></div>
        </div>
        <div className="news-details">
          <Link className="toComments" to={`/listNewsId/${id}`}>
            Comentarios
          </Link>
          <Link to={`/listNews/${categoria}`} className="categoria-news">
            {" "}
            {categoria}
          </Link>
          {selfNoticia && (
            <AccordionNews
              title={
                <img src={menu} alt="menu-button" className="menu-button" />
              }
            >
              <div className="selfNoticia">
                <Link to={`/listNewsId/${id}/edit`} className="edit-button">
                  Editar
                </Link>
                <button className="delete-button" onClick={deleteNews}>
                  Delete
                </button>
              </div>
            </AccordionNews>
          )}
        </div>
      </div>
    </li>
  );
}

export default Noticia;
