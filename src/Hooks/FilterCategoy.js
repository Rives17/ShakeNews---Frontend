import { useFilterNews } from "../Api/Api";
import Noticia from "../Paginas/News/News/Noticia";
import { useUser } from "../Contexts/UserContext";
import { useParams } from "react-router-dom";
import "./FilterCategory.css"

function FilterCategory() {
  const {categoria} = useParams()
  const filter = useFilterNews(categoria);
  const [user] = useUser();

  return (
    <div className="news-filter">
      {filter && (
        <ul className="results-filter">
          {filter.map((r) => (
            <div className="article-filter">
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
              />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterCategory
