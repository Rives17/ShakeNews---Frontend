
import { useParams } from "react-router";
import { useNewsId  } from "../../../Api/Api"
import EditNewsForm from "./EditNewsForm";

function EditNews() {
  const { id } = useParams()
  const newsId = useNewsId(id)

	return (
    <div className="flex-container" >
      <h1 className="titulo-seccion" >Editar noticia</h1>
      <hr className="hr-createNews"/>
      <p className="p-info" >Por favor asegúrate de no introducir una noticia ya publicada.
        El título debe ser el de la noticia original y la descripción lo más fiel posible.
      </p>
      { newsId && <EditNewsForm newsId={newsId} />}
    </div>
  )
}

    export default EditNews