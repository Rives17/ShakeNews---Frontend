import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import "./Profile.css";
import { useUser } from "../../../Contexts/UserContext";
import NoticiasUser from "../NewsUser/NoticiasUser";

function Profile() {
  const [user, setUser] = useUser();
  const history = useHistory();

  const uploadAvatar = async (e) => {
    const image = e.target.files[0];
    const payload = new FormData();
    payload.append("image", image);
    const res = await fetch("http://localhost:5555/api/users/avatar", {
      method: "POST",
      body: payload,
      headers: {
        Authorization: "Bearer " + user.token,
      },
    });


    if (res.ok) {
      const res = await fetch(
        `http://localhost:5555/api/listUsersId/${user.data.id}`
      );
      const userEdited = await res.json();
      setUser({ ...user, data: userEdited });
    }
  };

  const logout = () => {
    setUser("")
    history.push("/")
  }

  if (!user) {
    return <Redirect to="/login" />;
  }


  return (
    <div className="profile">
        <div className="profile-news">
          <NoticiasUser idUser={user.data.id} />
        </div>
      <div className="datos">
        <span id="avatar-name">
          <form className="img-container">
            <label htmlFor="avatar">
              <img
                className="avatar-profile"
                src={`http://localhost:5555/${
                  user.data.avatar || "default-avatar.png"
                }`}
                alt="avatar"
              />
              <input
                type="file"
                id="avatar"
                accept="image/*"
                onChange={uploadAvatar}
              />
            </label>
          </form>
          <h1 className="name-profile">{user.data.nickname} </h1>
        </span>
        <h2 className="bio-name">Biografía</h2>
        <span className="container-bio">
          <p className="biografia">{`${user.data.biografia || "Cuentanos algo sobre ti"}`} </p>
        </span>
        <div className="edit-logout">
        <Link to={`/api/editUsers/${user.data.id}`}>
          <button className="edit-user"> Editar perfil </button>
        </Link>
        <button className="button-logout" onClick={logout}  >Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
