import { useState } from "react";
import { useHistory } from "react-router";
import { useEditNews } from "../../../Api/Api";

function EditNewsForm({ newsId }) {
  const [title, setTitle] = useState(newsId.title);
  const [enlaces, setEnlaces] = useState(newsId.enlaces);
  const [descripcion, setDescripcion] = useState(newsId.descripcion);
  const [categoria, setCategoria] = useState(newsId.categoria);
  const editNews = useEditNews(newsId.id);
  const history = useHistory();

  console.log(newsId, "textoo");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await editNews({ title, enlaces, descripcion, categoria });

    if (data) {
      history.push("/listNewsId/" + newsId.id);
    }
  };

  return (
    <div className="flex-container">
      <form className="formulario" onSubmit={handleSubmit}>
        <label>
          <p>URL: *</p>
          <input
            placeholder={enlaces}
            type="url"
            value={enlaces}
            onChange={(e) => setEnlaces(e.target.value)}
          />
        </label>
        <label>
          <p>Título: *</p>
          <input
            placeholder={title}
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <p>Descripción: *</p>
          <textarea
            placeholder={descripcion}
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
          <button className="button-guardar">Guardar cambios</button>
        </div>
      </form>
    </div>
  );
}

export default EditNewsForm;
