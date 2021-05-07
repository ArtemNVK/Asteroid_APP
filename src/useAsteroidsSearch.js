import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useAsteroidsSearch(pageNumber, pageSize) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [asteroids, setAsteroids] = useState([])
  const [hasMore, setHasMore] = useState(false)


  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'https://api.nasa.gov/neo/rest/v1/neo/browse?',
      params: { page: pageNumber, size: pageSize, api_key: process.env.REACT_APP_NASA_API_KEY },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setAsteroids(prevAsteroids => {
        return [...new Set([...prevAsteroids, ...res.data.near_earth_objects])]
      })
      setHasMore(res.data.near_earth_objects.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [pageNumber, pageSize])

  return { loading, error, asteroids, hasMore }
}
