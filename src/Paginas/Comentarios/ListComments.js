import { useListComments } from "../../Api/Api";
import { useUser } from "../../Contexts/UserContext";
import Comentario from "./Comentario";

function ListComments({id}) {
  const comments = useListComments(id);
  const [user] = useUser();

  return (
    <div className="comments">
      {comments && (
        <ul className="results-comments">
          {comments.map((r) => (
            <Comentario
              key={r.id}
              id={r.id}
              nickname={r.nickname}
              avatar={r.avatar}
              texto={r.texto}
              user={user}
              selfNoticia={user.data?.id === r.id_usuario}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListComments;
