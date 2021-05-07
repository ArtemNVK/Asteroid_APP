import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useAsteroidIdSearch(id) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [asteroid, setAsteroid] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `https://api.nasa.gov/neo/rest/v1/neo/${id}?`,
      params: { api_key: process.env.REACT_APP_NASA_API_KEY },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setAsteroid(res.data)
      setLoading(false)
      
    })
    .catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [id])

  return { loading, error, asteroid }

}
