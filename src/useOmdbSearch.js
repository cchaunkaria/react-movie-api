import { useState, useEffect} from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = "5622a00e81c564543";

const useOmdbSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(`https://www.omdbapi.com/?apikey=b76a2e96&s=${term}`
            ).then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData();

    }, [term])

    return { data }
  
}

export default useOmdbSearch