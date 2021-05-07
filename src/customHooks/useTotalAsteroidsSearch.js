import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useTotalAsteroidsSearch() {

const [total, setTotal] = useState();    

  useEffect(() => {
    let cancel
    axios({
      method: 'GET',
      url: 'https://api.nasa.gov/neo/rest/v1/neo/browse?',
      params: { api_key: 'DEMO_KEY' },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => setTotal(res.data.page.total_elements))
      .catch(e => {
      if (axios.isCancel(e)) return
    })
    return () => cancel()
  }, [])

  return { total }
}
