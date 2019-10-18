import { useState, useEffect } from 'react'
import axios from 'axios'

export function useFetchCategories () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios({
      url: 'https://petgram-server-manuel-ojeda-f34cl1vxn.now.sh/categories'
    }).then((response) => {
      setCategories(response.data)
      setLoading(false)
    })
  }, [])

  return { categories, loading }
}
