import { Route, Switch } from "react-router-dom";
import './App.css';
import Sidebar from "./NavBar/Sidebar";
import CreateNews from "./Paginas/News/CreateNews/CreateNews"
import Home from "./Paginas/Home/Home/Home";
import Login from "./Paginas/Login/Login";
import Signup from "./Paginas/Signup/Signup";
import Profile from "./Paginas/Profile/Profile/Profile";
import PublicProfile from "./Paginas/Profile/PublicProfile/PublicProfile";
import EditUser from "./Paginas/Profile/EditUser/EditUser";
import NoticiaId from "./Paginas/News/NewsId/NoticiaID"
import EditNews from "./Paginas/News/EditNews/EditNews";
import FilterCategory from "./Hooks/FilterCategoy";
import { useUser } from "./Contexts/UserContext";

function App() {
  const [user] = useUser()

  return (
    <div className="App">
      <header className="App-header">
      <Sidebar />
      </header>
      <main className="App-main" >
        <div className="body" >
          <Switch>
            <Route path="/createNews" exact >
              <CreateNews />
            </Route>
            {user &&
            <Route path={`/user/${user.data?.nickname}`} exact >
              <Profile />
            </Route>
            }
            <Route path="/user/:nickname" exact >
              <PublicProfile />
            </Route>
            <Route path="/listNewsId/:id" exact >
              <NoticiaId />
            </Route>
            <Route path="/listNews/:categoria" exact >
              <FilterCategory />
            </Route>
            <Route path="/listNewsId/:id/edit" exact >
              <EditNews />
            </Route>
            <Route path="/api/editUsers/:id" exact >
              <EditUser />
            </Route>
            <Route path="/login" exact >
              <Login />
            </Route>
            <Route path="/signup" exact >
              <Signup />
            </Route>
            <Route path="/" exact >
              <Home />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
