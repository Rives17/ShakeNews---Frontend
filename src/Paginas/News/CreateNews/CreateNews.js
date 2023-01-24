import "./CreateNews.css";
import { useState } from "react";
import { useHistory } from "react-router";
import { useNewPost } from "../../../Api/Api";

function CreateNews() {
  const [title, setTitle] = useState("");
  const [enlaces, setEnlaces] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const newPost = useNewPost();
  const history = useHistory();
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await newPost({ title, enlaces, descripcion, categoria });

    if (data.status !== "error") {
      history.push("/listNewsId/" + data.insertId);

    }else{
      setError(data.message)
    }
  };

  return (
    <div className="flex-container">
      <h1 className="titulo-seccion">Crear noticia</h1>
      <hr className="hr-createNews" />
      <p className="p-info">
        Por favor asegúrate de no introducir una noticia ya publicada. El título
        debe ser el de la noticia original y la descripción lo más fiel posible.
      </p>
      <form className="formulario" onSubmit={handleSubmit}>
        <label>
          <p>URL: *</p>
          <input
            placeholder="Pega aquí la URL"
            type="url"
            value={enlaces}
            onChange={(e) => setEnlaces(e.target.value)}
          />
        </label>
        <label>
          <p>Título: *</p>
          <input
            placeholder="Introduce el título..."
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <p>Descripción: *</p>
          <textarea
            placeholder="Añade una descripción..."
            className="description"
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </label>
        <div className="select-categoria">
          <p className="category">Categoría: *</p>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option hidden>Selecciona...</option>
            <option value="Actualidad">Actualidad</option>
            <option value="Motor">Motor</option>
            <option value="Política">Política</option>
            <option value="Economía">Economía</option>
            <option value="Salud">Salud</option>
            <option value="Ciencia">Ciencia</option>
            <option value="Deportes">Deportes</option>
          </select>
        </div>
        <div className="button">
          <button className="button-publicar">Publicar!</button>
        </div>
      </form>
      {error && (
        <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
      )}
    </div>
  );
}

export default CreateNews;
