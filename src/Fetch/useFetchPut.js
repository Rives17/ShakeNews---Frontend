import { useUser } from "../Contexts/UserContext";

const useFetchPut = (url) => {
  const [user] = useUser()
  const fetchPut = async (body) => {
    const res = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      }
    })
    if (res.ok) {
      const data = await res.json()
      return data
    }
      return false
  }
  return fetchPut
}

export default useFetchPut
