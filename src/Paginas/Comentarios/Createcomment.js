import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useCreateComment } from "../../Api/Api";
import { Link } from "react-router-dom";

function CreateComment(user) {
  const { id } = useParams()
  const [texto, setTexto] = useState("");
  const createComment = useCreateComment(id);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createComment({ texto });
    history.go()
  };

  return (
    <form className="form-comment" onSubmit={handleSubmit}>
      {!user &&
      <div className="info-comment">
        <Link to="/longin" className="info1">*Debes estar logeado para escribir un comentario.</Link>
        <Link to="/signup" className="info2">O crea una cuenta si todavía no tienes una.</Link>
      </div>
      }
      <label>
        <textarea
          className="comment-textarea"
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        ></textarea>
      </label>
      <button className="button-comment">Enviar</button>
    </form>
  );
}

export default CreateComment;
