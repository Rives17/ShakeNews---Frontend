import { useState } from "react";
import "./Signup.css";
import Swal from "sweetalert2";

function Signup({setShowModalSignup}) {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(false);
  const [,setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("http://localhost:5555/api/signup", {
      method: "POST",
      body: JSON.stringify({ nickName, email, password, repeatPassword }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      setShowModalSignup(false)
      Swal.fire({
        title: "¡Te has registrado correctamente!",
        text: "Para iniciar sesión debes verificar tu cuenta. Revisa tu correo electrónico.",
        allowOutsideClick: true,
        background: '#1d1e1f',
        icon: 'success',
        width: '20%'
      })
    } else {
      setError(data.error);
    }
  };

  return (
    <div className="flex-container-signup">
      <h1>Registrarse</h1>
      <hr className="hr-signup"></hr>
      <p className="terminos">
        Al continuar, aceptas nuestro Acuerdo del usuario y nuestra política de
        privacidad.
      </p>
      <form onSubmit={handleSubmit} className="form-signup">
        <label>
          <input
            className="nickname"
            placeholder="Nombre de usuario"
            required
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            type="text"
          />
        </label>
        <label>
          <input
            className="email"
            placeholder="Correo electrónico"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </label>
        <label>
          <input
            className="password"
            placeholder="Contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </label>
        <label>
          <input
            className="repeatPassword"
            placeholder="Confirmar contraseña"
            required
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            type="password"
          />
        </label>
        <div className="button">
          <button className="button-signup">Crear usuario</button>
        </div>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
