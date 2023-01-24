import "./EditUser.css";
import { useEditUser } from "../../../Api/Api";
import { useUser } from "../../../Contexts/UserContext";
import { useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

function EditUser() {
  const [user, setUser] = useUser();
  const editUser = useEditUser(user.data.id);
  const [nickName, setNickName] = useState(user.data.nickname);
  const [email, setEmail] = useState(user.data.email);
  const [biografia, setBiografia] = useState(user.data.biografia || "");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userToEdit = {
      nickname: nickName || user.data.nickname,
      email: email || user.data.email,
      password: password || user.data.password,
      repeatPassword: repeatPassword || user.data.password,
      biografia: biografia || user.data.biografia,
    };

    await editUser(userToEdit);
    const res = await fetch(
      `http://localhost:5555/api/listUsersId/${user.data.id}`
    );
    const userEdited = await res.json();
    setUser({ ...user, data: userEdited });
    history.push(`/user/${user.data.nickname}`);
    Swal.fire({
      title: "¡Usuario editado!",
      allowOutsideClick: true,
      icon: 'success',
      background: '#1d1e1f',
      width: '20%',
      customClass: {
        title: 'alert',
        confirmButtonText: 'button-alert'
      }
    })
  };

  return (
    <div id="flex-container-edit">
      <form className="form-edit" onSubmit={handleSubmit}>
        <label>
          <p>Nombre de usuario:</p>
          <input
            className="nickname-edit"
            placeholder={nickName}
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            type="text"
          />
        </label>
        <label>
          <p>Correo electrónico:</p>
          <input
            className="email-edit"
            placeholder={email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </label>
        <label>
          <p> Contraseña:</p>
          <p className="notas">No se cambiará si la dejas en blanco</p>
          <input
            className="password-edit"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </label>
        <label>
          <p> Repetir contraseña:</p>
          <p className="notas">No se cambiará si la dejas en blanco</p>
          <input
            className="passwordrepeat-edit"
            placeholder=""
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            type="password"
          />
        </label>
        <label className="biolabel-edit">
          <p> Biografía: </p>
          <textarea
            className="bio-edit"
            placeholder={`${biografia}` || ""}
            value={biografia}
            onChange={(e) => setBiografia(e.target.value)}
            type="text"
          />
          <p className="notas">Máximo 300 caracteres</p>
        </label>
        <button className="button-edit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default EditUser;
