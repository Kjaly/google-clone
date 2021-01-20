import React, { useEffect, useState } from 'react'
import API_KEY from './keys'

const CONTEXT__KEY = 'c86df8234a3cfec8b'

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async() => {
      fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT__KEY}&q=${term}`)
        .then(res=>res.json())
        .then (result=>setData(result))
    }
    fetchData()
  }, [term])

  return {data}
}

export default useGoogleSearch
