import { useUser } from "../Contexts/UserContext";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

function useFetchDelete(url) {
  const [user] = useUser();
  const token = user && user.token;
  const history = useHistory();

  const f = async () => {
      await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    history.go()
  };
  return f;
}

export default useFetchDelete;
