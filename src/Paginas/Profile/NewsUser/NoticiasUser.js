import { useUser } from "../../../Contexts/UserContext";
import { useNewsUser } from "../../../Api/Api";
import "./NoticiasUser.css";
import Noticia from "../../News/News/Noticia";
import caraTriste from "../../../images/caraTriste.png"

function NoticiasUser({idUser}) {
  const [user] = useUser();
  const newsUser = useNewsUser(idUser);

  if(newsUser.length === 0) {
    return(
      <div className="notNewsContainer">
        <p className="notNews" >Todavía no has publicado ninguna noticia.</p>
        <p className="notNews" >¿A qué esperas?</p>
        <img className="caraTriste" src={caraTriste} alt="Cara Triste"/>
      </div>
    )
  }

  return (
    <div className="container-newsUser">
      {newsUser && (
        <ul className="news-user">
          {newsUser.map((r) => (
            <div className="article-newsUser">
              <Noticia
                key={r.id}
                id={r.id}
                valoraciones={r.valoraciones}
                enlaces={r.enlaces}
                title={r.title}
                nickname={r.nickname}
                avatar={r.avatar}
                descripcion={r.descripcion}
                categoria={r.categoria}
                user={user}
                selfNoticia={user.data?.id === r.id_usuario}
                image={r.imagen}
                source={r.source}
              />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NoticiasUser;
