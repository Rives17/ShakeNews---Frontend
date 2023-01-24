import { useNews } from "../../../Api/Api";
import "./ListNews.css";
import { useUser } from "../../../Contexts/UserContext";
import Noticia from "../../News/News/Noticia";

function ListNews() {
  const news = useNews();
  const [user] = useUser();

  return (
    <div className="news-home">
      {news && (
        <div className="results-home">
          {news.map((r) => (
            <div className="article-home">
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
              image={r.imagen}
              source={r.source}
              selfNoticia={user.data?.id === r.id_usuario}
            />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListNews;
