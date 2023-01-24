import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { useUser } from "../Contexts/UserContext";
import logo from "../images/LogoShakeNews3.png";
import Accordion from "../Accordions/Accordion";
import CategoryMenu from "./CategoryMenu";
import ModalLogin from "../Hooks/ModalLogin";
import ModalSignup from "../Hooks/ModalSignup";
import Login from "../Paginas/Login/Login";
import { useState } from "react";
import Signup from "../Paginas/Signup/Signup";
import publicar from "../images/mas.png";

function Sidebar() {
  const [user] = useUser();
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalSignup, setShowModalSignup] = useState(false);

  return (
    <div className="header">
      <div className="ancho">
        <div className="logotipo-container">
          <NavLink className="logo" to="/" exact>
            {" "}
            <img className="logo" alt="Logotipo ShakeNews" src={logo} />{" "}
          </NavLink>
        </div>
        <div className="container-user-menus">
          <div className="navegador">
            <NavLink className="publicar" to="/createNews" exact>
              {" "}
              <img
                alt="Icono publicar"
                className="icon-publicar"
                src={publicar}
              />{" "}
              Publicar
            </NavLink>
            <Accordion title="Categorias">
              <CategoryMenu />
            </Accordion>
          </div>
          {!user && (
            <div className="user">
              <div
                onClick={() => setShowModalLogin(true)}
                className="login"
                exact
              >
                Iniciar Sesion
              </div>
              <div
                onClick={() => setShowModalSignup(true)}
                className="signup"
                exact
              >
                Registrarse
              </div>
            </div>
          )}
          {showModalLogin && (
            <ModalLogin setShowModalLogin={setShowModalLogin}>
              <Login setShowModalLogin={setShowModalLogin} />
            </ModalLogin>
          )}
          {showModalSignup && (
            <ModalSignup setShowModalSignup={setShowModalSignup}>
              <Signup setShowModalSignup={setShowModalSignup} />
            </ModalSignup>
          )}
          {user && (
            <NavLink to={`/user/${user.data.nickname}`}>
              <div className="user-info">
                <img
                  className="avatar"
                  src={`http://localhost:5555/${
                    user.data.avatar || "default-avatar.png"
                  }`}
                  alt="avatar"
                />
              </div>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
