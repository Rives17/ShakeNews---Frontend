import { useListComments, useNewsId } from "../../../Api/Api";
import { useParams } from "react-router-dom";
import Noticia from "../News/Noticia";
import { useUser } from "../../../Contexts/UserContext";
import ListComments from "../../Comentarios/ListComments";
import CreateComment from "../../Comentarios/Createcomment";
import "./NoticiaID.css";

function NoticiaId() {
  const user = useUser();
  const { id } = useParams();
  const newsId = useNewsId(id);
  const comments = useListComments();

  return (
    <div className="container-news-comments">
      <div className="NewsId">
        {newsId && (
          <ul className="results-newsId">
            <Noticia
              key={newsId.id}
              id={newsId.id}
              valoraciones={newsId.valoraciones}
              enlaces={newsId.enlaces}
              title={newsId.title}
              nickname={newsId.nickname}
              avatar={newsId.avatar}
              descripcion={newsId.descripcion}
              categoria={newsId.categoria}
              user={user}
              image={newsId.imagen}
              source={newsId.source}
            />
          </ul>
        )}
      </div>
      <div className="container-comments">
        <div className="create-comment">
          <CreateComment user={user} />
        </div>
        <div className="comments">
          {comments && (
            <ListComments
              key={newsId.id}
              id={newsId.id}
              user={user}
              nickname={newsId.nickname}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default NoticiaId;
