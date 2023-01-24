import { message } from "antd";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useUser } from "../../Contexts/UserContext";
import "./Login.css";

function Login({ setShowModalLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useUser();
  const [error, setError] = useState(false);
  const [, setLoading] = useState(false);
  const [storageType, setStorageType] = useState("session");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("http://localhost:5555/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      setUser(data, storageType);
      setShowModalLogin(false);
    } else {
      setError(data.error);
    }
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="flex-container-login">
      <h1>Iniciar sesión</h1>
      <hr className="hr-login"></hr>
      <p className="terminos">
        Al continuar, aceptas nuestro Acuerdo del usuario y nuestra política de
        privacidad.
      </p>
      <form onSubmit={handleSubmit} className="form-login">
        <label>
          <input
            className="correo"
            placeholder="Correo electrónico"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </label>
        <label>
          <input
            className="contraseña"
            placeholder="Contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </label>
        <label className="label-remember">
          <p className="remember"> Recuérdame </p>
          <input
            className="checkbox"
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setStorageType("local");
              } else {
                setStorageType("session");
              }
            }}
          />
        </label>
        {error && <p className="error">{message.error}</p>}
        <div className="button">
          <button className="button-login">Iniciar sesión</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
