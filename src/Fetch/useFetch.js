import { useState, useEffect } from 'react'
import { useUser } from '../Contexts/UserContext'

function useFetch(url) {
    const [results, setResults] = useState(false)
    const [user] = useUser()
    const token = user && user.token

    useEffect(() => {
      const f = async () => {
          const res = await fetch(url, {
            headers: !token ? {} : {
              'Authorization': 'Bearer ' + token
            }
          })
          const data = await res.json()
          setResults(data)
      }
      f()
    }, [url, token])

    return results
}

export default useFetch
