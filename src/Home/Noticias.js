<<<<<<< HEAD:src/Home/Noticias.js
import {useNews} from '../Api'
import './Noticias.css'
import Valoraciones from "./Valoraciones"
import { Link } from "react-router-dom";


function Noticias() {
  const news = useNews()

  return (
    <div className="News" >
            {news &&
                <ul className="results">
                    {news.map(r =>
                        <li className="container-news" key={r.id}>
                          <div className="valoraciones" >
                            <Valoraciones />
                          </div>
                          <div className="allContentNews" >
                            <h1 className="title" >
                              <a href={r.enlaces} target="_blank" > {r.title} </a>
                            </h1>
                            <Link to={`/listNewsId/${r.id}`}>
                              <p className="descripcion" >{r.descripcion}</p>
                              <p className="categoria" > {r.categoria}</p>
                            </Link>
                          </div>
                        </li>
                    )}
                </ul>
            }
    </div>
  );
}

export default Noticias;
=======
import { Link } from "react-router-dom";
import { useDeleteNews } from "../Api";
import Valoraciones from "./Valoraciones";
import "./Noticia.css"

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
  source
}) {
  const deleteNews = useDeleteNews(id);

  return (
    <li className="container-news">
      <div className="valoraciones">
        <Valoraciones id={id} user={user} valoraciones={valoraciones} />
      </div>
      <div className="allContentNews">
        <div className="news-content" >
          <div className="colum-container">
            <div className="news-title" >
              <div className="container-title">
                <h1 className="title">
                  <a href={enlaces} target="_blank">
                    {" "}
                    {title}{" "}
                  </a>
                </h1>
              </div>
              <div className="news-author">
              <img
                className="author-avatar"
                src={`http://localhost:5555/${avatar || "default-avatar.png"}`}
              />
              <p className="p-author">Publicado por </p>
              <Link className="author-nickname" to={`/user/${nickname}`} > {nickname} </Link>
            </div>
              <div className="image-container">
                {image && <img className="image-news" src={image} alt={title} /> }
              </div>
            </div>
              <p className="descripcion">{descripcion}</p>
          </div>
          <div className="news-img" >

          </div>
        </div>
        <div  className="news-details">
          <Link className="toComments" to={`/listNewsId/${id}`} >Comentarios</Link>
          <Link to={`/listNews/${categoria}`} className="categoria"> {categoria}</Link>
        </div>
        {selfNoticia && (
          <button className="delete-button" onClick={deleteNews}>
            Delete
          </button>
        )}
        {selfNoticia && (
          <Link to={`/listNewsId/${id}/edit`} className="edit-button">
            Editar
          </Link>
        )}
      </div>
    </li>
  );
}

export default Noticia;
>>>>>>> Alex:src/Home/Noticia.js
