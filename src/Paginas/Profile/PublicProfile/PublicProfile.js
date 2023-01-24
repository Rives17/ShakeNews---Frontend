import { useParams } from "react-router-dom";
import "./PublicProfile.css";
import { usePublicUser } from "../../../Api/Api";
import NoticiasUser from "../NewsUser/NoticiasUser";

function PublicProfile() {
  const {nickname} = useParams()
  const user = usePublicUser(nickname);

  return (
    <div className="profile">
      {user &&
        <div className="profile-news">
          <NoticiasUser idUser={user.id}/>
        </div>
      }
      <div className="datos">
        <span id="avatar-name">
          <div className="circle-avatar" >
              <img
                className="avatar-profile"
                src={`http://localhost:5555/${
                  user.avatar || "default-avatar.png"
                }`}
                alt="avatar"
              />
            </div>
          <h1 className="name-profile">{user.nickname} </h1>
        </span>
        <h2 className="bio-name">Biografía</h2>
        <span className="container-bio">
          <p className="biografia">{user.biografia} </p>
        </span>
      </div>
    </div>
  );
}

export default PublicProfile;
