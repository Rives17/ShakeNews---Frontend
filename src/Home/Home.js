
import Noticias from "./Noticias";
import './Home.css'


function Home() {

  return (
    <div >
        <div className="News">
            <Noticias />
        </div>
        <aside className="categorias" >
          <h1>Categorias</h1>
        </aside>
    </div>
  );
}

export default Home;
