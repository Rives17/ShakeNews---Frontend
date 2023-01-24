import { useUser } from "../Contexts/UserContext";

const useAwesomeFetch = (url) => {
  const [user] = useUser()
  const awesomeFetch = async (body) => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      }
    })
    const data = await res.json()
    return data
  }
  return awesomeFetch
}

export default useAwesomeFetch
