import logoNews from "../images/shaker.png";
import "./Valoraciones.css";
import { useState, useEffect } from "react";

function Valoraciones({ id, user, valoraciones }) {
  const [hasVoted, setHasVoted] = useState(false);
  const [votos, setVotos] = useState(valoraciones);
  const token = user && user.token
  const [shaked, setShaked] = useState(false)

  useEffect(() => {
    const getUserVote = async () => {
      const res = await fetch(`http://localhost:5555/news/${id}/vote`, {
        headers: !token ? {} : {
          'Authorization': 'Bearer ' + token
        },
      })

      if (res.ok) {
        const data = await res.json();
        setHasVoted(data.hasVoted);
      }
    };
    token && getUserVote();
  }, );

  const toggleValoracion = async () => {

    setShaked(!hasVoted)
    const res = await fetch(`http://localhost:5555/news/${id}/vote`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (res.ok) {
      const data = await res.json();
      setHasVoted(data.hasVoted);
      setVotos(data.valoraciones);
    }
  };

  return (
    <div>
      <div className="counter">
        {" "}
        <p> {votos} shakes </p>{" "}
      </div>
      <img id="logoNewsId" className={`logoNews ${shaked? "shaked" : ""}`} src={logoNews} alt="" />
      <button onClick={toggleValoracion}  className="button-shakes" id="button-shakes">
        {!hasVoted ? "Shake" : "unShake"}
      </button>
    </div>
  );
}

export default Valoraciones;